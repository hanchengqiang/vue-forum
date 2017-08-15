const routers = [
  {
    path: '/',
    name: 'home',
    component: require('./components/home/home')
  },
  {
    path: '/list',
    name: 'list',
    component: require('./components/list/list')
  }
]

export default routers
