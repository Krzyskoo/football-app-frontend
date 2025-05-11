import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  sendContactMessage(name: string, email: string, subject: string, message: string) {
    return this.http.post('http://localhost:8080/contact', {
      name,
      email,
      subject,
      message
    }, { responseType: 'text' }); 
  }

}
