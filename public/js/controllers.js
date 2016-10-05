(function(){
	angular.module('pokemon.controllers',[])

    .service('httpService',  function($http, $q){
        return{
            obtenerpokemons :  function (){
                var p = $q.defer();
                $http.get('http://pokeapi.co/api/v2/pokemon/') 
                .success(function(data){
                    p.resolve(data.results);
                    
                }).error(function(data){
                    p.reject("error");
                })
                return p.promise;    
            },

            llamadoParams :  function (url){
                var p = $q.defer();
                $http.get(url) 
                .success(function(data){
                    p.resolve(data);               
                }).error(function(data){
                    p.reject("error");
                })
                return p.promise;    
            }

            
        }

    })

    .controller('PokemonController', function($scope, httpService){
         httpService.obtenerpokemons().then(function(data){
             $scope.pokemons = data;
        }).catch(function(){
            $scope.pokemons = [];
        })          
    })
    
    .controller('DetailsController', function($scope, httpService, $routeParams){
        httpService.llamadoParams('http://pokeapi.co/api/v2/pokemon/' + $routeParams.name + "/").then(function(data){
             $scope.details = data;
             obtenerGenero(data.id);
        }).catch(function(){
            $scope.details = [];
        }) 

       function obtenerGenero(id){ 
            httpService.llamadoParams('http://pokeapi.co/api/v2/gender/' + id + "/").then(function(data){
                $scope.genero = data.name;
            }).catch(function(){
                $scope.genero = "sin genero";
            })          
        }
    })
})();

