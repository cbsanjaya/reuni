<template>
  <q-page padding>
    <q-list bordered padding>
      <q-item-label header>Daftar Keluarga</q-item-label>

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
              {{ data.families[0] }}
              <q-badge v-if="data.present === 1" color="green" label="hadir" />
              <q-badge v-else-if="data.present === 0" color="green-10" label="akan hadir" />
              <q-badge v-else color="red" label="belum konfirmasi" />
            </q-item-label>
            <q-item-label caption lines="2">{{ data.families.filter((e,i) => i !== 0 ).join(', ') }}</q-item-label>
            <q-item-label v-if="data.pay">
              <q-badge>infaq {{ data.pay.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') }}</q-badge>
            </q-item-label>
          </q-item-section>
        </q-item>
      </div>
    </q-list>
  </q-page>
</template>

<script>
import att from 'src/data/attendance'

export default {
  name: 'AttendancePage',
  data: () => ({
    filter: '',
    data: []
  }),
  mounted () {
    this.data = att
  },
  computed: {
    computedData () {
      let rows = this.data
      if (this.filter) {
        const lowerTerms = this.filter.toLowerCase()
        rows = this.data.filter(
          row => (row.families.some(fam => fam.toLowerCase().indexOf(lowerTerms) !== -1))
        )
      }
      return rows
    }
  }
}
</script>

<style>
</style>
