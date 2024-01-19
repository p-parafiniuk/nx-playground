import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { counterReducer } from './components/Pages/MainPage/main-page.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideEffects(),
    provideStore({ count: counterReducer }),
    provideClientHydration(),
    provideRouter(appRoutes),
  ],
};
