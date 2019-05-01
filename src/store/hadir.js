import att from 'src/data/hadir'

export default {
  namespaced: true,
  state: {
    data: att
  },
  getters: {
    status: (state) => {
      let total = state.data.length
      let hadir = state.data.filter(e => e.hadir === 2).length
      let akanHadir = state.data.filter(e => e.hadir === 1).length
      let iuran = state.data.reduce((t, n) => t + n.iuran, 0)
      return {
        total,
        akanHadir,
        hadir,
        iuran
      }
    }
  }
}
