export default [
  { path: '/user', name: "登录", layout: false, routes: [{ path: '/user/login', component: './User/Login' }] },
  { path: '/welcome', name:"欢迎页", icon: 'smile', component: './Welcome' },
  {
    path: '/admin',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      { path: '/admin', name: "Admin", redirect: '/admin/sub-page' },
      { path: '/admin/sub-page', name: "Admin-SubPage", component: './Admin' },
    ],
  },
  { icon: 'table', name: "表单页", path: '/list', component: './TableList' },
  { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
