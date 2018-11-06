import Vue from 'vue'
import HasError from './HasError'
import { AlertError, AlertSuccess } from 'vform'

[
  AlertError,
  HasError,
  AlertSuccess,
].forEach(Component => {
  Vue.component(Component.name, Component)
})