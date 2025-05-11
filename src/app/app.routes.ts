import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PaymentSuccessComponent } from './components/payment-success/payment-success.component';
import { PaymentCancelComponent } from './components/payment-cancel/payment-cancel.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EventComponent } from './components/event/event.component';
import { RegisterComponent } from './components/register/register.component';
import { ContactComponent } from './components/contact/contact.component';
import { authGuard } from './config/auth.guard';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path:'payment', component: PaymentComponent,canActivate: [authGuard] },
    { path: 'payment-success', component: PaymentSuccessComponent },
    { path: 'payment-cancel', component: PaymentCancelComponent },
    { path: 'dashboard', component: DashboardComponent,canActivate: [authGuard] },
    { path:'event', component: EventComponent,canActivate: [authGuard] },
    { path: 'deposit', component: PaymentComponent,canActivate: [authGuard] },
    {path: 'register', component: RegisterComponent},
    {path:'login', component: LoginComponent},
    {path:'contact', component: ContactComponent},

  ];
