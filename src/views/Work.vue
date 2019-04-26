<template>
  <div>
    <printTitle msg="CV" @onFlag="cvFlag=!cvFlag"/>
    <Vc v-if="cvFlag"/>
  </div>
</template>

<script>
import Vc from '@/components/Vc.vue'
import printTitle from "@/components/printTitle"

export default {
  name: "vc",
  data (){
    return {
      cvFlag: false,
    }
  },
  components:{
    Vc,printTitle
  },

}
</script>

<style>

</style>
