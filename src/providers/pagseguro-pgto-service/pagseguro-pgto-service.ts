import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { DatePipe } from '@angular/common';
import { Http, RequestOptions, Headers } from '@angular/http';
import { VarGlobalProvider } from '../var-global/var-global';
import 'rxjs/add/operator/map';
import xml2js from 'xml2js';

declare var PagSeguroDirectPayment: any;

@Injectable()
export class PagseguroPgtoServiceProvider {
  
  public credencial: Credencial;
  public dados = new Dados();

  constructor(private http: Http, private storage: Storage, private datepipe: DatePipe, 
              private varGlobais: VarGlobalProvider) {}


  // MÉTODO QUE DISPARA OUTROS MÉTODOS NECESSÁRIOS PARA A UTILIZAÇÃO DA API DO PAGSEGURO
  iniciar(email, token, isSandBox) { 
    this.credencial = new Credencial();
    this.dados = new Dados();

    if (isSandBox) {
      this.credencial.urlSession = "https://ws.sandbox.pagseguro.uol.com.br/v2/sessions?email=" + email + "&token=" + token;
      this.credencial.urlPagSeguroDirectPayment = "https://stc.sandbox.pagseguro.uol.com.br/pagseguro/api/v2/checkout/pagseguro.directpayment.js";
      this.credencial.urlTransacao = 'https://ws.sandbox.pagseguro.uol.com.br/v2/transactions/';
    } else {
      this.credencial.urlSession = "https://pagseguro.uol.com.br/v2/sessions?email=" + email + "&token=" + token;
      this.credencial.urlPagSeguroDirectPayment = "https://stc.pagseguro.uol.com.br/pagseguro/api/v2/checkout/pagseguro.directpayment.js";
      this.credencial.urlTransacao = 'https://ws.pagseguro.uol.com.br/v2/transactions/';
    }

    this.credencial.key = this.datepipe.transform(new Date(), "ddMMyyyyHHmmss");
    this.credencial.email = email;
    this.credencial.token = token;
    this.credencial.isSandBox = isSandBox;

    if (!this.varGlobais.getStatusScript()) {
      this.getSession(email, token).then(() => {
        this.carregaPagSeguroDirectPayment().then(() => {
          PagSeguroDirectPayment.setSessionId(this.credencial.idSession);
          this.storage.set('credencial', this.credencial);
          console.log(PagSeguroDirectPayment);
        });
      });
    }
  }
  
  // RETORNA A SESSÃO QUE VAI SER UTILIZADA PELA API
  // ESTE É UM ID QUE É GERADO PELA API DO PAGSEGURO PARA FAZER O 
  // CONSUMO PARA CONCRETIZAR A TRANSAÇÃO
  private getSession(email, token) { 
    return new Promise((resolve) => {
      resolve();
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      let idSession = "";
      this.http.post(this.credencial.urlSession, {}, options).subscribe(data => {
        xml2js.parseString(data["_body"], function (err, result) {
          idSession = JSON.stringify(result.session.id).replace(/[^a-zA-Z0-9_-]/g, '');
        });
        this.credencial.idSession = idSession;
      });
    }).then(() => {
      return Promise.resolve(this.credencial);
    });
  }

  // CARREGA O JAVASCRIPT DO PAGSEGURO PARA NOSSA VARIÁVEL 
  carregaPagSeguroDirectPayment() {  
    return new Promise((resolve) => {
      let script: HTMLScriptElement = document.createElement('script');
      script.addEventListener('load', r => resolve());
      script.src = this.credencial.urlPagSeguroDirectPayment;
      document.head.appendChild(script);
    });
  }

  // RETORNA OS MEIOS DE PAGAMENTO DISPONÍVEIS NA CONTA PARA EXIBIÇÃO NO CHECKOUT
  // BUSCA A BANDEIRA DO CARTÃO (EX: VISA, MASTERCARD ETC...) E DEPOIS BUSCA AS PARCELAS;
  // ESTA FUNÇÃO É CHAMADA QUANDO O INPUT QUE RECEBE O NÚMERO DO CARTÃO PERDE O FOCO;
  buscaBandeira() { 
    PagSeguroDirectPayment.setSessionId(this.credencial.idSession);
    PagSeguroDirectPayment.getBrand({
      cardBin: this.dados.numCard,
      success: response => {
        console.log('numCard', this.dados.numCard);
        this.dados.bandCard = response.brand.name;
        this.buscaParcelas();
        console.log('Bandeira do cartão: ' + this.dados.bandCard);        
      },
      error: response => { console.log('buscaBandeira', response); }
    });
  }

  // VERIFICA QUAL BANDEIRA FOI INFORMADA PELO CLIENTE AO DIGITAR OS DADOS DO CARTÃO E RETORNA AS 
  // PARCELAS DISPONPIVEIS E VAI BUSCAR AS PARCELAS NA API DO PAGSEGURO PARA O CLIENTE ESCOLHER  
  buscaParcelas() { 
    PagSeguroDirectPayment.getInstallments({
      amount: '100',              //valor total da compra (deve ser informado)
      brand: this.dados.bandCard, //bandeira do cartão (capturado na função buscaBandeira)
      maxInstallmentNoInterest: 3,
      success: response => {
        this.dados.parcelas = response.installments[this.dados.bandCard];
        console.log('parcelas: ' + response);
      },
      error: response => { console.log('buscaParcelas', response) }
    });
  }

  // INICIA OS PROCESSOS PARA QUE SEJA REALIZADO O PAGAMENTO
  // AO CLICAR NO BOTÃO PAGAR
  pagar() { 
    
    //BUSCA O HASH DO COMPRADOR JUNTO A API DO PAGSEGURO
    this.dados.hashComprador = PagSeguroDirectPayment.getSenderHash();

    //CRIA O HASK DO CARTÃO DE CRÉDITO JUNTO A API DO PAGSEGURO
    PagSeguroDirectPayment.createCardToken({
      
      cardNumber: this.dados.numCard,
      cvv: this.dados.codSegCard,
      expirationMonth: this.dados.mesValidadeCard,
      expirationYear: this.dados.anoValidadeCard,
      brand: this.dados.bandCard,
      success: response => {

        this.dados.hashCard = response.card.token;
        console.log(this.dados);

        //NESTE MOMENTO JÁ TEMOS TUDO QUE PRECISAMOS!
        //HORA DE ENVIAR OS DADOS PARA O SERVIDOR PARA CONCRETIZAR O PAGAMENTO
        this.enviaDadosParaServidor();

      },
      error: response => { console.log(response) }
    });

  }

  // DISPARA OUTROS MÉTODOS PARA PODER CONSUMIR A API DO PAGSEGURO E CONCRETIZAR A TRANSAÇÃO
  enviaDadosParaServidor() {    
    this.pagarCheckoutTransp(this.dados).subscribe(result => console.log(result));
  }

  // MÉTODO INTERNO PARA MONTAR NOSSA URL QUE SERÁ USADA NO CONSUMO DA API PARA FAZER O PAGAMENTO
  montaQryStr(dados:Dados) {
    let url: string = ''+
    'email='+this.credencial.email+
    '&token='+this.credencial.token+
    '&paymentMode=default'+
    '&paymentMethod=creditCard'+
    '&receiverEmail=suporte@loja.com.br'+
    '&currency=BRL'+ 
    '&extraAmount=1.00'+    /* <= especializar */  
    '&itemId1=0001'+ /* <= especializar */ 
    '&itemDescription1=Notebook Prata'+ /* <= especializar */ 
    '&itemAmount1=24300.00'+ /* <= especializar */ 
    '&itemQuantity1=1'+
    '&notificationURL=https://sualoja.com.br/notifica.html'+
    '&reference=REF1234'+
    '&senderName=Jose Comprador'+
    '&senderCPF='+dados.cpf+
    '&senderAreaCode=11'
    '&senderPhone='+dados.telefone+
    '&senderEmail='+dados.email+
    '&senderHash='+dados.hashComprador+
    '&shippingAddressStreet='+dados.logradouro+
    '&shippingAddressNumber='+dados.numero+
    '&shippingAddressComplement=nd'+ /* <= especializar */ 
    '&shippingAddressDistrict='+dados.bairro+
    '&shippingAddressPostalCode='+dados.cep+
    '&shippingAddressCity='+dados.cidade+
    '&shippingAddressState='+dados.estado+
    '&shippingAddressCountry=BRA'+
    '&shippingType=1'+
    '&shippingCost=1.00'+
    '&creditCardToken='+dados.hashCard+
    '&installmentQuantity=5'+ /* <= especializar */ 
    '&installmentValue=125.22'+ /* <= especializar */ 
    '&noInterestInstallmentQuantity=2'+ /* <= especializar */ 
    '&creditCardHolderName='+dados.nome+ /* <= especializar */ 
    '&creditCardHolderCPF='+dados.cpf+ /* <= especializar */ 
    '&creditCardHolderBirthDate=27/10/1987'+ /* <= especializar */ 
    '&creditCardHolderAreaCode=11'+ /* <= especializar */ 
    '&creditCardHolderPhone=56273440'+ /* <= especializar */ 
    '&billingAddressNumber=13840'+ /* <= especializar */ 
    '&billingAddressComplement=5o andar'+ /* <= especializar */
    '&billingAddressDistrict=Jardim Paulistano'+ /* <= especializar */
    '&billingAddressPostalCode=01452002'+ /* <= especializar */
    '&billingAddressCity=Sao Paulo'+ /* <= especializar */
    '&billingAddressState=SP'+ /* <= especializar */
    '&billingAddressCountry=BRA'; /* <= especializar */      
    return url;
  }  
  
  // MÉTODO QUE FAZ O CONSUMO COM TODOS OS DADOS NECESSÁRIOS PELA API 
  // COM A FINALIDADE DE EFETUAR O PAGAMENTO
  public pagarCheckoutTransp (dados:Dados){

    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=ISO-8859-1' });
    let options = new RequestOptions({ headers: headers });  

    //console.log('params',meusParams);
    let url = this.credencial.urlTransacao+
               this.montaQryStr(dados);

    console.log('url',url);               

    let body = JSON.stringify({ dados });
    //console.log('body',body);
    return this.http.post(url, body, options)
                    .map(res => res.json());
  }  
}

// CLASSE PARA ARMAZENAR NOSSOS DADOS DE ACESSO A CONTA DO PAGSEGURO
export class Credencial {
  key: string;
  urlSession: string;
  urlPagSeguroDirectPayment: string;
  urlTransacao: string;
  idSession: string;
  email: string;
  token: string;
  isSandBox: boolean;
}

// CLASSE PARA ARMAZENAR OS DADOS DA TRANSAÇÃO DE CHECKOUT NECESSÁRIOS PARA CONSUMIR A API
export class Dados {
  public id: number;
  public nome: string = 'Danilo Azevendo Santos';
  public telefone: string = '(77) 988997889';
  public email: string = 'teste@sandbox.pagseguro.com.br';
  public cpf: string = '957.937.874-61';
  public nascimento: string = '16/09/1987';
  public logradouro: string = 'Av Central';
  public numero: string = '45';
  public bairro: string = 'Centro';
  public cep: string = '45002-055';
  public cidade: string = 'Vitória da Conquista';
  public estado: string = 'ba';
  public numCard: string = '4111111111111111';
  public mesValidadeCard: string = '12';
  public anoValidadeCard: string = '2030';
  public codSegCard: string = '123';
  public hashComprador: string;        // preenchido dinamicamente
  public bandCard: string;             // preenchido dinamicamente
  public hashCard: string;             // preenchido dinamicamente
  public parcelas: Array<Object> = []; // preenchido dinamicamente
  constructor(obj?) {
    Object.assign(this, obj, {}, {});
  }
}