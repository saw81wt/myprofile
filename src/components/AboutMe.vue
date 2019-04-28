<template>

  <div>
    <md-avatar class="md-large" style="margin-top:50px;"><img src="../assets/sotaro.png" ></md-avatar>
    <md-table style="margin: 1rem 1rem">
      <md-table-row v-for="item in profiles" v-bind:key="item.key">
        <md-table-cell>{{item.key}}</md-table-cell>
        <md-table-cell>{{item.val}}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'aboutme',
  data() {
    return {
      profiles :[
        {key: "Name", val: "Sotaro Maehara"},
        {key: "Age", val: "25"},
        {key:"Place of Birth", val: "Kagoshima"},
        {key:"Like", val: "e-sports watching"}
      ],
    }
  },
  methods: {
    hoge: function() {
      this.color = "#0000FF"
    }
  }
}
</script>

