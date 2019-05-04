<template>
  <q-page padding>
    <div class="row">
      <div class="col-md-4 col-xs-12">
        <q-card class="my-card q-ma-xs">
          <q-card-section>
            <div class="text-h6 text-center">Kehadiran Keluarga</div>
          </q-card-section>
          <chart :options="chartsKeluarga" autoresize/>
        </q-card>
      </div>
      <div class="col-md-4 col-xs-12">
        <q-card class="my-card q-ma-xs">
          <q-card-section>
            <div class="text-h6 text-center">Pembayaran Iuran</div>
          </q-card-section>
          <chart :options="chartsIuran" autoresize/>
        </q-card>
      </div>
      <div class="col-md-4 col-xs-12">
        <q-card class="my-card q-ma-xs">
          <q-card-section>
            <div class="text-h6 text-center">Keuangan</div>
          </q-card-section>
          <chart :options="chartsUang" autoresize/>
        </q-card>
      </div>
    </div>

    <div class="row">
      <div class="col-md-4 col-xs-12">
        <q-card class="my-card text-white bg-green-10 q-ma-xs">
          <q-card-section>
            <div class="text-h6">{{ $store.getters['sheet/TOTAL_UANG'].plus | money }}</div>
            <div class="text-subtitle2">Total Pendapatan</div>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-md-4 col-xs-12">
        <q-card class="my-card text-white bg-red-10 q-ma-xs">
          <q-card-section>
            <div class="text-h6">{{ $store.getters['sheet/TOTAL_UANG'].minus | money }}</div>
            <div class="text-subtitle2">Total Pengeluaran</div>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-md-4 col-xs-12">
        <q-card class="my-card text-white bg-blue-10 q-ma-xs">
          <q-card-section>
            <div class="text-h6">{{ $store.getters['sheet/TOTAL_UANG'].saldo | money }}</div>
            <div class="text-subtitle2">Saldo Akhir</div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
import mixin from './PageMixin'

export default {
  name: 'PageIndex',
  mixins: [mixin],
  computed: {
    chartsKeluarga () {
      let keluarga = this.$store.getters['sheet/TOTAL_KELUARGA']
      let belum = keluarga.jumlah - keluarga.akan - keluarga.sudah

      return {
        title: {
          text: 'Kehadiran Keluarga',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['Belum', 'OTW', 'Hadir']
        },
        color: ['red', 'green', 'blue'],
        series: [
          {
            name: 'Kehadiran',
            type: 'pie',
            radius: '60%',
            center: ['50%', '50%'],
            data: [
              { value: belum, name: 'Belum' },
              { value: keluarga.akan, name: 'OTW' },
              { value: keluarga.sudah, name: 'Hadir' }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
    },
    chartsIuran () {
      let keluarga = this.$store.getters['sheet/TOTAL_KELUARGA']
      let belum = keluarga.jumlah - keluarga.iuran

      return {
        title: {
          text: 'Pembayaran Iuran',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['Belum', 'Sudah']
        },
        color: ['red', 'blue'],
        series: [
          {
            name: 'Pembayaran Iuran',
            type: 'pie',
            radius: '60%',
            center: ['50%', '50%'],
            data: [
              { value: belum, name: 'Belum' },
              { value: keluarga.iuran, name: 'Sudah' }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
    },
    chartsUang () {
      let uang = this.$store.getters['sheet/TOTAL_UANG']
      let minus = Math.abs(uang.minus)
      let plus = uang.plus

      return {
        title: {
          text: 'Keuangan',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['Masuk', 'Keluar']
        },
        color: ['blue', 'red'],
        series: [
          {
            name: 'Keuangan',
            type: 'pie',
            radius: '60%',
            center: ['50%', '50%'],
            data: [
              { value: plus, name: 'Masuk' },
              { value: minus, name: 'Keluar' }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
    }
  }
}
</script>

<style scoped>
  .echarts {
    width: 100%
  }
</style>
