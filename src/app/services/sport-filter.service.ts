import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SportFilterService {

  private selectedSportSource = new BehaviorSubject<string | null>(null);
  selectedSport$ = this.selectedSportSource.asObservable();

  setSelectedSport(sportKey: string) {
    this.selectedSportSource.next(sportKey);
  }
}
