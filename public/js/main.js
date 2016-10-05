(function(){
    
 	var app = angular.module('pokemon', ['ngRoute', 'pokemon.controllers', 'pokemon.directives', 'pokemon.filters']); 

    app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/pokemon.html',
        controller: 'PokemonController'
      })
      .when('/details/:name',{
          templateUrl: 'views/details.html',
          controller: 'DetailsController'
      })
      .otherwise({
        redirectTo: '/'
      });

    }]);
 })();