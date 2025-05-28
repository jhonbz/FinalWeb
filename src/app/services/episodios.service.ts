import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Episodio {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
}

@Injectable({
  providedIn: 'root'
})

export class EpisodioService {

  private baseUrl = 'https://rickandmortyapi.com/api/episode';

  constructor(private http: HttpClient) {}

  getEpisodios(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }

  getPersonajesPorIds(ids: string): Observable<any> {
    return this.http.get(`https://rickandmortyapi.com/api/character/${ids}`);
  }
}
