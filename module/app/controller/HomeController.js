angular.module('app').controller('HomeController',function($scope){
    
    console.log("I m in HomeController");
    
    $scope.doBroadcast = function(){
        $scope.$broadcast('homeTabsVisibilityToggle', {data : true});
    };

    
});