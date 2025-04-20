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
        if (res.status === 'OK') {          
           this.router.navigate(['/event']);
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