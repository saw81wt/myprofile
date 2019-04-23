<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light text-white bg-dark">
  <a class="navbar-brand" href="#">Sotaro's Profile</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">

    </ul>
  </div>
</nav>
    <my-profile />
    <div class="page-footer bg-dark" style="margin-top: 20px">
      <a class="twitter-icon" href="https://twitter.com/saw_poke?lang=ja">Twitter</a>
      <a class="github-icon" href="https://github.com/sawlow81wt">GitHub</a>
      <a class="facebook-icon" href="https://www.facebook.com/profile.php?id=100004748167095">Facebook</a>
    </div>
  </div>
  
</template>

<script>
import MyProfile from './components/MyProfile.vue'
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.navbar-brand{
  font-weight: 900;
}

.twitter-icon::before {
  color: #00aced;
  font-family: fontawesome;
  content: "\f099";
  margin-right: .5em;
  margin-left: 1.5em;
  display: inline-block;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.github-icon::before {
  color: #333;
  font-family: fontawesome;
  content: "\f09b";
  margin-right: .5em;
  margin-left: 1.5em;
  display: inline-block;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.facebook-icon::before {
  color: #305097;
  font-family: fontawesome;
  content: "\f082";
  margin-right: .5em;
  margin-left: 1.5em;
  display: inline-block;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon::before {
  display: inline-block;
  margin-right: .5em;
  font-family: fontawesome;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
