import { Component, OnInit } from '@angular/core';
import { template } from './bathrooms.html';
import * as Moment from 'moment';
import { Observable } from 'rxjs';
import { Bathroom } from '../../../../imports/models';
import { Bathrooms } from '../../../../imports/collections';

@Component({
  template
})
export class BathroomsPage implements OnInit {
  bathrooms; //: Observable<Bathroom[]>;
  constructor() {
  }

  ngOnInit() {
   this.bathrooms = Bathrooms.find();
   console.log(this.bathrooms);
  }

  removeBathroom(bathroom: Bathroom): void {
    Bathrooms.remove({_id: bathroom._id}).subscribe();
  }

}
