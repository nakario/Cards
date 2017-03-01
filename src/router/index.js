import Vue from 'vue';
import Router from 'vue-router';
import Hello from 'components/Hello';
import File from 'components/File';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/files/:id',
      component: File,
    },
  ],
});
