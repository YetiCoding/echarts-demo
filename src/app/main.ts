import * as echarts from 'echarts';
import { ajax } from 'jquery';
import { SalerData } from './saler-data'
let myChart = echarts.init(document.getElementById('main'));

let option = {};

ajax({
    method: 'get',
    url: '/api/saler/saler_data.json'
}).then((result: [SalerData]) => {
    let legends = result.map((item: SalerData) => {
        return item.name;
    });
    let series = result.map((item: SalerData) => {
        return {
            name: item.name,
            type: 'bar',
            data: item.sale_info
        }
    });
    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data: legends
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['一月', '二月', '三月', '四月', '五月', '六月', '日月']
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: series
    }
    myChart.setOption(option);
});