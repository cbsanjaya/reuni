import axios from 'axios'

export default {
  namespaced: true,
  state: {
    hadir: [],
    uang: []
  },
  getters: {
    TOTAL_UANG: state => {
      let saldo = state.uang.reduce((t, n) => t + n.total, 0)
      let minus = state.uang.filter(e => e.total < 0).reduce((t, n) => t + n.total, 0)
      let plus = saldo - minus

      return { plus, minus, saldo }
    },
    TOTAL_KELUARGA: state => {
      let jumlah = state.hadir.length
      let akan = state.hadir.filter(e => e.hadir === 1).length
      let sudah = state.hadir.filter(e => e.hadir === 2).length
      let akanPerson = state.hadir.reduce((t, n) => t + n.akan, 0)
      let sudahPerson = state.hadir.reduce((t, n) => t + n.sudah, 0)

      return { jumlah, akan, akanPerson, sudah, sudahPerson }
    }
  },
  mutations: {
    STORE_DATA (state, payload) {
      state.hadir = []
      payload.valueRanges[0].values.forEach(e => {
        if (e[0] && e[1]) {
          state.hadir.push({
            id: e[0] ? e[0] : '',
            keluarga: e[1] ? e[1].split(', ') : '',
            hadir: e[2] ? e[2] : 0,
            iuran: e[3] ? e[3] : 0,
            akan: e[4] ? e[4] : 0,
            sudah: e[5] ? e[5] : 0,
            alamat: e[6] ? e[6] : ''
          })
        }
      })

      state.uang = []
      payload.valueRanges[1].values.forEach(e => {
        if (e[0] && e[1]) {
          state.uang.push({
            id: e[0],
            tanggal: e[1],
            orang: e[2] ? e[2] : '',
            keterangan: e[3] ? e[3] : '',
            total: e[4] ? e[4] : 0
          })
        }
      })
    }
  },
  actions: {
    LOAD_DATA ({ commit }, cb) {
      axios.get('values:batchGet?ranges=hadir!A3%3AG100&ranges=uang!A3%3AE100')
        .then(res => {
          commit('STORE_DATA', res.data)
          if (cb != null) { cb() }
        })
    }
  }
}
