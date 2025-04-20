import { Component } from '@angular/core';
import { SportDTO } from '../../models/sport.dto';
import { SportServiceService } from '../../services/sport-service.service';
import { SportFilterService } from '../../services/sport-filter.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sidebar-left',
  imports: [CommonModule, FormsModule],
  templateUrl: './sidebar-left.component.html',
  styleUrl: './sidebar-left.component.css'
})
export class SidebarLeftComponent {
  sports: SportDTO[] = [];
  topLeagues: SportDTO[] = [];
  otherSports: SportDTO[] = [];
  selectedKey: string | null = null;
  isOpen: boolean = true;
  phrases: string[] = [
    'poland_ekstraklasa',
    'england_premier_league',
    'germany_bundesliga',
    'usa_mls',
    'spain_la_liga',
    'belgium_first_div'
  ];
  searchQuery: string = '';

  constructor(
    private sportService: SportServiceService,
    private filterService: SportFilterService
  ) {}

  ngOnInit(): void {
    this.sportService.getSport().subscribe({
      next: (data) => {
        this.sports = data;
        this.topLeagues = data.filter(sport => this.phrases.some(phrase => sport.key.toLowerCase().includes(phrase)));
        this.otherSports = data.filter(sport => sport.key.toLowerCase().includes('soccer'));
      },
      error: (err) => console.error('Błąd przy pobieraniu sportów:', err)
    });
  }

  filterBySport(sportKey: string) {
    this.selectedKey = sportKey;
    this.filterService.setSelectedSport(sportKey);
  }
  toggleOpen() {
    this.isOpen = !this.isOpen;
  }
  



}
