import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import LastArticles from './components/LastArticles.vue';
import Blog from './components/Blog.vue';
import Page from './components/Page.vue';
import Form from './components/Form.vue';
import Movies from './components/Movies.vue';
Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: '/blog', component: Blog },
  { path: '/last-articles', component: LastArticles },
  { path: '/page/:id?', name: 'page', component: Page },
  { path: '/movies', name: 'movies', component: Movies },
  { path: '/form', component: Form },
  { path: '/', component: Page }, // TODO: ADD COMPONENETS FOR DEFAULT AND ERROR ROUTES
  { path: '*', component: Blog }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
