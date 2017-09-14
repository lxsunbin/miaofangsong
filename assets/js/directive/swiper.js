
App.directive('mySwiper',function($rootScope){
    return{
        restrict:'EA',
        templateUrl:'views/tpl/swiper.html',
        scope:{
            imgs:"=imgs"
        },
        link:function($scope,ele,attr){       
                var mySwiper = new Swiper ('.swiper-container', {              
                    direction:'horizontal', // 轮播图的方向，也可以是vertical方向         
                    loop: true,      //播放速度
                    autoplay:4000,  // 自动播放时间
                    speed:2000,    // 播放的速度
                    pagination: '.swiper-pagination',  // 如果需要分页器，即下面的小圆点
                    nextButton: '.swiper-button-next',// 如果需要前进后退按钮
                    prevButton: '.swiper-button-prev',　
                    observer:true,//修改swiper自己或子元素时，自动初始化swiper            
                    observeParents:true,//修改swiper的父元素时，自动初始化swiper　
                    autoplayDisableOnInteraction : false, 　// 这样，即使我们滑动之后， 定时器也不会被清除
                    effect:"flip"//--可以实现3D效果的轮播
                  });      
        }
    }
})