import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import Homepage from '@/components/Homepage'
import Product from '@/components/Product'
import Safety from '@/components/product/Safety'
import Monitor from '@/components/product/Monitor'
import Protection from '@/components/product/Protection'
import Network from '@/components/product/Network'
import Communicate from '@/components/product/Communicate'
import Other from '@/components/product/Other'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: Header,
      children:[
        {
          path: '/homepage',
          name: 'homepage',
          component: Homepage
        },
        {
          path: '/product',
          name: 'product',
          component: Product,
          children:[
            {
              path: '/safety',
              name: 'safety',
              component: Safety
            },
            {
              path: '/monitor',
              name: 'monitor',
              component: Monitor
            },
            {
              path: '/protection',
              name: 'protection',
              component: Protection
            },
            {
              path: '/network',
              name: 'network',
              component: Network
            },
            {
              path: '/communicate',
              name: 'communicate',
              component: Communicate
            },
            {
              path: '/other',
              name: 'other',
              component: Other
            }
          ]
        }
      ]
    }
  ]
})
