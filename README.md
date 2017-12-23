# JOHN
A crowd-sourced restroom locator for mobile and web

## Code Structure
The application is written in javascript with a meteor framework and angular templates so that it can run on the web and native ios mobile (via cordova). Meteor tutorial [here](https://www.meteor.com/tutorials/angular/adding-user-accounts)

## TODO
- [ ] Persist bathroom data on MongoDB
  * Store lat, lng, name, and type in model
  * Add filter to find nearest bathrooms using haversine formula
- [ ] Add google maps javascript api
  * Allow user to georeference new bathrooms from their device
  * Display nearby bathrooms on javascript map
  * Instructions [here](http://angular-ui.github.io/angular-google-maps/index.html#!/quickstart)
- [ ] Allow users to rate existing bathrooms
  * Persist user ratings in MongoDB
  * Add relation to bathrooms so that statistics can be queried
- [ ] Implement user authentication
  * Thinking of using okta, but will check out meteor's native security
- [ ] Create angular components
  * Map component for finding nearby bathrooms
  * Bathroom component for reading about bathroom and rating
  * Keep it simple
- [ ] Throw this bad boy on heroku
  * [Instructions](https://medium.com/@leonardykris/how-to-run-a-meteor-js-application-on-heroku-in-10-steps-7aceb12de234)
  
