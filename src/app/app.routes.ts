import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SportComponent } from './components/sport/sport.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PaymentSuccessComponent } from './components/payment-success/payment-success.component';
import { PaymentCancelComponent } from './components/payment-cancel/payment-cancel.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EventComponent } from './components/event/event.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'sports', component: SportComponent},
    { path:'payment', component: PaymentComponent},
    { path: 'payment-success', component: PaymentSuccessComponent },
    { path: 'payment-cancel', component: PaymentCancelComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path:'event', component: EventComponent},
    { path: 'deposit', component: PaymentComponent },
    {path: 'register', component: RegisterComponent},
    {path:'login', component: LoginComponent},

  ];
