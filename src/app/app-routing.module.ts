import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestsComponent } from './pages/requests/requests.component';
import { HomeComponent } from './pages/home/home.component';
import { WarehouseComponent } from './pages/warehouse/warehouse.component';
import { ListAllComponent } from './pages/list-all/list-all.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'solicitar', component: RequestsComponent },
  { path: 'almoxarifado', component: WarehouseComponent },
  { path: 'listar', component: ListAllComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
