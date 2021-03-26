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
import { DriversPageComponent } from './pages/drivers-page/drivers-page.component';
import { VehicleDetailPageComponent } from './pages/vehicle-detail-page/vehicle-detail-page.component';
import { VehiclesPageComponent } from './pages/vehicles-page/vehicles-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    VehiclesPageComponent,
    VehicleDetailPageComponent,
    NotFoundComponent,
    DriversPageComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
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
    NbSelectModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
