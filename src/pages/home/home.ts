import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PagseguroPgtoServiceProvider } from '../../providers/pagseguro-pgto-service/pagseguro-pgto-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private pagseg: PagseguroPgtoServiceProvider) {
    this.pagseg.iniciar("seu e-mail pagseguro", "token sandbox", true);

  }

}
