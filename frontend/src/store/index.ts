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
    },
    showAppLoader: false
  },
  getters: {
    selectedPlace: (state) => {
      return state.selectedPlace
    },
    appLoader: (state) => {
      return state.showAppLoader
    }
  },
  mutations: {
    setSelectedPlace: (state, payload) => {
      state.selectedPlace = payload
    },
    setLoaderState: (state, payload) => {
      state.showAppLoader = payload
    }
  },
  actions: {
    updateSelectedPlace: (context, payload) => {
      context.commit("setSelectedPlace", payload)
    },
    updateLoaderStatus: (context, payload) => {
      context.commit("setLoaderState", payload)
    }
  },
  modules: {
  },
  plugins: plugins
})
