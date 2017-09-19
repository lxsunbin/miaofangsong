App.config(function($stateProvider,$urlRouterProvider,$locationProvider){  
    // $urlRouterProvider.otherwise('error.html');
    //1号直播间
    $stateProvider.state('live1', {
        url: "LiveVideo/live1.html",
        templateUrl: 'views/LiveVideo/live1.html',
        data: {pageTitle: '24H猫咪直播间---1号直播间'},
        controller:'live1Controller',
        resolve:{
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name: 'live1',
                    files: ['js/controller/LiveVideo/live1Controller.js']
                })
            }]
        }
    }) 
    //2号直播间
    .state('live2', {
        url: "LiveVideo/live2.html",
        templateUrl: 'views/LiveVideo/live2.html',
        data: {pageTitle: '随缘直播间（游戏，户外）---2号直播间'},
        controller:'live2Controller',
        resolve:{
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name: 'live2',
                    files: ['js/controller/LiveVideo/live2Controller.js']
                })
            }]
        }
    })  
});  