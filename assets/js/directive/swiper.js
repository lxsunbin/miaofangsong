/*
 * @Author: Toma 
 * @Date: 2017-09-15 09:43:10 
 * @Last Modified by: Toma
 * @Last Modified time: 2017-09-18 16:26:37
 * @description: 轮播插件
 * @e.g. : <my-swiper imgs='arr' options='options'></my-swiper>
 */

App.directive('mySwiper',function($rootScope,$log){
    //default options
    var defaults={              
        direction:'horizontal', // 轮播图的方向，也可以是vertical方向         
        loop: true,      //播放速度
        autoplay:4000,  // 自动播放时间
        speed:2000,    // 播放的速度
        pagination: '.swiper-pagination',  // 如果需要分页器，即下面的小圆点
        paginationClickable :true,//是否可以点击小圆点
        nextButton: '.swiper-button-next',// 如果需要前进后退按钮
        prevButton: '.swiper-button-prev',　
        scrollbar:'.swiper-scrollbar',//滚动条
        scrollbarDraggable : true ,//是否可以拖动滚动条
        observer:true,//修改swiper自己或子元素时，自动初始化swiper            
        observeParents:true,//修改swiper的父元素时，自动初始化swiper　
        autoplayDisableOnInteraction : false, 　// 这样，即使我们滑动之后， 定时器也不会被清除
        effect:"slide"//--可以实现3D效果的轮播 effect,fade,cube,coverflow,flip
    };
    return{
        restrict:'EA',
        templateUrl:'views/tpl/swiper.html',
        scope:{
            imgs:"=imgs",
            options:"=?options"
        },      
        link:function($scope,ele,attr){   
            $scope.options=$scope.options || defaults;  
            if (!$scope.options) {
                Layout.showError('轮播未知错误')
                $log.error("pagination is failure, config is error.");
                $(ele).hide();
                return;
            };           
            var mySwiper = new Swiper('.swiper-container', $scope.options);   
        }
    }
})