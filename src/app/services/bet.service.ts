import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bet } from '../models/Bet';
import { BetRequest } from '../models/bet-request';

@Injectable({
  providedIn: 'root'
})
export class BetService {

  constructor(private http:HttpClient) { }

  getActiveBets():Observable<Bet[]> {
    return this.http.get<Bet[]>('http://localhost:8080/bets'); 
  }
  placeBet(bet: BetRequest): Observable<Bet> {
    return this.http.post<Bet>('http://localhost:8080/bets/place', bet); 
  }
}
