import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { Bet } from '../../models/Bet';
import { UserService } from '../../services/user.service';
import { BetService } from '../../services/bet.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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

  constructor(private userService: UserService, private betService: BetService) {}

  ngOnInit(): void {
    this.userService.getUserProfile().subscribe(user => (this.user = user));
    this.betService.getActiveBets().subscribe(bets => (this.bets = bets));
  }

  selectBet(bet: Bet): void {
    this.selectedBet = bet;
  }

}
