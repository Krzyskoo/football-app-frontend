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
  constructor(private eventService: EventService){}

  ngOnInit(): void {
    this.eventService.getEvents('soccer_poland_ekstraklasa').subscribe({
      next: (data) => (this.events = data),
      error: (err) => console.error('Błąd przy pobieraniu eventów', err),
    });
  }

}
