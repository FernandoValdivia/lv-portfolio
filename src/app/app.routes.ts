import { Routes } from '@angular/router';
import { FernandoComponent } from './fernando/fernando.component';
import { HeroComponent } from './hero/hero.component';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./hero/hero.component').then((c) => c.HeroComponent),
    },
    {
        path: 'fernando',
        loadComponent: () => import('./fernando/fernando.component').then((c) => c.FernandoComponent),
    },
    {
        path: 'servicios',
        loadComponent: () => import('./servicios/servicios.component').then((c) => c.ServiciosComponent),
    },
    {
        path: 'portafolio',
        loadComponent: () => import('./portafolio/portafolio.component').then((c) => c.PortafolioComponent),
    },
    {
        path: 'contacto',
        loadComponent: () => import('./contacto/contacto.component').then((c) => c.ContactoComponent),
    }
];
