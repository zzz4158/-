export default {
  singular: true,
  disableCSSModules: true,
  plugins: [
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      title:'动漫家',
      locale: {
        enable: true,
      },
    }],
  ],
  routes: [

    {
      path: '/account',
      component: '../layout/account',
      routes: [
        {
          path: '/helloworld',
          component: 'Helloworld'
        },
        {
          path: 'puzzlecards',
          component:'puzzlecards'
        },
        {
          path: '/account/dashboard',
          routes: [
            { path: '/account/dashboard/analysis', component: 'Dashboard/Analysis' },
            { path: '/account/dashboard/monitor', component: 'Dashboard/Monitor' },
            { path: '/account/dashboard/workplace', component: 'Dashboard/Workplace' }
          ]
        },
      ]
    },

    {
    path: '/',
    component: '../layout/basic',
    routes: [
      {
        path: '/',
      component: 'index',
      title: '动漫家——首页',
      },
      {
        path: '/dongman',
        routes: [
          {
            path: '/dongman',
            component: '../page/dongman/dongmanIndex',
            title:'动漫家——动漫区',
          },
          {
            path: '/dongman/:id',
            component: '../page/dongman/dongmanDetail',
            title:'动漫家——动漫区',
          },
          {
            path: '/dongman/:id/:player',
            component: '../page/dongman/dongmanPlayer',
            title:'动漫家——动漫区',
          },
        ]
      },
      {
        path: '/music',
        routes: [
          {
            path: '/music',
            component: '../page/music',
            title:'动漫家——音乐区',
          },
        ]
      },
      {
        path: '/sign',
        routes: [
          {
            path: '/sign',
            component: '../page/sign/SignIn',
            title:'登录',
          },
          {
            path: '/sign/up',
            component: '../page/sign/SignUp',
            title:'注册',
          }
        ]
      },

    ]

  },



  ],
}
