import ECharts from 'vue-echarts'
// import ECharts modules manually to reduce bundle size
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip'

// "async" is optional
export default async ({ Vue }) => {
  Vue.component('chart', ECharts)
}
