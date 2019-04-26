<template>
  <div>
    <printTitle msg="Hackathon" @onFlag="hackFlag=!hackFlag"/>
    <div v-if="hackFlag" class="md-layout md-gutter md-alignment-center">
      <transition appear>
        <md-card style="width:60%;">
          <md-card-header>
              <div class="md-title">SPAJAM2018 福岡予選</div>
          </md-card-header>
          <img src="../assets/Hackathon.jpg"/>
          <md-card-content>
            2018年5月にSPAJAM2018の福岡予選に参加して優秀賞をいただきました．ジーニーの最終面接の3日ほど前の出来事です．
            モバイルのアプリのハッカソンでしたが，Vueでbuildした成果物をcordovaでモバイルアプリに変換するとかいうよくわからないことをしていました．
          </md-card-content>
        </md-card>
      </transition>
    </div>
  </div>
</template>

<script>
import printTitle from "@/components/printTitle"
export default {
  data () {
    return {
      hackFlag: false
    }
  },
  components:{
    printTitle
  },
}
</script>

<style>

</style>
