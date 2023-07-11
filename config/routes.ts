export default [
  { path: '/user', name: "登录", layout: false, routes: [{ path: '/user/login', component: './User/Login' }] },
  { path: '/welcome', name:"欢迎页", icon: 'smile', component: './Welcome' },
  { path: '/bi', name:"分析页", icon: 'BarChartOutlined', component: './Bi' },
  {
    path: '/admin',
    name: '管理页',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      { path: '/admin/table', name: "用户-图表", icon: "BarChartOutlined", component: './Table' },
    ],
  },
  { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
