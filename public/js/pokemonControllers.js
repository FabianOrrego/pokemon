(function(){
	angular.module('pokemonControllers',[])

    .controller('PokemonController', function($scope, $http){
        'use strict';
        $scope.pokemons = [];
    
        $http({
                method: 'GET',
                url: 'http://pokeapi.co/api/v2/pokemon/'
        }).then(function successCallback(response) {
                $scope.pokemons = response.data.results;
                console.log(response.data.results)

        }, function errorCallback(response) {
                $scope.pokemons = [];
                console.log(response.data)
        })                  
    })   
})();

