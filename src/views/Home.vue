<template>
  <div>
    <printTitle msg="My profile" @onFlag="profFlag=!profFlag"/>
    <div v-if="profFlag" class="md-layout md-gutter md-alignment-center">
      <md-content>
        <md-avatar class="md-large" style="margin-top:50px;"><img src="../assets/sotaro.png" ></md-avatar>
        <md-tabs md-sync-route md-alignment="centered" style="margin-top: 30px;">
          <md-tab id="tab-aboutme" md-label="About me"><AboutMe /></md-tab>
          <md-tab id="tab-skills" md-label="Skills"><Skills /></md-tab>
        </md-tabs>
        <aboutme/>

      </md-content>
    </div>
    <printTitle msg="More" @onFlag="moreFlag=!moreFlag"/>
    <div v-if="moreFlag" class="md-layout md-gutter md-alignment-center">
        <md-card v-for="item in work" v-bind:key="item.title" style="margin: 50px 20px 20px 20px;width:30%">
          <md-card-header>
            <div class="md-title">{{item.title}}</div>
          </md-card-header>
          <md-card-content>
            {{item.text}}
          </md-card-content>
          <md-button v-on:click="goRoute(item.link)">more...</md-button>
        </md-card>
    </div>
  </div>
</template>

<script>
import AboutMe from '@/components/AboutMe.vue'
import Skills from '@/components/Skills.vue'
import printTitle from "@/components/printTitle"

export default {
  name: 'Home',
  components:{
    AboutMe, Skills, printTitle
  },
  data() {
    return {
      profFlag: false,
      moreFlag: false,
      work:[
        {
          title: "CV",
          text: "My Curriculum Vitae．",
          link: "/work"
        },
        {
          title: "hackathon",
          text: "hackathon at Fukuoka.",
          link: "/hack"
        },
        {
          title: "SNS",
          text: "My SNS list.",
          link: "/sns"
        }
      ]    
    }
  },
  methods: {
    goRoute: function(route){
      this.$router.push({path: route})
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
  font-size: 2rem;
  margin: 0 10px;
}
a {
  color: #4c83c7;
}
.md-card{
  margin-top: 40px;
}
.md-layout-item {
    height: 40px;
    margin-top: 8px;
    margin-bottom: 8px;
}
.md-layout-item::after {
      width: 100%;
      height: 100%;
      display: block;
      background: md-get-palette-color(purple, 200);
      content: " ";
}
</style>
