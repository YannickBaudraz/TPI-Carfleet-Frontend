import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../assets/ngx-admin/@theme/components/not-found/not-found.component';
import { LayoutComponent } from './layout/layout.component';
import { CompaniesViewComponent } from './views/companies-view/companies-view.component';
import { CompanyDetailViewComponent } from './views/company-detail-view/company-detail-view.component';
import { DriverDetailViewComponent } from './views/driver-detail-page/driver-detail-view.component';
import { DriversViewComponent } from './views/drivers-page/drivers-view.component';
import { VehicleDetailViewComponent } from './views/vehicle-detail-page/vehicle-detail-view.component';
import { VehiclesViewComponent } from './views/vehicles-page/vehicles-view.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'drivers', component: DriversViewComponent },
      { path: 'drivers/:id', component: DriverDetailViewComponent },
      { path: 'vehicles', component: VehiclesViewComponent },
      { path: 'vehicles/:id', component: VehicleDetailViewComponent },
      { path: 'companies', component: CompaniesViewComponent },
      { path: 'companies/:id', component: CompanyDetailViewComponent },
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
