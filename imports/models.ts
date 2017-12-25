import { Meteor } from 'meteor/meteor';

export interface Bathroom {
  _id?: string;
  username?: string;
  lat?: string;
  lng?: string;
  name?: string;
  description?: string;
  createdAt?: Date;
}

export interface Profile {
  name?: string;
}

export interface User extends Meteor.User {
  profile?: Profile;
}
