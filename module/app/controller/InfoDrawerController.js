angular.module('app').controller('InfoDrawerController',function($scope, $mdDialog){
   
    console.log("I m in InfoDrawerController");
    
    
    $scope.clickedInfoItem = function($event,data){
        console.log(data.question);
        console.log(data.answer);
        $scope.$parent.toggleInfoDrawer();
        $scope.showAlert($event,data);
    };
    
    $scope.showAlert = function($event,data) {
    $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title(data.question)
        .textContent(data.answer)
        .ariaLabel('Help')
        .ok('Got it!')
        .targetEvent($event)
    );
    };
    
    $scope.eventsQuestions = [
        {
            question: 'Event Question 1',
            answer: "Here will be a long answer for Question 1"
        },
        {
            question: 'Event Question 2',
            answer: "Here will be a long answer for Question 2"
        },
        {
            question: 'Event Question 3',
            answer: "Here will be a long answer for Question 3"
        },
        {
            question: 'Event Question 4',
            answer: "Here will be a long answer for Question 4"
        },
        {
            question: 'Event Question 5',
            answer: "Here will be a long answer for Question 5"
        },
        {
            question: 'Event Question 6',
            answer: "Here will be a long answer for Question 6"
        }
    ];
    
    $scope.pronitesQuestions = [
        {
            question: 'Pronites Question 1',
            answer: "Here will be a long answer for Question 1"
        },
        {
            question: 'Pronites Question 2',
            answer: "Here will be a long answer for Question 2"
        },
        {
            question: 'Pronites Question 3',
            answer: "Here will be a long answer for Question 3"
        },
        {
            question: 'Pronites Question 4',
            answer: "Here will be a long answer for Question 4"
        },
        {
            question: 'Pronites Question 5',
            answer: "Here will be a long answer for Question 5"
        },
        {
            question: 'Pronites Question 6',
            answer: "Here will be a long answer for Question 6"
        }
    ];
    
    $scope.scheduleQuestions = [
        {
            question: 'Schedule Question 1',
            answer: "Here will be a long answer for Question 1"
        },
        {
            question: 'Schedule Question 2',
            answer: "Here will be a long answer for Question 2"
        },
        {
            question: 'Schedule Question 3',
            answer: "Here will be a long answer for Question 3"
        },
        {
            question: 'Schedule Question 4',
            answer: "Here will be a long answer for Question 4"
        },
        {
            question: 'Schedule Question 5',
            answer: "Here will be a long answer for Question 5"
        },
        {
            question: 'Schedule Question 6',
            answer: "Here will be a long answer for Question 6"
        }
    ];
    
    $scope.sponsorsQuestions = [
        {
            question: 'Sponsors Question 1',
            answer: "Here will be a long answer for Question 1"
        },
        {
            question: 'Sponsors Question 2',
            answer: "Here will be a long answer for Question 2"
        },
        {
            question: 'Sponsors Question 3',
            answer: "Here will be a long answer for Question 3"
        },
        {
            question: 'Sponsors Question 4',
            answer: "Here will be a long answer for Question 4"
        },
        {
            question: 'Sponsors Question 5',
            answer: "Here will be a long answer for Question 5"
        },
        {
            question: 'Sponsors Question 6',
            answer: "Here will be a long answer for Question 6"
        }
    ];
    
    $scope.contactsQuestions = [
        {
            question: 'Contacts Question 1',
            answer: "Here will be a long answer for Question 1"
        },
        {
            question: 'Contacts Question 2',
            answer: "Here will be a long answer for Question 2"
        },
        {
            question: 'Contacts Question 3',
            answer: "Here will be a long answer for Question 3"
        },
        {
            question: 'Contacts Question 4',
            answer: "Here will be a long answer for Question 4"
        },
        {
            question: 'Contacts Question 5',
            answer: "Here will be a long answer for Question 5"
        },
        {
            question: 'Contacts Question 6',
            answer: "Here will be a long answer for Question 6"
        }
    ];
    
    $scope.aboutQuestions = [
        {
            question: 'About Question 1',
            answer: "Here will be a long answer for Question 1"
        },
        {
            question: 'About Question 2',
            answer: "Here will be a long answer for Question 2"
        },
        {
            question: 'About Question 3',
            answer: "Here will be a long answer for Question 3"
        },
        {
            question: 'About Question 4',
            answer: "Here will be a long answer for Question 4"
        },
        {
            question: 'About Question 5',
            answer: "Here will be a long answer for Question 5"
        },
        {
            question: 'About Question 6',
            answer: "Here will be a long answer for Question 6"
        }
    ];
    
    $scope.notificationsQuestions = [
        {
            question: 'Notifications Question 1',
            answer: "Here will be a long answer for Question 1"
        },
        {
            question: 'Notifications Question 2',
            answer: "Here will be a long answer for Question 2"
        },
        {
            question: 'Notifications Question 3',
            answer: "Here will be a long answer for Question 3"
        },
        {
            question: 'Notifications Question 4',
            answer: "Here will be a long answer for Question 4"
        },
        {
            question: 'Notifications Question 5',
            answer: "Here will be a long answer for Question 5"
        },
        {
            question: 'Notifications Question 6',
            answer: "Here will be a long answer for Question 6"
        }
    ];
    
    $scope.resultsQuestions = [
        {
            question: 'Results Question 1',
            answer: "Here will be a long answer for Question 1"
        },
        {
            question: 'Results Question 2',
            answer: "Here will be a long answer for Question 2"
        },
        {
            question: 'Results Question 3',
            answer: "Here will be a long answer for Question 3"
        },
        {
            question: 'Results Question 4',
            answer: "Here will be a long answer for Question 4"
        },
        {
            question: 'Results Question 5',
            answer: "Here will be a long answer for Question 5"
        },
        {
            question: 'Results Question 6',
            answer: "Here will be a long answer for Question 6"
        }
    ];
    
    $scope.galleryQuestions = [
        {
            question: 'Gallery Question 1',
            answer: "Here will be a long answer for Question 1"
        },
        {
            question: 'Gallery Question 2',
            answer: "Here will be a long answer for Question 2"
        },
        {
            question: 'Gallery Question 3',
            answer: "Here will be a long answer for Question 3"
        },
        {
            question: 'Gallery Question 4',
            answer: "Here will be a long answer for Question 4"
        },
        {
            question: 'Gallery Question 5',
            answer: "Here will be a long answer for Question 5"
        },
        {
            question: 'Gallery Question 6',
            answer: "Here will be a long answer for Question 6"
        }
    ];
      
      
    
});