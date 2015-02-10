var App = Ember.Application.create();

/* Order and include as you please. */
//require('scripts/controllers/*');
//require('scripts/store');
//require('scripts/models/*');
//require('scripts/routes/*');
//require('scripts/components/*');
//require('scripts/views/*');
//require('router');

App.Router.map(function () {
  this.resource('home', {path: '/'});
  this.route('about');
  this.route('artists');
  this.route('contact');
});
