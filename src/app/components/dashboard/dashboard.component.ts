import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { Bet } from '../../models/Bet';
import { UserService } from '../../services/user.service';
import { BetService } from '../../services/bet.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PaymentService } from '../../services/payment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule,FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  user: User | null=null;
  bets: Bet[] = [];
  selectedBet: Bet | null = null;
  expandedBetId: number | null = null;

  constructor(private userService: UserService, private betService: BetService, private router: Router) {}

  ngOnInit(): void {
    this.userService.getUserProfile().subscribe(user => (this.user = user));
    this.betService.getActiveBets().subscribe(bets => (this.bets = bets));
  }

  selectBet(bet: Bet): void {
    this.selectedBet = bet;
  }
  goToDeposit(): void {
    this.router.navigate(['/deposit']);
  }
  goToEvents(): void{
    this.router.navigate(['/event'])
  }
  toggleDetails(betId: number) {
    if (this.expandedBetId === betId) {
      // Zwijanie
      this.expandedBetId = null;
      this.selectedBet = null;
    } else {
      // Rozwijanie
      this.expandedBetId = betId;
      this.selectedBet = this.bets.find(bet => bet.betId === betId) || null;
    }
  }
  
  


}
