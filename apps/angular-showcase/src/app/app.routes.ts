import { Route } from '@angular/router';
import { InternalTestComponent } from './components/Pages/InternalTest/internal-test.component';
import { MainPageComponent } from './components/Pages/MainPage/main-page.component';

export const appRoutes: Route[] = [
  { path: '', component: MainPageComponent },
  { path: 'internal-test', component: InternalTestComponent },
];
