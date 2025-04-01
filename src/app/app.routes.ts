import { Routes } from '@angular/router';
import { CharactersComponent } from './Pages/characters/characters.component';
import { DetailsComponent } from './Pages/details/details.component';
import { LocationComponent } from './Pages/location/location.component';

export const routes: Routes = [
  { path: '', redirectTo: '/characters', pathMatch: 'full' }, //al abrir la aplicacion lleva a pagina principal characters
  { path: '', component: CharactersComponent }, //pagina no existente lleva a pagina principal characters
  { path: 'characters', component: CharactersComponent },  //pagina characters
  { path: 'details', component: DetailsComponent }, //pagina details
  { path: 'location', component: LocationComponent }, //pagina location

  {
    path: 'characters/:id',
    component: CharactersComponent,
  },
];
