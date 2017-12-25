import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import template from './bathrooms.html';
import * as Moment from 'moment';
import { Observable } from 'rxjs';
import { Bathroom } from '../../../../imports/models';
import { Bathrooms } from '../../../../imports/collections';
import { BathroomPage } from '../bathroom/bathroom';
import { BathroomsOptionsComponent } from './bathrooms-options';

@Component({
  template
})
export class BathroomsPage implements OnInit {
  bathrooms; //: Observable<Bathroom[]>;
  constructor(
    private navCtrl: NavController,
    private popoverCtrl: PopoverController) {
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

  showOptions(): void {
    const popover = this.popoverCtrl.create(BathroomsOptionsComponent, {}, {
      cssClass: 'options-popover bathrooms-options-popover'
    });

    popover.present();
  }

}
