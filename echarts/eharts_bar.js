import * as echarts from 'echarts'

var chartDom = document.getElementById('main')
var myChart = echarts.init(chartDom)
var option

const data = [10, 52, 200, 334, 390, 330, 220].map(item => ({
  value: item,
  //自定义标签样式，仅对该数据项有效
  label: {},
  //自定义特殊 itemStyle，仅对该数据项有效
  color: '#fff',
  itemStyle: {
    borderRadius: [30, 30, 0, 0]
  }
}))
option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
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
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisTick: {
        show: false
      }
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'Direct',
      type: 'bar',
      barWidth: 30,
      color: new echarts.graphic.LinearGradient(
        1,
        0,
        0,
        0, // 表示从上到下
        [
          { offset: 1, color: '#33e7ff' },
          { offset: 0, color: '#047fff' }
        ]
      ),
      // color:'red',
      // data: [10, 52, 200, 334, 390, 330, 220]
      data
    }
  ]
}

option && myChart.setOption(option)
