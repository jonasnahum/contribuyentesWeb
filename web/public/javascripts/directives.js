(function() {
    var app = angular.module("directives", []);
    app.directive("match",function (){
        return{
            restrict:"A",
            require:"ngModel",
            link: function(scope, element, attr, ctrl){
                function matchValidator(value){
                    return value;
                }
                ctrl.$parsers.push(matchValidator);
            }
        };
    });
                   
})();