import Vue from 'vue'
import Router from 'vue-router'

// Import views router
import Overviews from '../views/Overviews'
import ModelList from '../views/ModelList'
import PageNotFound from '../views/PageNotFound'

Vue.use(Router)

export default new Router({
    routes: [ 
      {
        path: '/',
        name: 'Overviews',
        component: Overviews
      },
      {
        path: '/model',
        name: 'ModelList',
        component: ModelList
      },
      {
        path : '/:catchAll(.*)',
        name : 'PageNotFound',
        component : PageNotFound
      },
    ]
})