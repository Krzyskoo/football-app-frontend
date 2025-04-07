import { Component } from '@angular/core';
import { PaymentService } from '../../services/payment.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-payment',
  imports: [CommonModule, FormsModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
  amount = 1000;
  currency = 'USD';

  constructor(private paymentService: PaymentService) {}

  createPayment() {
    this.paymentService.createPaymentIntent(this.amount, this.currency).subscribe({
      next: (response) => {
        const url = response.checkout_url;
        if (url) {
          window.open(url, '_blank', 'noopener,noreferrer,width=800,height=800');
        }
      },
      error: (err) => {
        console.error('Błąd przy tworzeniu płatności:', err);
      }
    });
  }
  
}