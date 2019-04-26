<template>
  <div class="md-layout md-gutter md-alignment-center" style="margin-top: 50px;">
    <md-content>
      <div v-if="flag">

      <transition appear>
        <span class="md-display-2">{{msg}}</span>
      </transition>
      <font-awesome-icon v-on:click="execPrint" style="margin-left: 10px;margin-bottom: 30px;" icon="times"/>
      </div>
      <div v-else>
        <div class="md-layout-item">
          <md-field>
            <md-select v-model="lang" name="movie" id="movie">
              <md-option value="print">python</md-option>
              <md-option value="fmt.Println">Go</md-option>
              <md-option value="console.log">javaScript</md-option>
            </md-select>
          </md-field>
        </div>
        <div  class="md-layout" style="border: solid;width:100%;">
          <div class="md-layout-item">
            <p style="text-align: left; margin:0.5em 0 0 1rem;">
            > <span class="bule-color">{{lang}}</span>
            (
            <span class="orange-color">"{{msg}}"</span>
            ) 
            </p>
          </div>
          <div class="md-layout-item md-size-15">
            <p style="text-align: right; margin:0.5em 1rem 0 0;">
            <font-awesome-icon v-on:click="execPrint" icon="play"/>
            </p>
          </div>
        </div>
      </div>
    </md-content>
  </div>
</template>

<script>

export default {
  props:[
    'msg'
  ],
  data() {
    return {
      flag: false,
      lang: "print",
      print: "print"
    }
  },
  methods: {
    execPrint: function() {
      this.flag = !this.flag
      this.$emit('onFlag')
    }
  },
}
</script>

<style>
.md-list{
  background-color: white;
}
.v-enter-active {
  transition: all .8s ease;
}


.v-enter, .v-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
.bule-color{
  color: blue;
}
.orange-color{
  color: rgba(208, 71, 17, 0.692);
}

</style>
