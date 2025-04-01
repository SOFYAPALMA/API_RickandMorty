import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { appsettings } from '../Settings/appsettings';
import { results } from '../Models/results';
import { respuesta } from '../Models/respuesta';

//creacion de Service, RickAndMortyService que permite conectarnos con las Apis.


@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {
  //creacion de variables http (httpClient)
  private http = inject(HttpClient); 
  //creacion de variable apiUrl, para obtener la url base de la app.
  private apiUrl:string = appsettings.apiUrl + "respuesta";
  
  constructor() { }
//creacion de peticion tipo get a la web api para listar
  lista(){
    return this.http.get<respuesta[]>(this.apiUrl);
  }
//creacion de peticion tipo get a la web api para obtener por id
  obtener(id:number){
    return this.http.get<respuesta>(`${this.apiUrl}/${id}`);
  }

}
