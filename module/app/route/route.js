angular.module('app').config(function($routeProvider){
    
    $routeProvider.when('/',{
        templateUrl:'views/HomePage.html',
        controller:'HomeController'
    });
        
    $routeProvider.when('/home',{
        templateUrl:'views/HomePage.html',
        controller:'HomeController'
    });
    
    $routeProvider.when('/about',{
        templateUrl:'views/AboutPage.html',
        controller:'AboutController'
    });
    
    $routeProvider.when('/contacts',{
        templateUrl:'views/ContactsPage.html',
        controller:'ContactsController'
    });
    
    $routeProvider.when('/events',{
        templateUrl:'views/EventsPage.html',
        controller:'EventsController'
    });
    
    $routeProvider.when('/gallery',{
        templateUrl:'views/GalleryPage.html',
        controller:'GalleryController'
    });
    
    $routeProvider.when('/notifications',{
        templateUrl:'views/NotificationsPage.html',
        controller:'NotificationsController'
    });
    
    $routeProvider.when('/pronites',{
        templateUrl:'views/PronitesPage.html',
        controller:'PronitesController'
    });
    
    $routeProvider.when('/results',{
        templateUrl:'views/ResultsPage.html',
        controller:'ResultsController'
    });
    
    $routeProvider.when('/schedule',{
        templateUrl:'views/SchedulePage.html',
        controller:'ScheduleController'
    });
    
    $routeProvider.when('/sponsors',{
        templateUrl:'views/SponsorsPage.html',
        controller:'SponsorsController'
    });
    
    $routeProvider.otherwise({
        redirectTo:'/'
    });
    
});