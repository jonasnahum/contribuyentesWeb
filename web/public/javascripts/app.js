var app = angular.module("app", ["ngRoute"]);
//app.controller(controllers);
//app.factory(factories);


app.config(["$routeProvider", function ($routeProvider){
    $routeProvider.when("/", { templateUrl: "./../views/index.html" })
    .when("/registro", { templateUrl: "./../views/registro.html" })
    .otherwise({ redirectTo: "/" });
}]);
