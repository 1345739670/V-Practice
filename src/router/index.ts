import { createRouter,  createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

import layout from "@/components/Layout.vue";

// const modules = import.meta.glob('./modules/**/*.ts');
import modules from './modules'
console.log('modules', modules)

const routeModuleList: RouteRecordRaw[] = [];

// Object.keys(modules).forEach((key) => {
//   const mod = (modules as Recordable)[key].default || {};
//   const modList = Array.isArray(mod) ? [...mod] : [mod];
//   routeModuleList.push(...modList);
// });

const routes = [
  {
    path: '/',
    component: layout
  },
  ...modules
]

console.log('routeModuleList', routeModuleList)
console.log('routes', routes)

export default createRouter({
  history: createWebHistory(),
  routes
})




