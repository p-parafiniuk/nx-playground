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

/**
 * Provides access to information about a route 
 * associated with a component
 * that is loaded in an outlet.
 * 
 * Use to traverse the `RouterState` tree and 
 *   extract information from nodes.
 */

//Example
/**
export const appRoutes: Route[] = [
  {
    title: '',
    path: 'test/:testId',
    pathMatch: 'full | prefix', // default is 'prefix'
    loadComponent: () => import('./test.component'),
    children: [
      (recurrently)
    ],
    data: {
      permission: 'admin',
    },
  },
];
 */
