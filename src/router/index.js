import Vue from 'vue'
import Router from 'vue-router'

// Import views router
import Overviews from '../views/Overviews' 
import ModelList from '../views/ModelList' 

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
      }
    ]
})