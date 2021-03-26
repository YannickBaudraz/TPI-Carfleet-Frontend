import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../assets/ngx-admin/@theme/components/not-found/not-found.component';
import { LayoutComponent } from './layout/layout.component';
import { DriversPageComponent } from './pages/drivers-page/drivers-page.component';
import { VehicleDetailPageComponent } from './pages/vehicle-detail-page/vehicle-detail-page.component';
import { VehiclesPageComponent } from './pages/vehicles-page/vehicles-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'vehicles', component: VehiclesPageComponent },
      { path: 'vehicles/:id', component: VehicleDetailPageComponent },
      { path: 'drivers', component: DriversPageComponent },
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
