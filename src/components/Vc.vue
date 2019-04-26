<template>
  <div class="md-layout md-gutter md-alignment-center" style="margin-top: 50px;">
  <md-table style="margin: 1rem 1rem">
    <md-table-row v-for="item in language" v-bind:key="item.key">
      <md-table-cell>{{item.key}}</md-table-cell>
      <md-table-cell>{{item.val}}</md-table-cell>
    </md-table-row>
  </md-table>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'skills',
  data() {
    return {
      flag: true,
      language: [
        {key: "H19.4〜H22.3", val: "姶良市立帖佐中学校"},
        {key: "H22.4〜H25.3", val: "鹿児島情報高等学校情報システム科情報システムコース"},
        {key: "H25.4〜H29.3", val: "鹿児島大学工学部情報生体システム工学科"},
        {key: "H29.4〜H31.3", val: "鹿児島大学大学院理工学研究科"},
        {key: "H31.4〜", val: "株式会社ジーニー"},  
      ],
    }
  }
}
</script>