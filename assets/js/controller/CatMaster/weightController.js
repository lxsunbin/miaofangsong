angular.module("App").controller('weightController',function($rootScope,$scope,$state){
    var myChart = echarts.init(document.getElementById('weightChart')); 
    //上上次数据
    var weightDataOlder= [4.0,4.0,3.3,4.2,3.1,3.2,2.9,1.5,1.8,1.1,1.2,1.1,1.6,1.2,2.1,1.2,1.1];
    //上次数据
    var weightDataOld= [4.1,4.2,3.4,4.3,3.4,3.5,3.0,2.1,2.0,1.3,1.5,1.3,2.0,1.4,2.2,1.3,1.4];
    //最新数据
    var weightDataNew= [4.3,4.4,3.7,4.6,3.6,3.8,3.1,2.2,2.1,1.6,1.8,1.8,2.2,1.8,2.3,1.5,1.6];
    var option = {       
        title : {
            text: '喵放送主播体重图（kg）',
            subtext: '2017.9.30更新',
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
        },
        legend: {
            data:['2017-07-31','2017-08-31','2017-09-30'],
            right:0,
            selected: {  
                '2017-07-31': false,  
                '2017-08-31': false
            } 
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top:'20%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: ['狗丁','猴子','泡椒','奥丁','缪缪','可乐','蛋挞','汤圆','酒酿','西柚','奶茶','咖啡','牛油果','奶黄包','豆沙包','西瓜','三明治'],
            axisTick: {
                alignWithLabel: true
            }
        }],
        yAxis: [{
            type: 'value'
        }],
        series: [
            {
                name: '2017-07-31',
                type: 'bar',
                color:['#736349'],
                data: weightDataOlder,
                label: {
                    normal: {
                        show: true,
                        position: 'inside'
                    }
                }
            },
            {
                name: '2017-08-31',
                type: 'bar',
                color:['#cc9b18'],
                data: weightDataOld,
                label: {
                    normal: {
                        show: true,
                        position: 'inside'
                    }
                }
            },
            {
                name: '2017-09-30',
                color: ['#3398DB'],
                type: 'bar',
                data: weightDataNew,
                label: {
                    normal: {
                        show: true,
                        position: 'inside'
                    }
                },
                markPoint : {
                    symbol:'pin',
                    itemStyle:{
                        normal:{
                            color:'green'
                        }
                    },
                    data : [
                        {type : 'max', name: '最大值'},
                        {type : 'min', name: '最小值'},
                    ]
                },
                markLine : {
                    data : [
                        {type : 'average', name: '平均值'}
                    ]
                }
            }
      ]
    };
    myChart.setOption(option);
})