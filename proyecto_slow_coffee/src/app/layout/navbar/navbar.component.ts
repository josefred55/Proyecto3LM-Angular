import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  links = [
    {
      nombre: 'Home',
      url: '/home'
    },
    {
      nombre: 'Catálogo',
      url: '/catalogo'
    },
    {
      nombre: 'Historia',
      url: '/historia'
    },
    {
      nombre: 'Comunidad',
      url: '/comunidad'
    },
    {
      nombre: 'Valores',
      url: '/valores'
    },
    {
      nombre: 'Soporte',
      url: '/soporte'
    }

  ]
}
