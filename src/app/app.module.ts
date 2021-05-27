import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbButtonModule,
  NbCardModule,
  NbDatepickerModule,
  NbDialogModule,
  NbInputModule,
  NbLayoutModule,
  NbMenuModule,
  NbSelectModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule
} from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CoreModule } from '../assets/ngx-admin/@core/core.module';
import { NotFoundComponent } from '../assets/ngx-admin/@theme/components/not-found/not-found.component';
import { ThemeModule } from '../assets/ngx-admin/@theme/theme.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { GenderPipe } from './pipes/gender/gender.pipe';
import { CompaniesViewComponent } from './views/companies-view/companies-view.component';
import { CompanyDetailViewComponent } from './views/company-detail-view/company-detail-view.component';
import { DriverDetailViewComponent } from './views/driver-detail-page/driver-detail-view.component';
import { DriversViewComponent } from './views/drivers-page/drivers-view.component';
import { VehicleDetailViewComponent } from './views/vehicle-detail-page/vehicle-detail-view.component';
import { VehiclesViewComponent } from './views/vehicles-page/vehicles-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    VehiclesViewComponent,
    VehicleDetailViewComponent,
    NotFoundComponent,
    DriversViewComponent,
    DriverDetailViewComponent,
    GenderPipe,
    CompaniesViewComponent,
    CompanyDetailViewComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    // Ngx-Admin
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbCardModule,
    NbButtonModule,
    Ng2SmartTableModule,
    NbLayoutModule,
    NbInputModule,
    NbSelectModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
