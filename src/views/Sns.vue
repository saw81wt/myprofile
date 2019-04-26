<template>
  <div>
    <printTitle msg="SNS" @onFlag="snsFlag=!snsFlag"/>
    <div v-if="snsFlag" class="md-layout md-gutter md-alignment-center">
      <md-card v-for="item in sns" v-bind:key="item.title" style="margin: 50px 20px 20px 20px;width: 30%;">
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
  </div>
</template>

<script>
import printTitle from "@/components/printTitle"

export default {
  components: {
    printTitle
  },
  data() {
    return {
      snsFlag: false,
      sns: [
        {key: "Twitter", url:"https://twitter.com/saw_poke?lang=ja", text:"くだらないこと呟いてます．"}, 
        {key: "Github", url:"https://github.com/sawlow81wt", text:"たいした成果物はないです．見ないでください．"},
        {key: "instagram", url:"https://www.instagram.com/sotaro.8484/", text:"僕は陰キャなのであまり使うことはありません．たまに料理の写真あげます．"},
        {key: "Facebook", url:"https://www.facebook.com/profile.php?id=100004748167095", text:"ほぼ使っていません．たまに名刺代わりに使ってました．"},
        {key: "atcoder", url:"https://atcoder.jp/users/sawlow", text:"最近始めました!!．とりあえず緑を目指したいです．"},
        {key: "kaggle", url:"https://www.kaggle.com/sawlow81wt", text: "最近始めました（part2）．一緒に勉強会とかしましょう！"}             
      ]
    }
  }
}
</script>

<style>

</style>
