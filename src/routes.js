import React from 'react'

// then our route config
const routes = [
  { path: '/sandwiches',
    component: require('./containers/Home/Home')
  },
  { path: '/tacos',
    component: require('./containers/Home/Home'),
    routes: [
      { path: '/tacos/bus',
        component: require('./containers/Home/Home')
      },
      { path: '/tacos/cart',
        component: require('./containers/Home/Home')
      }
    ]
  }
]

export default routes;