import { Component,HostListener, OnInit } from '@angular/core';
import { NavbarComponent } from '../common/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { EpisodioService, Episodio } from './../../services/episodios.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rickymorty',
  imports: [NavbarComponent,CommonModule],
  standalone:true,
  templateUrl: './rickymorty.component.html',
  styleUrl: './rickymorty.component.scss'
})

export class RickymortyComponent implements OnInit {
  episodios: Episodio[] = [];
  personajes: any[] = [];

  constructor(
    private episodioService: EpisodioService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.episodioService.getEpisodios().subscribe((res: any) => {
      this.episodios = res.results;
    });

  }
  verPersonajes(ep: Episodio) {
    const ids = ep.characters.map(url => url.split('/').pop()).join(',');
    this.episodioService.getPersonajesPorIds(ids).subscribe((res: any) => {
      this.personajes = Array.isArray(res) ? res : [res];
    });
  }
}

