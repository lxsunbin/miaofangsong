angular.module("App").controller('weightController',function($rootScope,$scope,$state){
    var myChart = echarts.init(document.getElementById('weightChart'));  
    var option = {
        color: ['#3398DB'],
        title : {
            text: '喵放送主播体重图',
            subtext: '2017.9.20更新'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter:function(params){
                return params[0].name + ':' + params[0].value + '公斤';
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: ['狗丁', '猴子', '泡椒', '奥丁', '缪斯', '可乐', '汤圆', '酒酿', '西柚', '奶茶', '咖啡', '牛油果', '奶黄包', '豆沙包', '西瓜', '三明治'],
            axisTick: {
                alignWithLabel: true
            }
        }],
        yAxis: [{
            type: 'value'
        }],
        series: [{
            name: '重量',
            type: 'bar',
            barWidth: '60%',
            data: [4.3, 2, 5, 5.1, 2.3, 1.6, 4.2,3.8, 1.6, 5.2, 3.3, 3.1, 2.7, 2.3,2.1,2.9],
            markPoint : {
                symbol:'pin',
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
        }]
    };
    myChart.setOption(option);
})