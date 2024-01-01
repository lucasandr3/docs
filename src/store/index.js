import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate';
import Cookies from 'js-cookie';

export default createStore({
  state: {
    myAppToken: '',
    isAuthenticated: false,
    user: null,
  },
  getters: {
  },
  mutations: {
    login(state, data) {
      state.isAuthenticated = true;
      state.user = data.user;
      state.myAppToken = data.access_token;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.myAppToken = '';
    },
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState({
    storage: {
      getItem: (key) => Cookies.get(key),
      setItem: (key, value) => Cookies.set(key, value, {expires: 3, secure: true}),
      removeItem: (key) => Cookies.remove(key)
    }
  })]
})
