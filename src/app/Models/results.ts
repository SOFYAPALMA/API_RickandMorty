import { origin } from './origin';
import { location } from './location';

export interface results{
    id: number;
    name:  string;
    status: string;    
    species: string;
    type: string;    
    gender: string;
    origin: origin;
    location: location
}
// Interfaz para recibir y consultar pagina

  