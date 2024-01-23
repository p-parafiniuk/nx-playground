import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

// app lvl
import { MainPageComponent } from './components/Pages/MainPage/main-page.component';
import { InternalTestComponent } from './components/Pages/InternalTest/internal-test.component';

// ui package lvl
import { ButtonComponent } from '@nx-playground/ui';
import { MainNavigationComponent } from './components/organisms/main-navigation/main-navigation.component';

@Component({
  standalone: true,
  imports: [
    MainNavigationComponent,
    MainPageComponent,
    InternalTestComponent,
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
