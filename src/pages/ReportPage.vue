<template>
  <q-page padding>
    <q-list bordered padding>
      <q-pull-to-refresh @refresh="loadData">
        <q-item-label header class="text-center bold">Laporan Keuangan</q-item-label>

        <q-separator spaced/>

        <q-item>
          <q-item-section style="color: #757575">
              <q-item-label>Pemasukan</q-item-label>
              <q-item-label>Pengeluaran</q-item-label>
              <q-item-label class="text-bold">Saldo</q-item-label>
          </q-item-section>
          <q-item-section style="color: black" side top>
              <q-item-label>{{ totalData.plus | money }}</q-item-label>
              <q-item-label>{{ totalData.minus | money }}</q-item-label>
              <q-item-label class="text-bold">{{ totalData.saldo | money }}</q-item-label>
          </q-item-section>
        </q-item>

        <div v-for="data in datas" :key="data.id">
          <q-separator spaced />

          <q-item>
            <q-item-section>
              <q-item-label>
                {{ data.tanggal }}
                <q-badge :color="data.total < 0 ? 'red' : 'blue'" class="float-right">{{ data.total | money }}</q-badge>
              </q-item-label>
              <q-item-label caption lines="2">
                <span style="color: black; font-weight: 600;">{{ data.orang }}</span> {{ data.keterangan }}
              </q-item-label>
            </q-item-section>
          </q-item>
        </div>
      </q-pull-to-refresh>
    </q-list>
  </q-page>
</template>

<script>
export default {
  name: 'ReportPage',
  data: () => ({
    datas: []
  }),
  mounted () {
    this.loadData()
  },
  computed: {
    totalData () {
      let saldo = this.datas.reduce((t, n) => t + n.total, 0)
      let minus = this.datas.filter(e => e.total < 0).reduce((t, n) => t + n.total, 0)
      console.log(minus)
      let plus = saldo - minus
      return { plus, minus, saldo }
    }
  },
  filters: {
    money (val) {
      let ab = Math.abs(val).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
      return ab
    }
  },
  methods: {
    loadData (cb) {
      this.datas = []
      this.$axios.get('uang!A3:E100').then(res => {
        res.data.values.forEach(e => {
          if (e[0] && e[1]) {
            this.datas.push({
              id: e[0],
              tanggal: e[1],
              orang: e[2] ? e[2] : '',
              keterangan: e[3] ? e[3] : '',
              total: e[4] ? e[4] : 0
            })
          }
        })
        if (cb != null) { cb() }
      })
    }
  }
}
</script>

<style>
</style>
