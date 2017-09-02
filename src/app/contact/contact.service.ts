import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { Contact } from './contact';

@Injectable()
export class ContactService {
  private contactUrl =
  'https://fireteas.azurewebsites.net/api/SendContactEmail' +
  '?code=R3nDxVWfcRmmGVW2/a0n4NBxfO9DgUuobkJstRFiTpMC5Sp0JRTfyg==';

  constructor(private http: HttpClient) { }

  sendContact(contact: Contact): Observable<any> {
    return this.http.post(this.contactUrl, contact);
  }
}
