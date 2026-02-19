import { Routes } from '@angular/router';
import { Home } from './componentes/home/home';
import { Criarmemoria } from './componentes/criarmemoria/criarmemoria';

export const routes: Routes = [
    { path: '', component: Home},
    { path: 'criar-memoria', component: Criarmemoria}
];
