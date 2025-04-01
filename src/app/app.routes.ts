import { Routes } from '@angular/router';
import { CharactersComponent } from './Pages/characters/characters.component';
import { DetailsComponent } from './Pages/details/details.component';
import { LocationComponent } from './Pages/location/location.component';

export const routes: Routes = [
  { path: '', redirectTo: '/characters', pathMatch: 'full' }, //al abrir la aplicacion lleva a pagina principal characters
  { path: '', component: CharactersComponent }, //direccion no existe lleva a pagina principal characters
  { path: 'characters', component: CharactersComponent },  //si la url dice characters, muestre el componente CharactersComponent
  { path: 'details', component: DetailsComponent }, //si la url dice details, muestre el componente DetailsComponent
  { path: 'location', component: LocationComponent }, //si la url dice location, muestre el componente LocationComponent

  {
    path: 'characters/:id',
    component: CharactersComponent, //se pasa el parametro id en characters para que muestre la info de characters
  },
];
