import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../models/Event';
import { BetRequest } from '../models/bet-request';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private baseUrl = 'http://localhost:8080/bet/events';

  constructor(private http:HttpClient) { }

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.baseUrl);
  }
  placeBet(bet: BetRequest): Observable<any> {
    return this.http.post('http://localhost:8080/bets/place', bet);
  }
}
