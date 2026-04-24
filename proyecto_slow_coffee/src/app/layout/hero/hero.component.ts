import {Component, Input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [
    RouterLink,
    NgClass
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  @Input() titulo: string = '';
  @Input() subtitulo: string = '';
  @Input() textoBoton: string = '';
  @Input() mostrarBoton: boolean = true;
  @Input() botonUrl: string = '';
  @Input() imgUrl: string = '';
  @Input() posicion: 'start' | 'center' | 'end' = 'center';
  @Input() degradado: boolean = false;
}
