import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarBetComponent } from "./components/sidebar-bet/sidebar-bet.component";
import { SidebarLeftComponent } from "./components/sidebar-left/sidebar-left.component";
import { HeaderComponent } from "./components/header/header.component";
import { AuthService } from './services/auth.service';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarBetComponent, SidebarLeftComponent, HeaderComponent, CommonModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'football-app-frontend';
  isLoggedIn: boolean = false;
  constructor(private authService: AuthService) { }
  ngOnInit() {
    this.authService.isLoggedIn$.subscribe(isLogged => {
      this.isLoggedIn = isLogged;
    });
  }

}
