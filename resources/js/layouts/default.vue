<template>
  <div class="basic-layout">
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

<style lang="scss" scoped>
.basic-layout {
  min-height: 100vh;
  position: relative;
  background: white;
}
</style>
