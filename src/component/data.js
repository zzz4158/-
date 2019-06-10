import logo from '../asset/logo.png'


export const  dataSource = {
  wrapper: { className: 'header1 home-page-wrapper jwhlt2t26y9z-editor_css' },
  page: { className: 'home-page' },
  logo: {
    className: 'header1-logo',
    children: logo,
  },
  Menu: {
    className: 'header1-menu',
    children: [
      { name: 'item0', a: { children: '首页', href: '/' } },
      { name: 'item1', a: { children: '动漫', href: '/dongman' } },
      { name: 'item2', a: { children: '音乐', href: '/music' } },
      // { name: 'item3', a: { children: '导航四', href: '' } },
    ],
  },
  mobileMenu: { className: 'header1-mobile-menu' },
  user: {},
};