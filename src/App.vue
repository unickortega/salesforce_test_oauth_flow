<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view />
  </div>
</template>

<style lang="scss">
  #prof_img {
    height: 50px;
    width: 50px;
  }

  body {
    background-color: #f8f9fa !important;
  }

  .card {
    border: none;
  }

  .card-header {
    background-color: #f8f9fa;
  }

  .card-body {
    border-right: 1px solid rgba(0, 0, 0, 0.125);
    border-left: 1px solid rgba(0, 0, 0, 0.125);
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  }
</style>

<script>
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
  import topPage from '../src/components/Top'
  import TimeManagement from '../src/components/TimeManagement'


  export default {
    components: {
      topPage,
      TimeManagement
    },
  }
</script>