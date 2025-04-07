import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SportDTO } from '../models/sport.dto';

@Injectable({
  providedIn: 'root'
})
export class SportServiceService {

  private authUrl = 'http://localhost:8080/sports'; 
  constructor(private http: HttpClient) {}

  getSport():Observable<SportDTO[]>{
    return this.http.get<SportDTO[]>(this.authUrl);
  }

}
