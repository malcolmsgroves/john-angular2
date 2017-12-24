import { MongoObservable } from 'meteor-rxjs';
import { Bathroom } from '../models';

export const Bathrooms = new MongoObservable.Collection<Bathroom>('bathrooms');
