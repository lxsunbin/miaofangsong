App.config(function($stateProvider,$urlRouterProvider,$locationProvider){  
    //主播体重
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
    //主播介绍
    .state('introduce', {
        url: "/CatMaster/introduce.html?menu",
        templateUrl: 'views/CatMaster/introduce.html',
        data: {pageTitle: '人员介绍'},
        controller:'introduceController',
        params:{menu:null},
        resolve:{
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name: 'App',
                    files: [
                        'js/controller/CatMaster/introduceController.js',
                        'css/CatMaster.css'
                    ]
                })
            }]
        }
    })  
});  