<template>
  <div class="home">
    Dashboard 
    <p>Nome: {{ this.$store.state.user.name }}</p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Dashboard',
  components: {
    
  }
}
</script>
