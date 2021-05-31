import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../assets/ngx-admin/@theme/components/not-found/not-found.component';
import { ViewMode } from './core/enums/view-mode.enum';
import { LayoutComponent } from './layout/layout.component';
import { CompaniesViewComponent } from './views/companies/companies-view/companies-view.component';
import { CompanyDetailViewComponent } from './views/companies/company-detail-view/company-detail-view.component';
import { DriverDetailViewComponent } from './views/drivers/driver-detail-view/driver-detail-view.component';
import { DriversViewComponent } from './views/drivers/drivers-view/drivers-view.component';
import { UserDetailComponent } from './views/users/user-detail/user-detail.component';
import { UsersViewComponent } from './views/users/users-view/users-view.component';
import { VehicleDetailViewComponent } from './views/vehicles/vehicle-detail-view/vehicle-detail-view.component';
import { VehiclesViewComponent } from './views/vehicles/vehicles-view/vehicles-view.component';

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
      { path: 'users', component: UsersViewComponent },
      { path: 'users/create', component: UserDetailComponent, data: { mode: ViewMode.Create },  },
      { path: 'users/:id', component: UserDetailComponent, data: { mode: ViewMode.Edit } },
      { path: '', redirectTo: 'drivers', pathMatch: 'full' },
      { path: '**', component: NotFoundComponent }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
