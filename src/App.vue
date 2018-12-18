<template>
  <div id="app">
++++++++++++++++++++++++
    <loading ref="loading"/>
    <transition name="page" mode="out-in">
      <component v-if="layout" :is="layout"/>
    </transition>
++++++++++++++++++++++++
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view />
++++++++++++++++++++++++
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Loading from '@/components/Loading'

// Load layout components dynamically.
const requireContext = require.context('@/layouts', false, /.*\.vue$/)

const layouts = requireContext.keys()
  .map(file =>
    [file.replace(/(^.\/)|(\.vue$)/g, ''), requireContext(file)]
  )
  .reduce((components, [name, component]) => {
    components[name] = component.default || component
    return components
  }, {})

export default{
  el: '#app',
  components: {
    Loading
  },
  data: () => ({
    layout: null,
    defaultLayout: 'default'
  }),
  methods: {
    /**
     * Set the application layout.
     *
     * @param {String} layout
     */
    setLayout (layout) {
      if (!layout || !layouts[layout]) {
        layout = this.defaultLayout
      }

      this.layout = layouts[layout]
    }
  }
}
</script>

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
