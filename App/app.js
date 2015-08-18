var app = angular.module('myApp',['ui.router']);

app.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home',{
            url:"/home",
            views:{
                'nav':{
                    templateUrl:'App/Partials/navbar.html',
                    controller:'navBar'

                },
                'content':{
                    templateUrl:'App/Partials/content.html'
                    //controller:''
                }

            }
        })
})