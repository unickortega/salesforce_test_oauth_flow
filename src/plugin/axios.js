import axios from 'axios'
import store from '../store'

axios.interceptors.request.use(request => {
  const access_token = store.getters['auth/access_token']

  if(access_token){
    request.headers.common['Authorization'] = `Bearer ${access_token}`
  }
})