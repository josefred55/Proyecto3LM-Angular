import {Component, Input} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [
    RouterLink
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  @Input() titulo: string = '';
  @Input() subtitulo: string = '';
  @Input() textoBoton: string = '';
  @Input() botonUrl: string = '';
  @Input() imgUrl: string = '';
}
