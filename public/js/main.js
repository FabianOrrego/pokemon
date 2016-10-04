(function(){
    
 	var app = angular.module('pokemon', ['ngRoute', 'pokemonControllers']); 

    app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'index.html',
        controller: 'PokemonController'
      })
      .otherwise({
        redirectTo: '/'
      });

    }]);

    app.directive('search', function () {
      return {
        restrict: 'E',
        templateUrl: 'partials/search.html'
      };
    })

 })();