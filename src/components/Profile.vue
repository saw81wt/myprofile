<template>
  <div class="md-layout md-gutter md-alignment-center" style="margin-top: 50px;">
    <md-content>
      <md-avatar class="md-large"><img src="../assets/sotaro.png" v-on:click="toFoo"></md-avatar>
      <md-tabs md-alignment="centered" style="margin: 30px 10px;">
        <md-tab md-label="About me">
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
        </md-tab>
        <md-tab md-label="Language">
          <md-table style="margin: 1rem 1rem">
            <md-table-row v-for="item in language" v-bind:key="item.key">
              <md-table-cell>{{item.key}}</md-table-cell>
              <md-table-cell>{{item.val}}</md-table-cell>
            </md-table-row>
          </md-table>
        </md-tab>        
        <md-tab md-label="SNS">
          <md-table style="margin: 1rem 1rem">
            <md-table-row v-for="item in sns" v-bind:key="item.key">
              <md-table-cell><a v-bind:href="item.url">{{item.key}}</a></md-table-cell>
            </md-table-row>
          </md-table>
        </md-tab>
      </md-tabs>
    </md-content>
  </div>
</template>

<script>


export default {
name: 'MyProfile',
  data() {
    return {
      flag: true,
      profiles :[
        {key: "Name", val: "Sotaro Maehara"},
        {key: "Age", val: "25"},
        {key:"Place of Birth", val: "Kagoshima"},
        {key:"Like", val: "e-sports"}
      ],
      language: [
        {key: "Python", val: "3 years"},
        {key: "Go", val: "1 year"},
        {key: "JavaScript", val: "1 year"},        
      ],
      sns: [
        {key: "Twitter", url:"https://twitter.com/saw_poke?lang=ja"},
        {key: "Github", url:"https://github.com/sawlow81wt"},
        {key: "Facebook", url:"https://www.facebook.com/profile.php?id=100004748167095"}                
      ]
    }
  },
  methods: {
    isAboutme: function(){
      this.flag = true
    },
    isLanguage: function(){
      this.flag = false
    },
    toFoo: function(){
      this.$router.push("/foo")
    }
  }
}
</script>

<style>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  font-size: 2rem;
  margin: 0 10px;
}
a {
  color: #4c83c7;
}

.md-layout-item {
    height: 40px;
    margin-top: 8px;
    margin-bottom: 8px;
}
.md-layout-item::after {
      width: 100%;
      height: 100%;
      display: block;
      background: md-get-palette-color(purple, 200);
      content: " ";
}
</style>
