import { Component, Input, OnInit } from '@angular/core';
import { BetSelectionRequest } from '../../models/bet-selection-request';
import { EventService } from '../../services/event.service';
import { Event } from '../../models/Event';
import { BetRequest } from '../../models/bet-request';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BetSelectionService } from '../../services/bet-selection.service';
import { BetSelectionDetailed } from '../../models/bet-selection-detailed';
import { BetService } from '../../services/bet.service';

@Component({
  selector: 'app-sidebar-bet',
  imports: [CommonModule, FormsModule],
  templateUrl: './sidebar-bet.component.html',
  styleUrl: './sidebar-bet.component.css'
})
export class SidebarBetComponent implements OnInit {
  @Input() events: Event[] = [];
  betSelections: BetSelectionDetailed[] = [];
  stake: number = 0;

  constructor(
    private betSelectionService: BetSelectionService,
    private eventService: EventService,
    private betService: BetService
  ) {}

  ngOnInit(): void {
    this.betSelectionService.selections$.subscribe(data => {
      this.betSelections = data;
    });
  }

  get totalOdds(): number {
    return this.betSelections.reduce((acc, sel) => acc * sel.lockedOdds, 1);
  }

  get potentialWin(): number {
    return this.totalOdds * this.stake;
  }

  remove(index: string) {
    this.betSelectionService.removeSelection(index);
  }
  placeBet(): void {
    const betRequest: BetRequest = {
      amount: this.stake,
      selections: this.betSelections.map(sel => ({
        eventId: sel.eventId,
        predictedResult: sel.predictedResult
      }))
    };
  
    this.betService.placeBet(betRequest).subscribe({
      next: (response) => {
        console.log('Zakład postawiony:', response);
        this.betSelectionService.clearSelections(); // Wyczyść kupon
        this.stake = 0;
      },
      error: (error) => {
        console.error('Błąd przy składaniu zakładu:', error);
      }
    });
  }
  
}
