import { Component } from '@angular/core';
import { SportDTO } from '../../models/sport.dto';
import { SportServiceService } from '../../services/sport-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sport',
  imports: [CommonModule],
  templateUrl: './sport.component.html',
  styleUrl: './sport.component.css'
})
export class SportComponent {
  sports: SportDTO[] = [];

  constructor(private sportService: SportServiceService) {}

  ngOnInit(): void {
    this.sportService.getSport().subscribe({
      next: (data) => this.sports = data,
      error: (err) => console.error('Błąd przy pobieraniu sportów:', err)
    });
  }
}
