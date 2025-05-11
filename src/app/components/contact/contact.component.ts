import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  name = '';
  email = '';
  message = '';
  subject ='';
  success = '';
  error = '';

  constructor(private http: HttpClient, private contactService:ContactService) {}

  sendMessage() {
    this.contactService.sendContactMessage(this.name, this.email, this.subject, this.message).subscribe({
      next: () => {
        window.alert('✅ Your message has been sent successfully!');
        this.success = 'Message sent successfully!';
        this.error = '';
        this.name = '';
        this.email = '';
        this.subject = '';
        this.message = '';
      },
      error: () => {
        window.alert('❌ Failed to send message. Please try again later.');
        this.error = 'Failed to send message. Please try again later.';
        this.success = '';
      }
    });
  }

  
}
