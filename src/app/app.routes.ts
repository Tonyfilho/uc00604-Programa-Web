import { Routes } from '@angular/router';
import { Uc00604 } from './pages/uc00604/uc00604';

export const routes: Routes = [
    /**Nossa 1ª rota */
    {path: '', redirectTo: "welcome", pathMatch:'full'},
    {path:"welcome", loadComponent: () => import('./pages/welcome/welcome').then((vasco) => vasco.Welcome )},
    {path: 'pages/autenticacao', loadComponent: () => import('./pages/authentication/authentication').then(ze => ze.Authentication)},
    
    /**Rota Padrão sem lazyload */
    {path: 'pages/uc00604', component: Uc00604},
    /**Nossa Ultima rota */
    {path:"**", loadComponent: () => import('./pages/welcome/welcome').then(c => c.Welcome)},
];
