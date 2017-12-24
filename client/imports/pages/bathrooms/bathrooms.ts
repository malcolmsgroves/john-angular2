import { Component } from '@angular/core';
import template from './bathrooms.html';
import * as Moment from 'moment';
import { Observable } from 'rxjs';
import { Bathroom } from '../../../../imports/models';

@Component({
  template
})
export class BathroomsPage {
  bathrooms: Observable<Bathroom[]>;
  constructor() {
    this.bathrooms = this.findBathrooms();
  }
  private findBathrooms(): Observable<any[]> {
    return Observable.of([
      {
        _id: '0',
        username: 'Ethan Gonzalez',
        lat: '47.04',
        lng: '-70.35',
        text: 'A bathroom in the forest',
        name: 'The Woods',
        createdAt: Moment().subtract(1, 'hours').toDate()

      },
      {
        _id: '1',
        username: 'Ben Smith',
        lat: '44.67',
        lng: '-72.35',
        description: 'Next to the construction site',
        name: 'Portapotty',
        createdAt: Moment().subtract(10, 'hours').toDate()

      },
      {
        _id: '2',
        username: 'Jim Montgomvery',
        lat: '45.22',
        lng: '-71.39',
        description: 'An old classic',
        name: 'John',
        createdAt: Moment().subtract(4, 'days').toDate()

      },
    ]);
  }

  removeBathroom(bathroom: Bathroom): void {
    this.bathrooms = this.bathrooms.map<Bathroom[]>(bathroomsArray => {
      const bathroomIndex = bathroomsArray.indexOf(bathroom);
      bathroomsArray.splice(bathroomIndex, 1);

      return bathroomsArray;
    });
  }
  
}
