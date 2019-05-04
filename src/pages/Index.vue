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

      return this.getOptions([
        { value: belum, name: 'Belum' },
        { value: keluarga.akan, name: 'OTW' },
        { value: keluarga.sudah, name: 'Hadir' }
      ])
    },
    chartsIuran () {
      let keluarga = this.$store.getters['sheet/TOTAL_KELUARGA']
      let belum = keluarga.jumlah - keluarga.iuran

      return this.getOptions([
        { value: belum, name: 'Belum' },
        { value: keluarga.iuran, name: 'Sudah' }
      ])
    },
    chartsUang () {
      let uang = this.$store.getters['sheet/TOTAL_UANG']
      let minus = Math.abs(uang.minus)
      let plus = uang.plus

      return this.getOptions([
        { value: minus, name: 'Keluar' },
        { value: plus, name: 'Masuk' }
      ])
    }
  },
  methods: {
    getOptions (data) {
      return {
        tooltip: {
          trigger: 'item',
          formatter: '{b} : {c} ({d}%)'
        },
        label: {
          formatter: '{b}: ({d}%)'
        },
        color: ['red', 'green', 'blue'],
        series: [
          {
            type: 'pie',
            radius: '80%',
            data: data
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
