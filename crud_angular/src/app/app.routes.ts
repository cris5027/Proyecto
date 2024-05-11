import { Routes } from '@angular/router';
import { ListaEntrevistadosComponent } from './lista-entrevistados/lista-entrevistados.component';
import { EditarEntrevistadoComponent } from './editar-entrevistado/editar-entrevistado.component';

export const routes: Routes = [
    {path: 'entrevistados', component: ListaEntrevistadosComponent},
    {path: 'entrevistados/editar/:id', component: EditarEntrevistadoComponent},
    {path: 'entrevistados/agregar', component: EditarEntrevistadoComponent},
    {path: '**', redirectTo: '/entrevistados', pathMatch: 'full'}
];
