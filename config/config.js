export default {
  singular: true,
  disableCSSModules: true,
  plugins: [
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      locale: {
        enable: true,
      },
    }],
  ],
  routes: [{
    path: '/',
    component: 'index',
  },
  {
    path: '/',
    component: '../layout/account',
    routes: [
      {
        path: 'list',
        component:'../page/list'
      },
      {
        path: '/helloworld',
        component: 'Helloworld'
      },
      {
        path: 'puzzlecards',
        component:'./puzzlecards'
      },
      {
        path: '/dashboard',
        routes: [
          { path: '/dashboard/analysis', component: 'Dashboard/Analysis' },
          { path: '/dashboard/monitor', component: 'Dashboard/Monitor' },
          { path: '/dashboard/workplace', component: 'Dashboard/Workplace' }
        ]
      },
    ]
  },
  ],
}
