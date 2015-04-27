var myApp = angular.module('myApp',[]);
myApp.controller('AppCtrl',['$scope','$http',function($scope,$http){
    console.log("hello world from controller");
$scope.contactlist = response; 



});
    $http.get('/emplist').success(function(response){
        console.log("got the data which is requested  :)  ");
        $scope.emplist = response; 
    });
    
    $scope.add = function(){
        console.log($scope.emp);
        $http.post('/emplist',$scope.emp).success(function(response){
            //console.log("Inside Add Contact Function");
            console.log(response);
        });
    };
    
    
      $scope.remove = function(id){
        console.log("Inside Remove Function");
        console.log("Requested ID is delievered");
        console.log(id);
      $http.delete('/emplist/' + id)
     };
    
    
     $scope.edit = function(id){
         console.log(id);
         $http.get('/emplist/' + id).success(function(response){
             console.log("Inside Edit function");
            $scope.emp = response; 
         });
     };
    
     $scope.update = function(){
        console.log($scope.emp._id);
         $http.put('/emplist/' + $scope.emp._id,$scope.emp).success(function(response){
             console.log("Inside Update Function");
             console.log(response);
         });
    };  
}]);