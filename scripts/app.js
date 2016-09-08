angular.module('app', ['bookYourTicket'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/book', {
            controller: 'selectSeatController',
            controllerAs: 'vm',
            templateUrl: 'templates/bookSeat.html'
        })
        .otherwise({
            redirectTo: '/book'
        });
}]);
