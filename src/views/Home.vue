<template>
  <div class="md-layout md-alignment-center">

    <printTitle msg="Hello Sotaro's world" @onFlag="flag=!flag" :class="style"/>

    <div v-show="flag" :class="style">
    <printTitle msg="My profile" @onFlag="profFlag=!profFlag"/>
    <div v-if="profFlag">
      <transition appear>
        <AboutMe />
      </transition>
    </div>

    <printTitle msg="Skills" @onFlag="skillFlag=!skillFlag"/>
    <div v-if="skillFlag">
      <transition appear>
        <Skills />
      </transition>
    </div>

    <printTitle msg="CV" @onFlag="cvFlag=!cvFlag"/>
    <div v-if="cvFlag">
      <transition appear>
        <cv />
      </transition>
    </div>


    <printTitle msg="Links" @onFlag="snsFlag=!snsFlag"/>
    <div v-if="snsFlag">
      <transition appear>
        <sns />
      </transition>
    </div>
    </div>
  </div>
</template>

<script>
import AboutMe from '@/components/AboutMe.vue'
import Skills from '@/components/Skills.vue'
import printTitle from "@/components/printTitle"
import cv from "@/components/Cv"
import sns from "@/components/Sns"

export default {
  name: 'Home',
  components:{
    AboutMe, Skills, printTitle, cv, sns
  },
  data() {
    return {
      flag: false,
      profFlag: false,
      skillFlag: false,
      cvFlag: false,
      snsFlag: false,
      style: "md-layout-item md-size-60",
    }
  },
  methods: {
    goRoute: function(route){
      this.$router.push({path: route})
    },
    handleResize: function(){
      if (window.innerWidth >= 768){
        this.style =  "md-layout-item md-size-60"
      } else{
        this.style =  "md-layout-item md-size-95"
      }
    }
  },
  mounted: function () {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.handleResize)
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
  margin: 10px;
}

.md-layout-item::after {
      width: 100%;
      height: 100%;
      display: block;
      background: md-get-palette-color(purple, 200);
      content: " ";
}
</style>
