App.config(function($stateProvider,$urlRouterProvider,$locationProvider){  
    $urlRouterProvider.otherwise('/LiveVideo/live1.html/1');
    //1号直播间
    $stateProvider.state('live1', {
        url: "/LiveVideo/live1.html?tab",
        templateUrl: 'views/LiveVideo/live1.html',
        data: {pageTitle: '24H猫咪直播间---1号直播间'},
        controller:'live1Controller',
        params:{tab:null},
        resolve:{
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name: 'App',
                    files: ['js/controller/LiveVideo/live1Controller.js']
                })
            }]
        }
    }) 
    //2号直播间
    .state('live2', {
        url: "/LiveVideo/live2.html?tab",
        templateUrl: 'views/LiveVideo/live2.html',
        data: {pageTitle: '随缘直播间（游戏，户外）---2号直播间'},
        controller:'live2Controller',
        params:{tab:null},
        resolve:{
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name: 'App',
                    files: ['js/controller/LiveVideo/live2Controller.js']
                })
            }]
        }
    })  
});  