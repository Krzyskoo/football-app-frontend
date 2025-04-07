import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Event } from '../../models/Event';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-event',
  imports: [CommonModule,FormsModule],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent implements OnInit {
  events: Event[] = [];
  filterDate: string = '';
  filterLeague: string = '';
  constructor(private eventService: EventService){}

  ngOnInit(): void {
    this.eventService.getEvents().subscribe({
      next: (data) => (this.events = data),
      error: (err) => console.error('Błąd przy pobieraniu eventów', err),
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
