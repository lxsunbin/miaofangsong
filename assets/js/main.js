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

App.controller("AppController",function($rootScope,$scope,$timeout){
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
})