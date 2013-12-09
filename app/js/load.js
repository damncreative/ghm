// load all of the dependencies asynchronously.
$script([
  'lib/angular/angular.js',
  'lib/angular/angular-route.js',
  'lib/angular/i18n/angular-locale_de-de.js',
  'lib/coffeescript/coffeescript.min.js'
], function() {
  // when all is done, compile coffeescript and execute bootstrap angular application
  for(var i=0, coffee=[
    //Services
    'coffee/services.coffee',

    //Controllers
    'coffee/controllers.coffee',

    //Filters
    'coffee/filters.coffee',

    //Directives
    'coffee/directives.coffee'
  ], len=coffee.length, loaded=0; i < len; i++) {
    CoffeeScript.load(coffee[i], (function(i){return function(){
      loaded++;
      if (loaded == len) {
        // all resource scripts have been converted, compile and execute bootstrap angular application
        CoffeeScript.load('coffee/app.coffee');
      }
    }})(i));
  }
});