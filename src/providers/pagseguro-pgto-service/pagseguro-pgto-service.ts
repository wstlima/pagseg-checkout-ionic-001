import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PagseguroPgtoServiceProvider {

  constructor(public http: HttpClient) {
    
  }

}
