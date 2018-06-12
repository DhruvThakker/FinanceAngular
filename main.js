var app = angular.module('myApp', []);
app.controller('binomialCtrl', function($scope,$http) {
    $scope.bmaster = {stock:4, strike:5, depth:2,rate:0.25,u:2,d:0.5};
    $scope.resetb = function() {
        $scope.buser = angular.copy($scope.bmaster);
        $scope.myValuesb = null
    };
    $scope.resetb();
    $scope.submitBinomial = function() {
        $http({
            //url : "http://ec2-34-196-11-253.compute-1.amazonaws.com:8080/compute/binomial/?d=0.5&depth=2&rate=0.25&stock=4&strike=5&u=2.0",
            url: "http://ec2-34-196-11-253.compute-1.amazonaws.com:8080/compute/binomial/",
            //url: "http://127.0.0.1:8000/compute/binomial/",
            method: "GET",
            //params:$scope.user
            //params: {'stock':4,'strike':5,'depth':2,'rate':0.25,'u':2,'d':0.5}
            params: {'stock':$scope.buser.stock,'strike':$scope.buser.strike,'depth':$scope.buser.depth,'rate':$scope.buser.rate,'u':$scope.buser.u,'d':$scope.buser.d}
          })
          .then(function(response) {
              $scope.myValuesb = response.data.complex_result;
          });
          console.log('Submit Binomial');  
    };
    console.log($scope.buser);
    //$scope.submi();
});
app.controller('leastSquareCtrl', function($scope,$http) {
    $scope.lmaster = {method:"normal", paths:8, length:4, stock:10, strike:12, rate:0.1, volatility:0.3};
    $scope.resetl = function() {
        $scope.luser = angular.copy($scope.lmaster);
        $scope.myValuesl = null
    };
    $scope.resetl();
    $scope.submitLeastSquare = function() {
        $http({
            //url : "127.0.0.1:8000/compute/leastsquare/?method=neural&paths=8&length=4&stock=10&strike=12&rate=0.1&volatility=0.3",
            url: "http://ec2-34-196-11-253.compute-1.amazonaws.com:8080/compute/leastsquare/",
            //url: "http://127.0.0.1:8000/compute/leastsquare/",
            method: "GET",
            //params:$scope.user
            //params: {'stock':4,'strike':5,'depth':2,'rate':0.25,'u':2,'d':0.5}
            params: {'method':$scope.luser.method, 'paths':$scope.luser.paths, 'length':$scope.luser.length, 'stock':$scope.luser.stock,'strike':$scope.luser.strike,'rate':$scope.luser.rate,'volatility':$scope.luser.volatility}
          })
          .then(function(response) {
              $scope.myValuesl = response.data.complex_result;
          });
        console.log('Submit Least');    
    };
    console.log($scope.luser);
    //$scope.submi();
});