//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \|     |// '.
//                 / \|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \  -  /// |     |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//               佛祖保佑         永无BUG
//        本模块已经过开光处理，绝无可能再产生bug
//===============================================
//首页controller
var App=angular.module("App",[
    "ui.router",
    "ui.bootstrap",
    "oc.lazyLoad",
    "ngAnimate",
]);

var assetsPath="./assets/";

App.controller("AppController",function($rootScope,$scope,$timeout,$state,$location,$stateParams){
    //清除页面缓存(会引起后退按钮失效)
    /*$scope.$on('$locationChangeStart',function (event, newUrl, oldUrl) {
        $location.search('_v', new Date().getTime())
    });*/
   //顶部轮播
   $scope.swiperArr=[];
   for(var i=1;i<11;i++){
        $scope.swiperArr.push(
            '../../img/top_swipers/top_swipers_'+i+'.jpg'
        )
   };  
   $scope.swiperPagination=false;
   $scope.swiperButton=false;
   $scope.swiperScrollbar=false;
   $scope.options={
        direction:'horizontal',       
        loop: true,
        autoplay:4000, 
        speed:2000,   
        observer:true,           
        observeParents:true,
        autoplayDisableOnInteraction : false, 
        effect:"coverflow"
   };
   //左侧导航
        //一级菜单
   $scope.changeMenu=function(event){
        $('.menu_list').slideUp();
        $('.menu_arrow').removeClass('current');
        $('.nav_link').removeClass('current');
        if($(event.target).parents('li').find('.menu_list').is(':hidden')){
            $(event.target).parents('li').find('.menu_list').slideDown();
            $(event.target).parents('li').find('.menu_arrow').addClass('current');
            $(event.target).parents('li').find('.nav_link').addClass('current');
        }else{
            $(event.target).parents('li').find('.menu_list').slideUp();
            $(event.target).parents('li').find('.menu_arrow').removeClass('current');
            $(event.target).parents('li').find('.nav_link').removeClass('current');
        };
    };
        //二级菜单
    $scope.secMenu=function(event,sref,tab){
        $('.menu_list li a').removeClass('current');
        $(event.target).addClass('current');
        $state.go(sref,{'tab':tab})
    };
    //页面初始状态及刷新跳转定位
    $rootScope.$on('$stateChangeSuccess',function (event,next,current) {
        $('#'+$stateParams.tab).addClass('current');
        $('#'+$stateParams.tab).parents('.menu_list').slideDown();
        $('#'+$stateParams.tab).parents('.menu_list').siblings().addClass('current');
        $('#'+$stateParams.tab).parents('.menu_list').siblings().find('.menu_arrow').addClass('current');
    })
});
//全局参数及路由跳转设置
App.run(["$rootScope", "$state","$location", function ($rootScope, $state,$location) {
    $rootScope.$state=$state; // state to be accessed from view      
}]);

