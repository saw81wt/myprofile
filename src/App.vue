<template>
  <div id="app" style="margin-top: 50px;">

    <span class="md-display-2">Sotaro's Profile</span>

    <my-profile />
  </div>
  
</template>

<script>
import MyProfile from './components/Home.vue'
// import { faCoffee } from '@fortawesome/fa-twitter'

export default {
  name: 'app',
  components: {
    MyProfile
  }
}
</script>

<style>
#app {
  margin: auto;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.navbar-brand{
  font-weight: 900;
}



</style>
