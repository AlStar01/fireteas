import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MdSnackBar, MdSnackBarConfig } from '@angular/material';

import { Observable } from 'rxjs/Observable';

import { Contact } from './contact';

@Injectable()
export class ContactService {
  private contactUrl =
  'https://fireteas.azurewebsites.net/api/SendContactEmail' +
  '?code=R3nDxVWfcRmmGVW2/a0n4NBxfO9DgUuobkJstRFiTpMC5Sp0JRTfyg==';

  constructor(private http: HttpClient, private snackBar: MdSnackBar) { }

  sendContact(contact: Contact): Observable<any> {
    return this.http.post(this.contactUrl, contact);
  }

  openSnackBar(message: string): void {
    const config: MdSnackBarConfig = { duration: 3000 };

    this.snackBar.open(message, null, config);
  }
}
