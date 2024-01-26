import { ApplicationConfig } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom, isDevMode } from '@angular/core';

import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { counterReducer } from './components/Pages/MainPage/main-page.component';
import { provideServiceWorker } from '@angular/service-worker';

export const storeWithReducers = { count: counterReducer };

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(HttpClientModule),
    provideEffects(),
    provideStore(storeWithReducers),
    provideClientHydration(),
    provideRouter(appRoutes),
    provideServiceWorker('ngsw-worker.js', {
        enabled: !isDevMode(),
        registrationStrategy: 'registerWhenStable:30000'
    })
],
};
