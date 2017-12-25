import { Component } from '@angular/core';
import { Meteor } from 'meteor/meteor';

import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { BathroomsPage } from '../pages/bathrooms/bathrooms';
import { LoginPage } from '../pages/login/login';
import template from "./app.html";

@Component({
  selector: 'my-app',
  template
})
export class MyApp {
  rootPage: any;

  constructor(platform: Platform) {
    this.rootPage = Meteor.user() ? BathroomsPage : LoginPage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      if (platform.is('cordova')) {
        StatusBar.styleDefault();
        Splashscreen.hide();
      }
    });
  }
}
