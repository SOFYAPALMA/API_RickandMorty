import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { appsettings } from '../Settings/appsettings';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {
  private http = inject(HttpClient);
  private apiUrl:string = appsettings.apiUrl + "info";

  constructor() { }
}
