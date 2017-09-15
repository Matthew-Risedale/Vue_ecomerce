
module.exports = {
  build: {

  },
  router: {
    routes: [
   {
     name: 'Home',
     path: '',
     component: '~/pages/index.vue'
   }
 ],
    // extendRoutes (routes, replace) {
    //   routes.push({
    //     name: 'index',
    //     path: replace({ path: '/', redirect: '/home' }),
    //     component: 'pages/index.vue'
    //   })

    // }
  }
}
