App.config(function($stateProvider,$urlRouterProvider,$locationProvider){  
    //1号直播间
    $stateProvider.state('weight', {
        url: "/CatMaster/weight.html?menu",
        templateUrl: 'views/CatMaster/weight.html',
        data: {pageTitle: '主播体重'},
        controller:'weightController',
        params:{menu:null},
        resolve:{
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name: 'App',
                    files: [
                        'js/controller/CatMaster/weightController.js',
                        'css/CatMaster.css'
                    ]
                })
            }]
        }
    })  
});  