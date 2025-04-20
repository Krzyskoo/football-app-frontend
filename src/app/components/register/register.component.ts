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
  username = '';
  password = '';
  error = '';

  constructor(private authService: AuthService, private router: Router) { }
   // Inject AuthService if needed

   register(){
    this.authService.register(this.username, this.password).subscribe({
      next: (res) => {
        console.log('✅ Register status:', res);
        if (res === 'User registered successfully') {
          // Można przekierować usera dalej, np:
           this.router.navigate(['/event']);
        } else {
          this.error = 'Rejestracja nie powiodła się.';
        }
      },
      error: () => {
        this.error = 'Błąd połączenia lub niepoprawne dane.';
      }
    });
   }

}
