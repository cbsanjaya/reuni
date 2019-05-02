<template>
  <q-page padding>
    <q-list bordered padding>
      <q-pull-to-refresh @refresh="loadData">
        <q-item-label header class="text-center bold">Daftar Keluarga</q-item-label>

        <q-separator spaced/>

        <q-item>
          <q-item-section>
            <q-input
              v-model="filter"
              filled
              placeholder="Cari Keluarga"
            >
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </q-item-section>
        </q-item>

        <div v-for="data in computedData" :key="data.id">
          <q-separator spaced />

          <q-item>
            <q-item-section>
              <q-item-label>
                {{ data.keluarga[0] }}
                <q-badge v-if="data.hadir === 2" color="green">hadir {{ data.sudah }} Orang</q-badge>
                <q-badge v-else-if="data.hadir === 1" color="green-10">akan hadir {{ data.akan }} Orang</q-badge>
                <q-badge v-else color="red" label="belum konfirmasi" />
              </q-item-label>
              <q-item-label caption lines="2">{{ data.keluarga.filter((e,i) => i !== 0 ).join(', ') }}</q-item-label>
              <q-item-label v-if="data.iuran">
                <q-badge>iuran {{ data.iuran.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') }}</q-badge>
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
  name: 'AttendancePage',
  data: () => ({
    filter: '',
    data: []
  }),
  mounted () {
    this.loadData()
  },
  computed: {
    computedData () {
      let dataHadir = this.data
      let rows = dataHadir
      if (this.filter) {
        const lowerTerms = this.filter.toLowerCase()
        rows = dataHadir.filter(
          row => row.keluarga.toLowerCase().indexOf(lowerTerms) !== -1
        )
      }
      return rows
    }
  },
  methods: {
    loadData (cb) {
      this.$axios.get('hadir!A3:F100').then(res => {
        res.data.values.forEach(e => {
          this.data.push({
            id: e[0] ? e[0] : '',
            keluarga: e[1] ? e[1].split(', ') : '',
            hadir: e[2] ? e[2] : 0,
            iuran: e[3] ? e[3] : 0,
            akan: e[4] ? e[4] : 0,
            sudah: e[5] ? e[5] : 0
          })
        })
        if (cb != null) { cb() }
      })
    }
  }
}
</script>

<style>
</style>
