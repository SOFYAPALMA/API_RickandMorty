import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideAnimationsAsync(),
    //Habilitacion de modulo para solicitudes Http en app.config. importProvidersFrom(HttpClientModule) se utiliza para
    //importar el HttpClientModule y sus proveedores en un contexto de configuración, 
    //asegurando que el servicio HttpClient esté disponible para la inyección de dependencias en la app o componente
    importProvidersFrom(HttpClientModule) 
  ]
};
