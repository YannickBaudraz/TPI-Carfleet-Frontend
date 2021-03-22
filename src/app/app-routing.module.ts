import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../assets/ngx-admin/@theme/components/not-found/not-found.component';
import { GabaritComponent } from './pages/gabarit/gabarit.component';
import { VehicleDetailPageComponent } from './pages/vehicle-detail-page/vehicle-detail-page.component';
import { VehiclesPageComponent } from './pages/vehicles-page/vehicles-page.component';

const routes: Routes = [
  {
    path: '',
    component: GabaritComponent,
    children: [
      { path: 'vehicles', component: VehiclesPageComponent },
      { path: 'vehicles/:id', component: VehicleDetailPageComponent },
      { path: '', redirectTo: 'vehicles', pathMatch: 'full' },
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
