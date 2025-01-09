import { Routes } from '@angular/router';
import { FernandoComponent } from './fernando/fernando.component';
import { HeroComponent } from './hero/hero.component';

export const routes: Routes = [
    {
        path: '',
        component: HeroComponent
    },
    {
        path: 'fernando',
        loadComponent: () => import('./fernando/fernando.component').then((c) => c.FernandoComponent),
    },
];
