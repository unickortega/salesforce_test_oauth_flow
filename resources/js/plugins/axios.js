import axios from 'axios'
import store from '~/store'
import router from '~/router'
import swal from 'sweetalert2'

// Request interceptor
axios.interceptors.request.use(request => {
    console.log(store.getters)
  const token = store.getters['token']
  if (token) {
    request.headers.common['Authorization'] = `Bearer ${token}`
  }

  const locale = store.getters['lang/locale']
  if (locale) {
    request.headers.common['Accept-Language'] = locale
  }

  return request
})

// Response interceptor
axios.interceptors.response.use(response => response, error => {
  const { status } = error.response

  if (status >= 500) {
    swal({
      type: 'error',
      title: i18n.t('error_alert_title'),
      text: i18n.t('error_alert_text'),
      reverseButtons: true,
      confirmButtonText: i18n.t('ok'),
      cancelButtonText: i18n.t('cancel')
    })
  }

  if (status === 401 && store.getters['auth/check'] && jQuery('.swal2-container').length == 0) {
    swal({
      type: 'warning',
      title: i18n.t('token_expired_alert_title'),
      text: i18n.t('token_expired_alert_text'),
      reverseButtons: true,
      confirmButtonText: i18n.t('ok'),
      cancelButtonText: i18n.t('cancel')
    }).then(() => {
      store.commit('auth/LOGOUT')
      store.commit('auth/SAVE_EXPIRED_URL',{ url: location.pathname })
      router.push({ name: 'login' })
      jQuery('.modal-backdrop').remove();
    })
  }

  return Promise.reject(error)
})
