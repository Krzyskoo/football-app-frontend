import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private baseUrl = 'http://localhost:8080'; 

  constructor(private http:HttpClient) { }
  createPaymentIntent(amount: number, currency: string): Observable<{ checkout_url: string }> {
    const body = {
      amount,
      currency
    };
    return this.http.post<{ checkout_url: string }>(`${this.baseUrl}/create-payment-intent`, body);
  }

}
