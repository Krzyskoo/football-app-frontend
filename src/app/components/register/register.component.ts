import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  email = '';
  password = '';
  error = '';
  success = '';

  constructor(private authService: AuthService, private router: Router) { }

   register(){
    this.authService.register(this.email, this.password).subscribe({
      next: (res) => {
        console.log('✅ Odpowiedź z backendu:', res);
        this.success = 'Konto utworzone!';
        this.error = '';
        setTimeout(() => this.router.navigate(['/login']), 1500);
      },
      error: (err) => {
        console.error('❌ Błąd rejestracji:', err);
        this.error = 'Rejestracja nie powiodła się.';
        this.success = '';
      }
    });
   }

}
