import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Vuelidate from 'vuelidate';
import LastArticles from './components/LastArticles.vue';
import MyComponent from './components/MyComponent.vue';
import Blog from './components/Blog.vue';
import Page from './components/Page.vue';
import Form from './components/Form.vue';
Vue.config.productionTip = false;
Vue.use(VueRouter);
const routes = [
  { path: '/blog', component: Blog },
  { path: '/last-articles', component: LastArticles },
  { path: '/page/:id', name: 'page', component: Page },
  { path: '/form', component: Form },
  { path: '/', component: MyComponent }
];
const router = new VueRouter({
  routes,
  mode: 'history'
});
new Vue({
  router,
  Vuelidate,
  render: h => h(App)
}).$mount('#app');
// # sourceMappingURL=main.js.map
