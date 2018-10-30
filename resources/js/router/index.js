import Vue from 'vue'
import routes from './routes'
import Router from 'vue-router'

Vue.use(Router)

const router = createRouter()

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

    return router
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