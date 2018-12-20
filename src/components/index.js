import Vue from 'vue'

import Loading from './Loading'

[
  Loading
].forEach(Component => {
  Vue.component(Component.name, Component)
})

// mixins
Vue.mixin({
  data: () => ({
    public_path: location.origin
  })
})