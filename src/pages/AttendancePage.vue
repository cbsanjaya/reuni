<template>
  <q-page padding>
    <q-list bordered padding>
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
              <q-badge>iuran {{ data.iuran | money }}</q-badge>
            </q-item-label>
          </q-item-section>
        </q-item>
      </div>
    </q-list>
  </q-page>
</template>

<script>
import mixin from './PageMixin'

export default {
  name: 'AttendancePage',
  mixins: [mixin],
  data: () => ({
    filter: ''
  }),
  computed: {
    computedData () {
      let dataHadir = this.$store.state.sheet.hadir
      let rows = dataHadir
      if (this.filter) {
        const lowerTerms = this.filter.toLowerCase()
        rows = dataHadir.filter(
          row => (row.keluarga.some(fam => fam.toLowerCase().indexOf(lowerTerms) !== -1))
        )
      }
      return rows
    }
  }
}
</script>

<style>
</style>
