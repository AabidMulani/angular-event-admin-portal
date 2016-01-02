angular.module('app').controller('BaseController',function($scope,$location,$mdSidenav){
    
    console.log("I m in BaseController");
    $scope.eventName = "Aabid Mulani";
    $scope.showTabBar = true;

    
    $scope.onTabSelected = function(selection){
        if(selection == 'home'){
            console.log("You clicked HOME");
            $scope.showTabBar = true;
                $location.path('/home');
        }else {
            $scope.showTabBar = true;
            if(selection == 'events'){
                console.log("TAB SELECTED = EVENTS");
                $location.path('/events');
            }else if(selection == 'pronites'){
                console.log("TAB SELECTED = PRONITES");
                $location.path('/pronites');
            }else if(selection == 'schedule'){
                console.log("TAB SELECTED = SCHEDULE");
                $location.path('/schedule');
            }else if(selection == 'sponsors'){
                console.log("TAB SELECTED = SPONSORS");
                $location.path('/sponsors');
            }else if(selection == 'contacts'){
                console.log("TAB SELECTED = CONTACTS");
                $location.path('/contacts');
            }else if(selection == 'about'){
                console.log("TAB SELECTED = ABOUT");
                $location.path('/about');
            }else if(selection == 'notifications'){
                console.log("TAB SELECTED = NOTIFICATIONS");
                $location.path('/notifications');
            }else if(selection == 'results'){
                console.log("TAB SELECTED = RESULTS");
                $location.path('/results');
            }else if(selection == 'gallery'){
                console.log("TAB SELECTED = GALLERY");
                $location.path('/gallery');
            }
        }
    };
    
    
    $scope.toggleInfoDrawer = function() {
        $mdSidenav('info_drawer')
          .toggle()
          .then(function () {
            console.log("toggled Drawer");
          });
      };

});