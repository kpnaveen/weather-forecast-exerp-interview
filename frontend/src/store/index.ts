import { createStore, createLogger } from 'vuex';

const plugins: any[] = [];

if(process.env.NODE_ENV === "development") {
  plugins.push(createLogger())
}

export default createStore({
  state: {
    selectedPlace: {
      lat: null,
      lng: null,
    }
  },
  getters: {
    selectedPlace: (state) => {
      return state.selectedPlace
    }
  },
  mutations: {
    setSelectedPlace: (state, payload) => {
      state.selectedPlace = payload
    }
  },
  actions: {
    updateSelectedPlace: (context, payload) => {
      context.commit("setSelectedPlace", payload)
    }
  },
  modules: {
  },
  plugins: plugins
})
