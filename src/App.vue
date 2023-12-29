<template>
  <Navbar />
  <main class="container">
    <div class="col-md-12">
        <div class="row">
    <router-view/>
    </div>
    </div>
  </main>
</template>

<script>
import Navbar from './components/Navbar/Navbar.vue'
  export default {
    name: 'App',
    components: {
      Navbar
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  box-sizing: border-box;
}

.dropdown-menu[data-bs-popper] {
  margin-top: 11px !important;
}

.breadcrumb-item a {
  text-decoration: none;
}
</style>
