<template>
  <div style="margin: 50px 10px 5px 5px;">
      <div v-if="flag">
        <font-awesome-icon v-on:click="execPrint" style="float: right; margin-bottom:10px" icon="times"/>
        <transition appear>
          <div style="width:90%">
            <span class="md-display-1">{{msg}}</span>
          </div>
        </transition>
      </div>
      <div v-else style="width:90%;margin:auto">
        <div class="md-layout-item">
          <md-field>
            <md-select v-model="lang" name="movie" id="movie">
              <md-option value="print">python</md-option>
              <md-option value="fmt.Println">Go</md-option>
              <md-option value="console.log">javaScript</md-option>
            </md-select>
          </md-field>
        </div>
        <div  class="md-layout" style="border: solid;">
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
