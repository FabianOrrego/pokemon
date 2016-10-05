(function(){
    angular.module('pokemon.services',[])

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

            callParams :  function (url){
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
})();