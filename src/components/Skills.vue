<template>
  <md-table style="margin: 1rem 1rem">
    <md-table-row v-for="item in language" v-bind:key="item.key">
      <md-table-cell>{{item.key}}</md-table-cell>
      <md-table-cell>{{item.val}}</md-table-cell>
    </md-table-row>
  </md-table>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'skills',
  data() {
    return {
      flag: true,
      language: [
        {key: "Python", val: "3 years"},
        {key: "Go", val: "1 year"},
        {key: "JavaScript", val: "1 year"},        
      ],
    }
  }
}
</script>