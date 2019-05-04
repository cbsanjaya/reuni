const mixin = {
  filters: {
    money (val) {
      return val.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    },
    ribuan (val) {
      return `${(val / 1000)}K`
    }
  }
}

export default mixin
