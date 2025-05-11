import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Event } from '../../models/Event';
import { EventService } from '../../services/event.service';
import { Result } from '../../models/result.enum';
import { BetSelectionRequest } from '../../models/bet-selection-request';
import { BetRequest } from '../../models/bet-request';
import { BetService } from '../../services/bet.service';
import { BetSelectionService } from '../../services/bet-selection.service';
import { SportFilterService } from '../../services/sport-filter.service';

@Component({
  selector: 'app-event',
  imports: [CommonModule,FormsModule],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent implements OnInit {
  events: Event[] = [];
  filtered: Event[] = [];
  filterDate: string = '';
  filterLeague: string = '';

  constructor(
    private eventService: EventService,
    private betSelectionService: BetSelectionService,
    private filterService: SportFilterService
  ) {}

  ngOnInit(): void {
    this.eventService.getEvents().subscribe({
      next: (data) => {
        this.events = data;
        this.filtered = data; 
      },
      error: (err) => console.error('Błąd przy pobieraniu eventów', err),
    });
  
    this.filterService.selectedSport$.subscribe((sportKey) => {
      if (sportKey) {
        this.filtered = this.events.filter(e => e.sportKey === sportKey);
      } else {
        this.filtered = this.events; 
      }
    });
  }

  addToBet(event: Event, result: Result) {
    let odds = 1;
    switch(result) {
      case 'HOME_WIN':
        odds = parseFloat(event.homeTeamOdds || '1');
        break;
      case 'AWAY_WIN':
        odds = parseFloat(event.awayTeamOdds || '1');
        break;
      case 'DRAW':
        odds = parseFloat(event.drawOdds || '1');
        break;
    }
  
    this.betSelectionService.addSelection({
      eventId: event.eventId,
      homeTeam: event.homeTeam,
      awayTeam: event.awayTeam,
      predictedResult: result,
      lockedOdds: odds
    });
  }
  filteredEvents(): Event[] {
    return this.events.filter(event => {
      const matchesDate = this.filterDate
        ? new Date(event.startTime).toISOString().slice(0, 10) === this.filterDate
        : true;

      const matchesLeague = this.filterLeague
        ? event.sportTitle?.toLowerCase().includes(this.filterLeague.toLowerCase())
        : true;

      return matchesDate && matchesLeague;
    });
}

}
