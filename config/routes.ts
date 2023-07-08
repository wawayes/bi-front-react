export default [
  { path: '/user', name: "登录", layout: false, routes: [{ path: '/user/login', component: './User/Login' }] },
  { path: '/welcome', name:"欢迎页", icon: 'smile', component: './Welcome' },
  { path: '/bi', name:"分析页", icon: 'smile', component: './Bi' },
  {
    path: '/admin',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      { path: '/admin', name: "Admin", redirect: '/admin/sub-page' },
      { path: '/admin/sub-page', name: "Admin-SubPage", component: './Admin' },
    ],
  },
  { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
