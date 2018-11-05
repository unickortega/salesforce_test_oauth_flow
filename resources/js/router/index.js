import Vue from 'vue'
import routes from './routes'
import Router from 'vue-router'
import store from '~/store'
import { sync } from 'vuex-router-sync'

Vue.use(Router)

// The middleware for every page of the application.
const globalMiddleware = ['locale', 'check-auth']

// Load middleware modules dynamically.
const routeMiddleware = resolveMiddleware(
  require.context('~/middleware', false, /.*\.js$/)
)

const router = createRouter()

sync(store, router)

export default router


/**
 * Create Router instance
 * 
 * @return {Router}
 */
function createRouter(){
    const router = new Router({
        mode: 'history',
        routes: routes,
        scrollBehavior
    })

    router.beforeEach(beforeEach)

    return router
}

/**
 * Global router guard.
 *
 * @param {Route} to
 * @param {Route} from
 * @param {Function} next
 */
async function beforeEach(to, from, next){
    // Get the matched components and resolve them.
    const components = await resolveComponents(
        router.getMatchedComponents({ ...to })
    )
    
    // set application layout
    router.app.setLayout(components[0].layout || '')

    // Get the middleware for all the matched components.
    const middleware = getMiddleware(components)

    // Call each middleware.
    callMiddleware(middleware, to, from, async (...args) => {
        
        if (args.length === 0) {
        router.app.setLayout(components[0].layout || '')
        }

        next(...args)
    })
}

/**
 * Call each middleware.
 *
 * @param {Array} middleware
 * @param {Route} to
 * @param {Route} from
 * @param {Function} next
 */
function callMiddleware (middleware, to, from, next) {
    const stack = middleware.reverse()
  
    const _next = (...args) => {
      // Stop if "_next" was called with an argument or the stack is empty.
      if (args.length > 0 || stack.length === 0) {
        if (args.length > 0) {
        //   router.app.$loading.finish()
        }
  
        return next(...args)
      }
  
      const middleware = stack.pop()
  
      if (typeof middleware === 'function') {
        middleware(to, from, _next)
      } else if (routeMiddleware[middleware]) {
        routeMiddleware[middleware](to, from, _next)
      } else {
        throw Error(`Undefined middleware [${middleware}]`)
      }
    }
  
    _next()
  }

/**
 * Resolve async components.
 *
 * @param  {Array} components
 * @return {Array}
 */
function resolveComponents (components) {
    return Promise.all(components.map(component => {
        return typeof component === 'function' ? component() : component
    }))
}

/**
 * Merge the the global middleware with the components middleware.
 *
 * @param  {Array} components
 * @return {Array}
 */
function getMiddleware (components) {
    const middleware = [...globalMiddleware]
  
    components.filter(c => c.middleware).forEach(component => {
      if (Array.isArray(component.middleware)) {
        middleware.push(...component.middleware)
      } else {
        middleware.push(component.middleware)
      }
    })
  
    return middleware
  }

/**
 * Scroll Behavior
 * @param  {Route} to
 * @param  {Route} from
 * @param  {Object|undefined} savedPosition
 * @return {Object}
 */
function scrollBehavior(to, from, savedPosition) {
    if(savedPosition){
        return savedPosition
    }

    if(to.hash){
        return { selector: to.hash }
    }

    const [component] = router.getMatchedComponents({...to}).slice(-1)

    if (component && component.scrollToTop === false){
        return {}
    }

    return { x: 0, y: 0 }
}

/**
 * @param  {Object} requireContext
 * @return {Object}
 */
function resolveMiddleware (requireContext) {
    return requireContext.keys()
      .map(file =>
        [file.replace(/(^.\/)|(\.js$)/g, ''), requireContext(file)]
      )
      .reduce((guards, [name, guard]) => (
        { ...guards, [name]: guard.default }
      ), {})
  }