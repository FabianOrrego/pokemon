(function () {

  angular.module('pokemon.filters', [])
  
    .filter('metros', function () {
      return function (input) {
          if (!input) return "";

          input = input * 0.01;
          return input;
      };
    })
})();