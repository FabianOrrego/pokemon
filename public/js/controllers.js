(function(){
	angular.module('pokemon.controllers',[])

    .controller('PokemonController', function($scope, httpService){
         httpService.obtenerpokemons().then(function(data){
             $scope.pokemons = data;            
        }).catch(function(){
            $scope.pokemons = [];
        })          
    })
    
    .controller('DetailsController', function($scope, httpService, $routeParams){
        httpService.callParams('http://pokeapi.co/api/v2/pokemon/' + $routeParams.name + "/").then(function(data){
             $scope.details = data;
             getDescription(data.id);
        }).catch(function(){
            $scope.details = [];
        }) 

       function getDescription(id){ 
            httpService.callParams('http://pokeapi.co/api/v2/ability/' + id + "/").then(function(data){
                $scope.description = data.effect_entries[0].effect;
            }).catch(function(){
                $scope.description = {};
            })          
        }
    })
})();

