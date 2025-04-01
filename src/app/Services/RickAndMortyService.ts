import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { appsettings } from '../Settings/appsettings';
import { results } from '../Models/results';
import { respuesta } from '../Models/respuesta';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {
  private http = inject(HttpClient);
  private apiUrl:string = appsettings.apiUrl + "respuesta";
  
  constructor() { }

  lista(){
    return this.http.get<respuesta[]>(this.apiUrl);
  }

  obtener(id:number){
    return this.http.get<respuesta>(`${this.apiUrl}/${id}`);
  }

}
