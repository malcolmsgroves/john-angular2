import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MomentModule } from 'angular2-moment';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { PhoneService } from '../services/phone';
import { MyApp } from './app.component';

import { BathroomsPage } from '../pages/bathrooms/bathrooms';
import { BathroomPage } from '../pages/bathroom/bathroom';
import { LoginPage } from '../pages/login/login';
import { VerificationPage } from '../pages/verification/verification';
import { ProfilePage } from '../pages/profile/profile';
import { BathroomsOptionsComponent } from '../pages/bathrooms/bathrooms-options';

@NgModule({
  declarations: [
    MyApp,
    BathroomsPage,
    BathroomPage,
    LoginPage,
    VerificationPage,
    ProfilePage,
    BathroomsOptionsComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    MomentModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAWoBdZHCNh5R-hB5S5ZZ2oeoYyfdDgniA'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BathroomsPage,
    BathroomPage,
    LoginPage,
    VerificationPage,
    ProfilePage,
    BathroomsOptionsComponent
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    PhoneService
  ]
})
export class AppModule {}
