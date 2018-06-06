<template>
  <div id="app">
    <div id="nav">
      <navbar msg="Vue-Ts"/>      
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Navbar from '@/components/Navbar.vue'; // @ is an alias to /src

@Component({
  components: {
    Navbar,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "./assets/styles/custom-bootstrap.scss";
@import "../node_modules/bootstrap/scss/bootstrap.scss";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 56px;
}

</style>
