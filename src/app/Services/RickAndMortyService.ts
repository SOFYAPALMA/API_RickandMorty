import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { appsettings } from '../Settings/appsettings';
import { results } from '../Models/results';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {
  private http = inject(HttpClient);
  private apiUrl:string = appsettings.apiUrl + "results";
  
  constructor() { }

  lista(){
    return this.http.get<results[]>(this.apiUrl);
  }

  obtener(){
    return this.http.get<results>('${this.apiUrl}/${id}');
  }

}
