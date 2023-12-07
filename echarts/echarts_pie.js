import * as echarts from 'echarts'

var chartDom = document.getElementById('main')
var myChart = echarts.init(chartDom)
var option

let data = [
  { name: '机房001', value: 1501 },
  { name: '机房002', value: 1305 },
  { name: '机房003', value: 600 },
  { name: '机房004', value: 1330 }
]
let totalCount = data.reduce((vs, v) => vs + v.value, 0)
let formatNumber = num => num.toString().replace(/(?=(\B)(\d{3})+$)/g, ',')
option = {
  title: [
    {
      text: `{name|12,584}\n{val|总数}`,
      top: 'center',
      left: 'center',
      textStyle: {
        rich: {
          name: {
            fontSize: 16,
            color: 'yellow',
            padding: [10, 0]
          },
          val: {
            fontSize: 14,
            fontWeight: 'bold',
            color: '#333333'
          }
        }
      }
    }
  ],
  tooltip: {
    trigger: 'item',
    backgroundColor: 'rgba(0,0,0,0.9)',
    formatter: params => `${params.data.name}<br/>
    ${params.marker}<span style="color:${params.color}">主机占比: ${params.percent} %</span><br/>
    ${params.marker}<span style="color:${params.color}">主机数量: ${params.value} 台</span>`
  },
  series: {
    type: 'pie',
    radius: [50, 70],
    left: 'center',
    top: 'center',
    width: 400,
    itemStyle: { borderColor: '#fff', borderWidth: 1 },
    label: {
      alignTo: 'edge',
      formatter: '{name|{b}}\n{value|{d}% - {c}台}',
      minMargin: 5,
      edgeDistance: 10,
      lineHeight: 15,
      rich: { value: { fontSize: 10, color: '#999999' } }
    },
    labelLine: {
      length: 15,
      length2: 0,
      maxSurfaceAngle: 80
    },
    labelLayout: params => {
      const isLeft = params.labelRect.x < myChart.getWidth() / 2
      const points = params.labelLinePoints
      points[2][0] = isLeft ? params.labelRect.x : params.labelRect.x + params.labelRect.width
      return params
    },
    data: data
  }
}

option && myChart.setOption(option)
