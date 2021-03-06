// create a new module called 'myAppModule' and save
// a reference to it in a variable called myAppModule
var SuppliersFormAppModule = angular.module('SuppliersFormAppModule', ['ngRoute']);

// use the myAppModule variable to
// configure the module with a controller+queryModule.controller('MyFilterDemoCtrl', function ($scope,$http) {
 
SuppliersFormAppModule.config(function($routeProvider){
  
    $routeProvider
.when('/',{
  templateUrl:'page/home.html',
})
.when('/home',{
  templateUrl:'page/home.html',
})
.when('/about',{
  templateUrl:'page/about.html',
  controller:'aboutController'
})
.when('/form',{
  templateUrl:'page/form.html',
  controller:'inputController'
})
.when('/content',{
  templateUrl:'page/content.html',
  controller:'contentController'
});
});

SuppliersFormAppModule.factory('providerService',function($http){
  var dataSvc={};
  dataSvc.getData=function(theData){
    var promise=$http({method: 'POST',url: 'json/zjh.json',data: theData});
    return promise;
  }
  return dataSvc;
});

SuppliersFormAppModule.controller("inputController",function($scope,providerService){
          var someData = {
            shoukuanyue1:'wujin',
            shoukuanyue2:'5756336',
            shoukuanyue3:'2015',
            shoukuanyue4:'5456',
            shoukuanyue5:'54567',
            shoukuanyue6:'123',
            shoukuanyue:'159',
            shoukuanyue8:'555',
            shoukuanyue9:'2222'
              };
          $scope.data=someData;
          $scope.isHidden=true;

          // $scope.provider={};
          $scope.register=function(){
              var promise=providerService.getData($scope.provider);
              promise.success(function(data){
                  $scope.backMess=data.success;
                  $scope.isHidden = !$scope.isHidden;
                  if (!$scope.isHidden) {
                    alert($scope.backMess[0].message+"\n"+"\n"+"The receiverName is "+$scope.data.receiverName);
                  }
                });
                promise.error(function(data,status,headers,config,statusText){
                    $scope.backMess="There appears to have been a problem .";
                    alert($scope.backMess);
                });
            }
});
SuppliersFormAppModule.controller('aboutController',function($scope){
  var aboutData={
    StudentId:'1314080901144'
  };
  $scope.aboutData=aboutData;
});
SuppliersFormAppModule.controller('contentController',function($scope){
  var someData = {
                shoukuanyue1:'wujin',
                shoukuanyue2:'5756336',
                shoukuanyue3:'2015',
                shoukuanyue4:'5456',
                shoukuanyue5:'54567',
                shoukuanyue6:'123',
                shoukuanyue:'159',
                shoukuanyue8:'555',
                shoukuanyue9:'2222'
              };
              $scope.data=someData;
});


SuppliersFormAppModule.filter('stripDashes', function() {
     return function(txt) {
         // filter code would go here
 }; });

SuppliersFormAppModule.directive("myProvider", function () {
    return {
        restrict: "AE",
        replace: true,
        templateUrl: 'directives/provider.html'

    }
}).directive("myHide", function () {
    return {
        restrict: "AE",
        replace: true,
        templateUrl: 'directives/hide.html'
    }
}).directive("myNav", function () {
    return {
        restrict: "AE",
        replace: true,
        templateUrl: 'directives/nav.html'
    }
}).directive("myShow", function () {
    return {
        restrict: "AE",
        replace: true,
        template: '<div id="main"><div ng-view></div></div>'
    }
});


