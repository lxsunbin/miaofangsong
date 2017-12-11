angular.module("App").controller('weightController', function ($rootScope, $scope, $state) {
    //体重echarts图表
    var myChart = echarts.init(document.getElementById('weightChart'));
    //上上次数据
    var weightDataOlder = [4.0, 4.0, 3.3, 4.2, 3.1, 3.2, 2.9, 1.5, 1.8, 1.1, 1.2, 1.1, 1.6, 1.2, 2.1, 1.2, 1.1];
    //上次数据
    var weightDataOld = [4.1, 4.2, 3.4, 4.3, 3.4, 3.5, 3.0, 2.1, 2.0, 1.3, 1.5, 1.3, 2.0, 1.4, 2.2, 1.3, 1.4];
    //最新数据
    var weightDataNew = [4.3, 4.4, 3.7, 4.6, 3.6, 3.8, 3.1, 2.2, 2.1, 1.6, 1.8, 1.8, 2.2, 1.8, 2.3, 1.5, 1.6];
    //10.27最新数据
    var weightDataNew1027 = [4.35,4.05,4.15,4.55,3.55,4.5,3.95,2.95,2.75,2.8,2.45,2.45,3.1,3.00,3.2,3.1,3.25,2.3,2.1,1.9,,1.2];
    //12.11最新数据
    var weightDataNew1211 = [3.7, 3.5, 4.0, 3.9, 3.2, 4.1, 3.5, 2.6, 2.3, 2.5, 2.7, 2.4, 3.0, 3.0, 2.9, 2.8, 3.3, 2.7, 2.3, 2.2, 0.9, 1.2];
    var option = {
        title: {
            text: '喵放送主播体重图（kg）',
            subtext: '2017.12.11更新',
        },
        decimal: 2,
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['2017-07-31', '2017-08-31', '2017-09-30','2017-10-27', '2017-12-11'],
            right: 0,
            selected: {
                '2017-07-31': false,
                '2017-08-31': false,
                '2017-09-30': false,
                '2017-10-27': false
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top: '20%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            axisLabel: {
                interval: 0,//横轴信息全部显示
                formatter:function(val){
                    return val.split("").join("\n"); //横轴信息文字竖直显示
                }
            },
            data: ['布丁', '泡芙', '泡椒', '奥丁', '缪斯', '可乐', '蛋挞', '汤圆', '酒酿', '西柚', '奶茶', '咖啡', '牛油果', '奶黄包', '豆沙包', '西瓜', '三明治', '乌龙茶', '柠檬茶', '冬瓜茶', '棉花糖', '歪歪'],
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
                color: ['#736349'],
                data: weightDataOlder,
                label: {
                    normal: {
                        show: true,
                        position: 'inside',
                        formatter: function (val) {
                            return val.data.toFixed(1)
                        }
                    }
                }
            },
            {
                name: '2017-08-31',
                type: 'bar',
                color: ['#cc9b18'],
                data: weightDataOld,
                label: {
                    normal: {
                        show: true,
                        position: 'inside',
                        formatter: function (val) {
                            return val.data.toFixed(1)
                        }
                    }
                }
            },
            {
                name: '2017-09-30',
                type: 'bar',
                color: ['#cc9b18'],
                data: weightDataNew,
                label: {
                    normal: {
                        show: true,
                        position: 'inside',
                        formatter: function (val) {
                            return val.data.toFixed(1)
                        }
                    }
                }
            },
            {
                name: '2017-10-27',
                type: 'bar',
                color: ['#cc9b18'],
                data: weightDataNew1027,
                label: {
                    normal: {
                        show: true,
                        position: 'inside',
                        formatter: function (val) {
                            return val.data.toFixed(1)
                        }
                    }
                }
            },
            {
                name: '2017-12-11',
                color: ['#3398DB'],
                type: 'bar',
                data: weightDataNew1211,
                label: {
                    normal: {
                        show: true,
                        position: 'inside',
                        formatter: function (val) {
                            return val.data.toFixed(1)
                        }
                    }
                },
                markPoint: {
                    symbol: 'pin',
                    itemStyle: {
                        normal: {
                            color: 'green'
                        }
                    },
                    data: [
                        { type: 'max', name: '最大值' },
                        { type: 'min', name: '最小值' },
                    ]
                },
                markLine: {
                    data: [
                        { type: 'average', name: '平均值' }
                    ]
                }
            }
        ]
    };
    myChart.setOption(option);
})