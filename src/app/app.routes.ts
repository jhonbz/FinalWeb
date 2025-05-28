import { HomeComponent } from './components/home/home.component';
import { RickymortyComponent } from './components/rickymorty/rickymorty.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
   { path: 'episodios', component: RickymortyComponent},
    { path: '', component: HomeComponent},
];
