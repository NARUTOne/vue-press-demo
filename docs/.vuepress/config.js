/**
 * vue-press config
 */
module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around demo',
  repo: 'NARUTOne/vuepress',
  editLinks: true,
  docsDir: 'docs',
  editLinkText: '帮助我们改善此页面！',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    nav: [
      {text: '首页', link: '/'},
      {text: '指南', link: '/guide/'},
      {
        text: '组件',
        items: [
          {text: 'Pbreadcrump', link: '/components/Pbreadcrump/'}
        ]
      },
      {text: '参考', link: '/refer/'}
    ],
    // sidebar: [
    //   '/components/Pbreadcrump/'
    // ]
    sidebar: 'auto',
    lastUpdated: 'Last Updated'
  }
}