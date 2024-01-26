import { Route } from '@angular/router';
import { InternalTestComponent } from './components/Pages/InternalTest/internal-test.component';
import { MainPageComponent } from './components/Pages/MainPage/main-page.component';
import { Page404Component } from './components/Pages/page404/page404.component';

export const appRoutes: Route[] = [
  { path: '', component: MainPageComponent, title: 'Main page' },
  // { path: 'login', component: MainPageComponent, title: 'Login page' },
  {
    path: 'internal-test',
    component: InternalTestComponent,
    title: 'Internal test page',
  },
  { path: '**', pathMatch: 'full', component: Page404Component, title: '404' },
];
