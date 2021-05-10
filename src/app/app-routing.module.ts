import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../assets/ngx-admin/@theme/components/not-found/not-found.component';
import { LayoutComponent } from './layout/layout.component';
import { CompaniesPageComponent } from './pages/companies-page/companies-page.component';
import { CompanyDetailPageComponent } from './pages/company-detail-page/company-detail-page.component';
import { DriverDetailPageComponent } from './pages/driver-detail-page/driver-detail-page.component';
import { DriversPageComponent } from './pages/drivers-page/drivers-page.component';
import { VehicleDetailPageComponent } from './pages/vehicle-detail-page/vehicle-detail-page.component';
import { VehiclesPageComponent } from './pages/vehicles-page/vehicles-page.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'drivers', component: DriversPageComponent },
      { path: 'drivers/:id', component: DriverDetailPageComponent },
      { path: 'vehicles', component: VehiclesPageComponent },
      { path: 'vehicles/:id', component: VehicleDetailPageComponent },
      { path: 'companies', component: CompaniesPageComponent },
      { path: 'companies/:id', component: CompanyDetailPageComponent },
      { path: '', redirectTo: 'drivers', pathMatch: 'full' },
      { path: '**', component: NotFoundComponent, }
    ]
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
