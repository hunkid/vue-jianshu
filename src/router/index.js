import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import ArticleList from '@/components/ArticleList'
import Bonus from '@/components/Bonus'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Special from '@/components/Special'
import SpecialList from '@/components/SpecialList'
import Download from '@/components/Download'
import Article from '@/components/Article'
import writeArticle from '@/components/WriteArticle'

Vue.use(Router)

export default new Router({
  routes: [{
  //   path: '/',
  //   name: 'Hello',
  //   component: Hello
  // },
  // {
    path: '/home',
    component: Home,
    children: [{
      path: 'article/:type',
      component: ArticleList
    }]
  }, {
    path: '/topic',
    component: Special,
    children: [{
      path: 'topic_article/:type',
      component: SpecialList
    }]
  }, {
    path: '/article/:id',
    component: Article
  }, {
    path: '/bonus',
    component: Bonus
  }, {
    path: '/login',
    component: Login
  }, {
    path: '/download',
    component: Download
  }, {
    path: '/write',
    component: writeArticle
  }
  //   path: '/*',
  //   redirect: '/home/article/hot'
  // }
  ]
})
