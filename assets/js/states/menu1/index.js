App.config(function($stateProvider,$urlRouterProvider,$locationProvider){  
    $urlRouterProvider.otherwise('error.html');
    $stateProvider.state('menu1', {
        url: "/menu1/menu1.html",
        templateUrl: 'views/menu1/menu1.html',
        data: {pageTitle: 'menu1'},
        resolve:{
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name: 'App',
                    insertBefore: '#ng_load_plugins_before',
                    files: ['js/controller/menu1/menu1.js']
                })
            }]
        }
    })  
});  