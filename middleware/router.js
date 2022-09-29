export default ({ app, route, from, store, redirect }) => {
  app.router.beforeEach((to, from, next) => {
    const userId = window.localStorage.getItem('userId')
    if (userId == null && to.path !== '/signin') {
      store.dispatch('_logoutsession')
      next()
    } else {
      next()
    }
  })
  app.router.afterEach((to, from) => {
  })
}
