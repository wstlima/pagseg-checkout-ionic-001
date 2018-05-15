import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class VarGlobalProvider {

  public status: boolean = false;

  constructor() { }

  setStatusScript(status: boolean) {
    this.status = status;
  }

  getStatusScript() {
    return this.status;
  }

}
