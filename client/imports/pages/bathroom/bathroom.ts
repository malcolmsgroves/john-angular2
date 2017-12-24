import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Bathroom } from '../../../../imports/models';
import template from './bathroom.html';
import { Bathrooms } from '../../../../imports/collections';


@Component({
  template
})
export class BathroomPage implements OnInit {
  selectedBathroom: Bathroom;
  name: string;

  constructor(navParams: NavParams) {
    this.selectedBathroom = <Bathroom>navParams.get('bathroom');

    console.log('Selected bathroom is: ', this.selectedBathroom);
    this.name = this.selectedBathroom.name;
  }

  ngOnInit() {

  }
}
