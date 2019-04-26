<template>
  <div id="app">
    <div id="nav">
      <printTitle msg="Hello Sotaro's world" @onFlag="flag=!flag"/>
      <font-awesome-icon v-if="flag" v-on:click="goHome" icon="home"/>
    </div>
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/skills">Skills</router-link> | 
    <router-link to="/sns">SNS</router-link> -->
    <router-view v-if="flag"/>
  </div>
</template>


<script>
import printTitle from "@/components/printTitle"

export default {
  data(){
    return {
      flag: false,
    }
  },
  components: {
    printTitle
  },
  methods: {
    goHome: function(){
      this.$router.push({path: "/"})
    }
  }
}
</script>

<style>
.md-layout-item{
  width: 15em;
  height: 2em;
}
.md-layout-item::after{
  height: 0px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
