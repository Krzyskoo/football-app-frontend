import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BetSelectionRequest } from '../models/bet-selection-request';
import { BetSelectionDetailed } from '../models/bet-selection-detailed';

@Injectable({
  providedIn: 'root'
})
export class BetSelectionService {
  private selectionsSubject = new BehaviorSubject<BetSelectionDetailed[]>([]);
  selections$ = this.selectionsSubject.asObservable();

  get selections(): BetSelectionDetailed[] {
    return this.selectionsSubject.value;
  }

  addSelection(selection: BetSelectionDetailed): void {
    const exists = this.selections.some(s => s.eventId === selection.eventId);
    if (!exists) {
      this.selectionsSubject.next([...this.selections, selection]);
    }
  }

  removeSelection(eventId: string): void {
    this.selectionsSubject.next(this.selections.filter(s => s.eventId !== eventId));
  }

  clearSelections(): void {
    this.selectionsSubject.next([]);
  }
}
