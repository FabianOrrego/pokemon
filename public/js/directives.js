(function(){
    angular.module('pokemon.directives', [])

        .directive('search', function () {
            return {
                restrict: 'E',
                templateUrl: 'partials/search.html'
            };
        })

        .directive('navbar', function () {
            return {
                restrict: 'E',
                templateUrl: 'partials/navbar.html'
            };
        })

        .directive('footerPage', function () {
            return {
                restrict: 'E',
                templateUrl: 'partials/footer-page.html'
            };
        })
})();