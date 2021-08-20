import { NgxPaginationModule } from 'ngx-pagination';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BuscaEmpresaComponent } from './buscaEmpresa/buscaEmpresa.component';
import { EmpresasComponent } from './Empresas/Empresas.component';

const routes: Routes = [
  { path: '', redirectTo: '/home-page', pathMatch: 'full' },
  {path: 'home-page', component: HomePageComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'ResultadoBusca', component: BuscaEmpresaComponent},
  {path: 'empresa', component: EmpresasComponent}
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    NgxPaginationModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
