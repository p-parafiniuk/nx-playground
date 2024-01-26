import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'nx-playground-page404',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './page404.component.html',
  styleUrl: './page404.component.scss',
})
export class Page404Component {
  constructor(public activatedRoute: ActivatedRoute) {
    console.log('Page404Component', activatedRoute);
  }
}
