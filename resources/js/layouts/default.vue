<template>
  <div>
    <navigation/>
    <transition name="page" mode="out-in">
      <div class="container">
        <router-view></router-view>
      </div>
    </transition>
  </div>
</template>

<script>
import navigation from './components/navigation'
export default {
  name: 'DefaultLayout',
  components: {
    navigation
  }
}
</script>

<style lang="scss">
.basic-layout {
  color: #636b6f;
  height: 100vh;
  font-weight: 100;
  position: relative;

  .links > a {
    color: #636b6f;
    padding: 0 25px;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: .1rem;
    text-decoration: none;
    text-transform: uppercase;
  }
}
</style>
