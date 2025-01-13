import { Routes } from '@angular/router';

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
        path: 'experiencia',
        loadComponent: () => import('./experiencia/experiencia.component').then((c) => c.ExperienciaComponent),
    },
    {
        path: 'portafolio',
        loadComponent: () => import('./portafolio/portafolio.component').then((c) => c.PortafolioComponent),
    },
    {
        path: 'contacto',
        loadComponent: () => import('./contacto/contacto.component').then((c) => c.ContactoComponent),
    },
];