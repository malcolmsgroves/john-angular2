import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import template from './bathrooms.html';
import * as Moment from 'moment';
import { Observable } from 'rxjs';
import { Bathroom } from '../../../../imports/models';
import { Bathrooms } from '../../../../imports/collections';
import { BathroomPage } from '../bathroom/bathroom';

@Component({
  template
})
export class BathroomsPage implements OnInit {
  bathrooms; //: Observable<Bathroom[]>;
  constructor(private navCtrl: NavController) {
  }

  ngOnInit() {
   this.bathrooms = Bathrooms.find();
   console.log(this.bathrooms);
  }

  showBathroom(bathroom): void {
    this.navCtrl.push(BathroomPage, {bathroom});
  }

  removeBathroom(bathroom: Bathroom): void {
    Bathrooms.remove({_id: bathroom._id}).subscribe();
  }

}
