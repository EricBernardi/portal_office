import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FiltersComponent } from './components/filters/filters.component';
import { WarehouseComponent } from './pages/warehouse/warehouse.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RequestsComponent } from './pages/requests/requests.component';
import { RouterModule } from '@angular/router';
import { ListAllComponent } from './pages/list-all/list-all.component';
import { CurrencyMaskModule } from 'ng2-currency-mask';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FiltersComponent,
    WarehouseComponent,
    NavbarComponent,
    RequestsComponent,
    ListAllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CurrencyMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
