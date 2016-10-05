(function(){
	angular.module('pokemon.controllers',[])

    .controller('PokemonController', function($scope, $http){
        'use strict';
        $scope.pokemons = [];

        $http.get('http://pokeapi.co/api/v2/pokemon/') 
                .success(function(data){
                    $scope.pokemons = data.results;
                    localStorage.pokemons = JSON.stringify($scope.pokemons);
                }).error(function(data){
                    $scope.pokemons = [];
                });      
        $scope.buscar = function(){                  
                var rex = new RegExp($scope.search)
               //alert(rex);
                var arrayLocal = JSON.parse(localStorage.pokemons); 
                $scope.pokemons = arrayLocal.filter( pokemon => {
                if(rex.test(pokemon.name)){
                    return pokemon;
                }
            })                  
        }; 
    })
    
    .controller('DetailsController', function($scope, $http, $routeParams){
        $scope.details = [];

        $http.get('http://pokeapi.co/api/v2/pokemon/' + $routeParams.name + "/") 
            .success(function(data){                    
                $scope.details = data;
                console.log(data);
             }).error(function(data){
                 $scope.details = [];
             });
    })   
})();

