<template>
  <div class="md-layout md-gutter md-alignment-center">
    <md-card :class="style" v-for="item in sns" v-bind:key="item.title" style="margin: 3%">
      <md-card-header>
        <div class="md-title">
          <a v-bind:href="item.url">{{item.key}}</a>
        </div>
      </md-card-header>
      <md-card-content>
        {{item.text}}
      </md-card-content>
    </md-card>
  </div>
</template>

<script>

export default {
  data() {
    return {
      snsFlag: false,
      style: "md-layout-item md-size-40",
      sns: [
        {key: "Twitter", url:"https://twitter.com/saw_poke?lang=ja", text:"くだらないことだったり，くだらなくないことだったり呟いてます．でもやっぱりくだらないことの方が多いです．"}, 
        {key: "Github", url:"https://github.com/sawlow81wt", text:"たいした成果物はないです．見ないでください．絶対に見ないでください．"},
        {key: "instagram", url:"https://www.instagram.com/sotaro.8484/", text:"僕は陰キャなのであまり使うことはありません．たまに料理の写真あげます．"},
        {key: "Facebook", url:"https://www.facebook.com/profile.php?id=100004748167095", text:"ほぼ使っていません．"},
        {key: "atcoder", url:"https://atcoder.jp/users/sawlow", text:"最近始めました!!．とりあえず緑を目指したいです．"},
        {key: "kaggle", url:"https://www.kaggle.com/sawlow81wt", text: "最近始めました（part2）．一緒に勉強会とかしましょう！"}             
      ]
    }
  },
  methods: {
    handleResize: function(){
      if (window.innerWidth >= 768){
        this.style =  "md-layout-item md-size-40"
      } else{
        this.style =  "md-layout-item md-size-90"
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

</style>
