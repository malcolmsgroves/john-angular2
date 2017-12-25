import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';
import * as Moment from 'moment';
import { Bathrooms } from '../imports/collections';

Meteor.startup(() => {
  // code to run on server at startup

  if (Meteor.settings) {
    Object.assign(Accounts._options, Meteor.settings['accounts-phone']);
    SMS.twilio = Meteor.settings['twilio'];
  }

  if (Bathrooms.find({}).cursor.count() === 0) {

    Bathrooms.collection.insert({
      username: 'Ethan Gonzalez',
      lat: '47.04',
      lng: '-70.35',
      description: 'A bathroom in the forest',
      name: 'The Woods',
      createdAt: Moment().subtract(1, 'hours').toDate()
    });

    Bathrooms.collection.insert({
      username: 'Ben Smith',
      lat: '44.67',
      lng: '-72.35',
      description: 'Next to the construction site',
      name: 'Portapotty',
      createdAt: Moment().subtract(10, 'hours').toDate()
    });


    Bathrooms.collection.insert({
      username: 'Jim Montgomvery',
      lat: '45.22',
      lng: '-71.39',
      description: 'An old classic',
      name: 'John',
      createdAt: Moment().subtract(4, 'days').toDate()
    });
  }
});
