import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  error = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.username, this.password).subscribe({
      next: (res) => {
        console.log('✅ Login status:', res.status);
        console.log('🔐 JWT:', res.jwtToken);
    
        if (res.status === 'OK') {
          localStorage.setItem('jwtToken', res.jwtToken);
          // Można przekierować usera dalej, np:
          // this.router.navigate(['/dashboard']);
        } else {
          this.error = 'Logowanie nie powiodło się.';
        }
      },
      error: () => {
        this.error = 'Błąd połączenia lub niepoprawne dane.';
      }
    });
  }
}