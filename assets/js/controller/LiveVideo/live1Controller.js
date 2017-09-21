angular.module("App").controller('live1Controller',function($rootScope,$scope,$state,$timeout){
    //顶部视频提醒
    function remind(){
        $('.remind').slideUp()
    }
    $timeout(remind,8000);
})