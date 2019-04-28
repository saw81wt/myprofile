<template>
  <div id="app" style="margin-top:50px">
      <!-- <font-awesome-icon v-if="flag" v-on:click="goHome" icon="home"/> -->
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/skills">Skills</router-link> | 
    <router-link to="/sns">SNS</router-link> -->
    <Home />
  </div>
</template>


<script>
import Home from '@/views/Home'

export default {
  components:{
    Home
  },
  methods: {
    goHome: function(){
      this.$router.push({path: "/"})
    }
  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
