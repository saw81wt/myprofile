<template>
  <md-table style="margin: 1rem 1rem">
    <md-table-row v-for="item in profiles" v-bind:key="item.key">
      <md-table-cell>{{item.key}}</md-table-cell>
      <md-table-cell>{{item.val}}</md-table-cell>
    </md-table-row>
    <md-table-row>
      <md-table-cell>Work</md-table-cell>
      <md-table-cell><a href="https://geniee.co.jp">Geniee, Inc</a></md-table-cell>
    </md-table-row>
  </md-table>
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

