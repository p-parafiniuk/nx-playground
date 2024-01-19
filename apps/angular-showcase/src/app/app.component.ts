import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import {
  MainPageComponent,
} from './components/Pages/MainPage/main-page.component';
import { ButtonComponent } from '@nx-playground/ui';

@Component({
  standalone: true,
  // imports: [NxWelcomeComponent, RouterModule],
  imports: [
    NxWelcomeComponent,
    MainPageComponent,
    ButtonComponent,
    RouterModule,
  ],
  selector: 'nx-playground-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-showcase';
}
