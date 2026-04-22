import { Routes } from '@angular/router';
import {HomeComponent} from './componentes/home/home.component';
import {ComunidadComponent} from './componentes/comunidad/comunidad.component';
import {CatalogoComponent} from './componentes/catalogo/catalogo.component';
import {HistoriaComponent} from './componentes/historia/historia.component';
import {SoporteComponent} from './componentes/soporte/soporte.component';
import {ValoresComponent} from './componentes/valores/valores.component';
import {PageNotFoundComponent} from './layout/page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'catalogo',
    component: CatalogoComponent
  },
  {
    path: 'comunidad',
    component: ComunidadComponent
  },
  {
    path: 'historia',
    component: HistoriaComponent
  },
  {
    path: 'soporte',
    component: SoporteComponent
  },
  {
    path: 'valores',
    component: ValoresComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    pathMatch: "full"
  },
];
