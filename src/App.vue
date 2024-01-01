<template>
  <div v-if="isAuthenticated">
    <Navbar />
    <main class="container">
      <div class="col-md-12">
          <div class="row">
            <router-view/>
          </div>
      </div>
    </main>
  </div>
  <div v-if="!isAuthenticated">
    <Login/>
  </div>
</template>

<script>
import Navbar from './components/Navbar/Navbar.vue'
import Login from './views/Autenticacao/Login.vue'

  export default {
    name: 'App',
    components: {
      Navbar,
      Login
    },
    computed: {
    isAuthenticated() {
      return this.$store.state.isAuthenticated;
    },
  },
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
}

input, select {
  height: 45px;
}

.dropdown-menu[data-bs-popper] {
  margin-top: 11px !important;
}

.breadcrumb-item a {
  text-decoration: none;
}
</style>
