webpackJsonp([0],{

/***/ 135:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 135;

/***/ }),

/***/ 177:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 177;

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(224);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\PROJETOS\IONIC\PAGSEGURO\versoes\pagseg-checkout-ionic-001\pagseg-checkout-ionic-001\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Carrinho" tabIcon="cart"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Sobre" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Contato" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\PROJETOS\IONIC\PAGSEGURO\versoes\pagseg-checkout-ionic-001\pagseg-checkout-ionic-001\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\PROJETOS\IONIC\PAGSEGURO\versoes\pagseg-checkout-ionic-001\pagseg-checkout-ionic-001\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\PROJETOS\IONIC\PAGSEGURO\versoes\pagseg-checkout-ionic-001\pagseg-checkout-ionic-001\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\PROJETOS\IONIC\PAGSEGURO\versoes\pagseg-checkout-ionic-001\pagseg-checkout-ionic-001\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\PROJETOS\IONIC\PAGSEGURO\versoes\pagseg-checkout-ionic-001\pagseg-checkout-ionic-001\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_pagseguro_pgto_service_pagseguro_pgto_service__ = __webpack_require__(225);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import scriptjs from 'scriptjs';
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, pagseg) {
        this.navCtrl = navCtrl;
        this.pagseg = pagseg;
        // Setar o Email, Token e se o ambiente é o SandBox
        this.pagseg.iniciar("comercial@siscontrole.com.br", "5433791AB7224A0EA8CFE622234E1FEE", true);
    }
    HomePage.prototype.ionViewDidEnter = function () {
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\PROJETOS\IONIC\PAGSEGURO\versoes\pagseg-checkout-ionic-001\pagseg-checkout-ionic-001\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Carrinho</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-label stacked>Nome</ion-label>\n      <ion-input (blur)="pagseg.buscaBandeira()" type="text" name="numCard" [(ngModel)]="pagseg.dados.numCard"  #numCard="ngModel"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Validade Cartão (MM)</ion-label>\n      <ion-input type="number" name="mesValidadeCard" [(ngModel)]="pagseg.dados.mesValidadeCard" #mesValidadeCard="ngModel"></ion-input>\n    </ion-item>    \n\n    <ion-item>\n      <ion-label stacked>Validade Cartão (AA)</ion-label>\n      <ion-input type="number" name="anoValidadeCard" [(ngModel)]="pagseg.dados.anoValidadeCard" #anoValidadeCard="ngModel"></ion-input>\n    </ion-item>  \n    \n    <ion-item>\n      <ion-label stacked>Cod Segurança</ion-label>\n      <ion-input type="number" name="codSegCard" [(ngModel)]="pagseg.dados.codSegCard" #codSegCard="ngModel"></ion-input>\n    </ion-item>     \n\n    <ion-item>\n      <ion-label stacked>Nome</ion-label>\n      <ion-input type="text" name="nome" [(ngModel)]="pagseg.dados.nome" #nome="ngModel"></ion-input>\n    </ion-item>     \n\n    <ion-item>\n      <ion-label stacked>CPF</ion-label>\n      <ion-input type="text" name="cpf" [(ngModel)]="pagseg.dados.cpf" #cpf="ngModel"></ion-input>\n    </ion-item>       \n    \n    <ion-item>\n      <ion-label stacked>Data Nascimento</ion-label>\n      <ion-input type="text" name="nascimento" [(ngModel)]="pagseg.dados.nascimento" #nascimento="ngModel"></ion-input>\n    </ion-item> \n\n    <ion-item>\n      <ion-label stacked>Telegone (DD) 123456789</ion-label>\n      <ion-input type="text" name="telefone" [(ngModel)]="pagseg.dados.telefone" #telefone="ngModel"></ion-input>\n    </ion-item>     \n\n    <ion-item>\n      <ion-label stacked>Email</ion-label>\n      <ion-input type="email" name="email" [(ngModel)]="pagseg.dados.email" #email="ngModel"></ion-input>\n    </ion-item>    \n    \n    <ion-item>\n      <ion-label stacked>Endereço</ion-label>\n      <ion-input type="text" name="logradouro" [(ngModel)]="pagseg.dados.logradouro" #logradouro="ngModel"></ion-input>\n    </ion-item>     \n\n    <ion-item>\n      <ion-label stacked>Número</ion-label>\n      <ion-input type="text" name="numero" [(ngModel)]="pagseg.dados.numero" #numero="ngModel"></ion-input>\n    </ion-item>    \n\n    <ion-item>\n      <ion-label stacked>Bairro</ion-label>\n      <ion-input type="text" name="bairro" [(ngModel)]="pagseg.dados.bairro" #bairro="ngModel"></ion-input>\n    </ion-item>       \n\n    <ion-item>\n      <ion-label stacked>CEP</ion-label>\n      <ion-input type="text" name="cep" [(ngModel)]="pagseg.dados.cep" #cep="ngModel"></ion-input>\n    </ion-item>     \n    \n    <ion-item>\n      <ion-label stacked>Estado</ion-label>\n      <ion-input type="text" name="estado" [(ngModel)]="pagseg.dados.estado" #estado="ngModel"></ion-input>\n    </ion-item>      \n\n    <ion-item>\n      <ion-label stacked>Cidade</ion-label>\n      <ion-input type="text" name="cidade" [(ngModel)]="pagseg.dados.cidade" #cidade="ngModel"></ion-input>\n    </ion-item>    \n    \n    <ion-item>\n      <ion-label stacked>Parcela</ion-label>\n      <ion-select [(ngModel)]="pagseg.dados.parcelas" name="parcelas" #parcelas="ngModel">\n        <ion-option *ngFor="let p of pagseg.dados.parcelas" [value]="[{ quantity: p[\'quantity\'], installmentAmount: p[\'installmentAmount\'] }]">\n          {{ p[\'quantity\'] + "X " + p[\'installmentAmount\'] }}\n        </ion-option>\n    </ion-select>    \n         \n    </ion-item>   \n\n  </ion-list>\n\n  <button ion-button block (click)="pagseg.pagar()">Salvar</button>\n\n</ion-content>\n'/*ion-inline-end:"C:\PROJETOS\IONIC\PAGSEGURO\versoes\pagseg-checkout-ionic-001\pagseg-checkout-ionic-001\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_pagseguro_pgto_service_pagseguro_pgto_service__["a" /* PagseguroPgtoServiceProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagseguroPgtoServiceProvider; });
/* unused harmony export Credencial */
/* unused harmony export Dados */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__var_global_var_global__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_xml2js__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_xml2js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_xml2js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PagseguroPgtoServiceProvider = /** @class */ (function () {
    function PagseguroPgtoServiceProvider(http, storage, datepipe, varGlobais) {
        this.http = http;
        this.storage = storage;
        this.datepipe = datepipe;
        this.varGlobais = varGlobais;
        this.dados = new Dados();
    }
    // MÉTODO QUE DISPARA OUTROS MÉTODOS NECESSÁRIOS PARA A UTILIZAÇÃO DA API DO PAGSEGURO
    PagseguroPgtoServiceProvider.prototype.iniciar = function (email, token, isSandBox) {
        var _this = this;
        this.credencial = new Credencial();
        this.dados = new Dados();
        if (isSandBox) {
            this.credencial.urlSession = "https://ws.sandbox.pagseguro.uol.com.br/v2/sessions?email=" + email + "&token=" + token;
            this.credencial.urlPagSeguroDirectPayment = "https://stc.sandbox.pagseguro.uol.com.br/pagseguro/api/v2/checkout/pagseguro.directpayment.js";
        }
        else {
            this.credencial.urlSession = "https://pagseguro.uol.com.br/v2/sessions?email=" + email + "&token=" + token;
            this.credencial.urlPagSeguroDirectPayment = "https://stc.pagseguro.uol.com.br/pagseguro/api/v2/checkout/pagseguro.directpayment.js";
        }
        this.credencial.key = this.datepipe.transform(new Date(), "ddMMyyyyHHmmss");
        this.credencial.email = email;
        this.credencial.token = token;
        this.credencial.isSandBox = isSandBox;
        if (!this.varGlobais.getStatusScript()) {
            this.getSession(email, token).then(function () {
                _this.carregaPagSeguroDirectPayment().then(function () {
                    PagSeguroDirectPayment.setSessionId(_this.credencial.idSession);
                    _this.storage.set('credencial', _this.credencial);
                    console.log(PagSeguroDirectPayment);
                });
            });
        }
    };
    // RETORNA A SESSÃO QUE VAI SER UTILIZADA PELA API
    // ESTE É UM ID QUE É GERADO PELA API DO PAGSEGURO PARA FAZER O 
    // CONSUMO PARA CONCRETIZAR A TRANSAÇÃO
    PagseguroPgtoServiceProvider.prototype.getSession = function (email, token) {
        var _this = this;
        return new Promise(function (resolve) {
            resolve();
            var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
            var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
            var idSession = "";
            _this.http.post(_this.credencial.urlSession, {}, options).subscribe(function (data) {
                __WEBPACK_IMPORTED_MODULE_6_xml2js___default.a.parseString(data["_body"], function (err, result) {
                    idSession = JSON.stringify(result.session.id).replace(/[^a-zA-Z0-9_-]/g, '');
                });
                _this.credencial.idSession = idSession;
            });
        }).then(function () {
            return Promise.resolve(_this.credencial);
        });
    };
    // CARREGA O JAVASCRIPT DO PAGSEGURO PARA NOSSA VARIÁVEL 
    PagseguroPgtoServiceProvider.prototype.carregaPagSeguroDirectPayment = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var script = document.createElement('script');
            script.addEventListener('load', function (r) { return resolve(); });
            script.src = _this.credencial.urlPagSeguroDirectPayment;
            document.head.appendChild(script);
        });
    };
    // RETORNA OS MEIOS DE PAGAMENTO DISPONÍVEIS NA CONTA PARA EXIBIÇÃO NO CHECKOUT
    // BUSCA A BANDEIRA DO CARTÃO (EX: VISA, MASTERCARD ETC...) E DEPOIS BUSCA AS PARCELAS;
    // ESTA FUNÇÃO É CHAMADA QUANDO O INPUT QUE RECEBE O NÚMERO DO CARTÃO PERDE O FOCO;
    PagseguroPgtoServiceProvider.prototype.buscaBandeira = function () {
        var _this = this;
        PagSeguroDirectPayment.setSessionId(this.credencial.idSession);
        PagSeguroDirectPayment.getBrand({
            cardBin: this.dados.numCard,
            success: function (response) {
                console.log('numCard', _this.dados.numCard);
                _this.dados.bandCard = response.brand.name;
                _this.buscaParcelas();
                console.log('Bandeira do cartão: ' + _this.dados.bandCard);
            },
            error: function (response) { console.log('buscaBandeira', response); }
        });
    };
    // VERIFICA QUAL BANDEIRA FOI INFORMADA PELO CLIENTE AO DIGITAR OS DADOS DO CARTÃO E RETORNA AS 
    // PARCELAS DISPONPIVEIS E VAI BUSCAR AS PARCELAS NA API DO PAGSEGURO PARA O CLIENTE ESCOLHER  
    PagseguroPgtoServiceProvider.prototype.buscaParcelas = function () {
        var _this = this;
        PagSeguroDirectPayment.getInstallments({
            amount: '100',
            brand: this.dados.bandCard,
            maxInstallmentNoInterest: 3,
            success: function (response) {
                _this.dados.parcelas = response.installments[_this.dados.bandCard];
                console.log('parcelas: ' + response);
            },
            error: function (response) { console.log('buscaParcelas', response); }
        });
    };
    // INICIA OS PROCESSOS PARA QUE SEJA REALIZADO O PAGAMENTO
    // AO CLICAR NO BOTÃO PAGAR
    PagseguroPgtoServiceProvider.prototype.pagar = function () {
        var _this = this;
        //BUSCA O HASH DO COMPRADOR JUNTO A API DO PAGSEGURO
        this.dados.hashComprador = PagSeguroDirectPayment.getSenderHash();
        //CRIA O HASK DO CARTÃO DE CRÉDITO JUNTO A API DO PAGSEGURO
        PagSeguroDirectPayment.createCardToken({
            cardNumber: this.dados.numCard,
            cvv: this.dados.codSegCard,
            expirationMonth: this.dados.mesValidadeCard,
            expirationYear: this.dados.anoValidadeCard,
            brand: this.dados.bandCard,
            success: function (response) {
                _this.dados.hashCard = response.card.token;
                console.log(_this.dados);
                //NESTE MOMENTO JÁ TEMOS TUDO QUE PRECISAMOS!
                //HORA DE ENVIAR OS DADOS PARA O SERVIDOR PARA CONCRETIZAR O PAGAMENTO
                _this.enviaDadosParaServidor();
            },
            error: function (response) { console.log(response); }
        });
    };
    // DISPARA OUTROS MÉTODOS PARA PODER CONSUMIR A API DO PAGSEGURO E CONCRETIZAR A TRANSAÇÃO
    PagseguroPgtoServiceProvider.prototype.enviaDadosParaServidor = function () {
        this.pagarCheckoutTransp(this.dados).subscribe(function (result) { return console.log(result); });
    };
    //CARREGA O JAVASCRIPT DO PAGSEGURO E SETA A SESSÃO  
    PagseguroPgtoServiceProvider.prototype.carregaJavascriptPagseguro = function () {
        if (!this.varGlobais.getStatusScript()) {
            new Promise(function (resolve) {
                var script = document.createElement('script');
                script.addEventListener('load', function (r) { return resolve(); });
                script.src = 'https://stc.sandbox.pagseguro.uol.com.br/pagseguro/api/v2/checkout/pagseguro.directpayment.js';
                document.head.appendChild(script);
            });
            PagSeguroDirectPayment.setSessionId(this.credencial.idSession);
            this.varGlobais.setStatusScript(true);
        }
    };
    // MÉTODO INTERNO PARA MONTAR NOSSA URL QUE SERÁ USADA NO CONSUMO DA API PARA FAZER O PAGAMENTO
    PagseguroPgtoServiceProvider.prototype.montaQryStr = function (dados) {
        var url = '' +
            'email=' + this.credencial.email +
            '&token=' + this.credencial.token +
            '&paymentMode=default' +
            '&paymentMethod=creditCard' +
            '&receiverEmail=suporte@loja.com.br' +
            '&currency=BRL' +
            '&extraAmount=1.00' + /* <= especializar */
            '&itemId1=0001' + /* <= especializar */
            '&itemDescription1=Notebook Prata' + /* <= especializar */
            '&itemAmount1=24300.00' + /* <= especializar */
            '&itemQuantity1=1' +
            '&notificationURL=https://sualoja.com.br/notifica.html' +
            '&reference=REF1234' +
            '&senderName=Jose Comprador' +
            '&senderCPF=' + dados.cpf +
            '&senderAreaCode=11';
        '&senderPhone=' + dados.telefone +
            '&senderEmail=' + dados.email +
            '&senderHash=' + dados.hashComprador +
            '&shippingAddressStreet=' + dados.logradouro +
            '&shippingAddressNumber=' + dados.numero +
            '&shippingAddressComplement=nd' + /* <= especializar */
            '&shippingAddressDistrict=' + dados.bairro +
            '&shippingAddressPostalCode=' + dados.cep +
            '&shippingAddressCity=' + dados.cidade +
            '&shippingAddressState=' + dados.estado +
            '&shippingAddressCountry=BRA' +
            '&shippingType=1' +
            '&shippingCost=1.00' +
            '&creditCardToken=' + dados.hashCard +
            '&installmentQuantity=5' + /* <= especializar */
            '&installmentValue=125.22' + /* <= especializar */
            '&noInterestInstallmentQuantity=2' + /* <= especializar */
            '&creditCardHolderName=' + dados.nome + /* <= especializar */
            '&creditCardHolderCPF=' + dados.cpf + /* <= especializar */
            '&creditCardHolderBirthDate=27/10/1987' + /* <= especializar */
            '&creditCardHolderAreaCode=11' + /* <= especializar */
            '&creditCardHolderPhone=56273440' + /* <= especializar */
            '&billingAddressNumber=13840' + /* <= especializar */
            '&billingAddressComplement=5o andar' + /* <= especializar */
            '&billingAddressDistrict=Jardim Paulistano' + /* <= especializar */
            '&billingAddressPostalCode=01452002' + /* <= especializar */
            '&billingAddressCity=Sao Paulo' + /* <= especializar */
            '&billingAddressState=SP' + /* <= especializar */
            '&billingAddressCountry=BRA'; /* <= especializar */
        return url;
    };
    // MÉTODO QUE FAZ O CONSUMO COM TODOS OS DADOS NECESSÁRIOS PELA API 
    // COM A FINALIDADE DE EFETUAR O PAGAMENTO
    PagseguroPgtoServiceProvider.prototype.pagarCheckoutTransp = function (dados) {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded; charset=ISO-8859-1' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        //console.log('params',meusParams);
        var url = 'https://ws.sandbox.pagseguro.uol.com.br/v2/transactions/' +
            this.montaQryStr(dados);
        console.log('url', url);
        var body = JSON.stringify({ dados: dados });
        //console.log('body',body);
        return this.http.post(url, body, options)
            .map(function (res) { return res.json(); });
    };
    PagseguroPgtoServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__angular_common__["d" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_4__var_global_var_global__["a" /* VarGlobalProvider */]])
    ], PagseguroPgtoServiceProvider);
    return PagseguroPgtoServiceProvider;
}());

// CLASSE PARA ARMAZENAR NOSSOS DADOS DE ACESSO A CONTA DO PAGSEGURO
var Credencial = /** @class */ (function () {
    function Credencial() {
    }
    return Credencial;
}());

// CLASSE PARA ARMAZENAR OS DADOS DA TRANSAÇÃO DE CHECKOUT NECESSÁRIOS PARA CONSUMIR A API
var Dados = /** @class */ (function () {
    function Dados(obj) {
        this.nome = 'Danilo Azevendo Santos';
        this.telefone = '(77) 988997889';
        this.email = 'teste@sandbox.pagseguro.com.br';
        this.cpf = '957.937.874-61';
        this.nascimento = '16/09/1987';
        this.logradouro = 'Av Central';
        this.numero = '45';
        this.bairro = 'Centro';
        this.cep = '45002-055';
        this.cidade = 'Vitória da Conquista';
        this.estado = 'ba';
        this.numCard = '4111111111111111';
        this.mesValidadeCard = '12';
        this.anoValidadeCard = '2030';
        this.codSegCard = '123';
        this.parcelas = []; // preenchido dinamicamente
        Object.assign(this, obj, {}, {});
    }
    return Dados;
}());

//# sourceMappingURL=pagseguro-pgto-service.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VarGlobalProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VarGlobalProvider = /** @class */ (function () {
    function VarGlobalProvider() {
        this.status = false;
    }
    VarGlobalProvider.prototype.setStatusScript = function (status) {
        this.status = status;
    };
    VarGlobalProvider.prototype.getStatusScript = function () {
        return this.status;
    };
    VarGlobalProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], VarGlobalProvider);
    return VarGlobalProvider;
}());

//# sourceMappingURL=var-global.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(262);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_pagseguro_pgto_service_pagseguro_pgto_service__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_storage__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_http__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_var_global_var_global__ = __webpack_require__(228);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_11__ionic_storage__["a" /* IonicStorageModule */].forRoot({ name: '__meubd' }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_pagseguro_pgto_service_pagseguro_pgto_service__["a" /* PagseguroPgtoServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_12__angular_common__["d" /* DatePipe */],
                __WEBPACK_IMPORTED_MODULE_14__providers_var_global_var_global__["a" /* VarGlobalProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(221);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\PROJETOS\IONIC\PAGSEGURO\versoes\pagseg-checkout-ionic-001\pagseg-checkout-ionic-001\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\PROJETOS\IONIC\PAGSEGURO\versoes\pagseg-checkout-ionic-001\pagseg-checkout-ionic-001\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 328:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 330:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[239]);
//# sourceMappingURL=main.js.map