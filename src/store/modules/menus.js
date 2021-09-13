const state = {
  menus: []
}

const mutations = {
  UPDATE_MENUS (state, menus) {
    state.menus = menus
  }
}

export default {
  state, mutations
}
