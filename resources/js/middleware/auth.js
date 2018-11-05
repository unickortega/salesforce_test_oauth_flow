import store from '~/store'

export default async (to, from, next) => {
  console.log(store.getters['user'])
  if (!store.getters['user']) {
    next({ name: 'login' })
  } else {
    next()
  }
}
