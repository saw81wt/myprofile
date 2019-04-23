<template>
  <div calss="myProfile">
    <div class="mx-auto" style="width:90%; margin-top: 20px">
      <div class="row">
        <div class="col-sm-5">
          <img class="d-flex align-items-center" src="../assets/sotaro.png" alt="Card image cap" style="width: 80%;">
        </div>
        <div class="col-sm-6">
          <ul class="nav-tabs">
            <li class="nav-item">
              <p class="nav-link" v-bind:class="{ active:flag}" v-on:click="isAboutme()">about me</p>
            </li>
            <li class="nav-item">
              <p class="nav-link" v-bind:class="{ active:!flag}" v-on:click="isLanguage()">language</p>
            </li>
          </ul>
          <div v-if="flag" style="margin-top: 30px">
            <ur>
              <li class="list-group-item" v-for="item in profiles" v-bind:key="item.key">{{item.key}}: {{item.val}}</li>
              <li class="list-group-item">Company: <a href="https://geniee.co.jp/">Geniee, inc</a></li>
            </ur>
          </div>
          <div v-else style="margin-top: 30px">
            <li class="list-group-item" v-for="item in language" v-bind:key="item.key">{{item.key}}: {{item.val}}</li>
          </div>
        </div>  
      </div>  
    </div>
  </div>
</template>

<script>


export default {
name: 'MyProfile',
  data() {
    return {
      flag: true,
      profiles :[
        {key: "Name", val: "Sotaro Maehara"},
        {key: "Age", val: "25"},
        {key:"Place of Birth", val: "Kagoshima"},
        {key:"Like", val: "e-sports"}
      ],
      language: [
        {key: "Python", val: "3 years"},
        {key: "Go", val: "1 year"},
        {key: "JavaScript", val: "1 year"},        
      ]
    }
  },
  methods: {
    isAboutme: function(){
      this.flag = true
    },
    isLanguage: function(){
      this.flag = false
    }
  }
}
</script>

<style>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  font-size: 24px;
  margin: 0 10px;
}
a {
  color: #4c83c7;
}
</style>
