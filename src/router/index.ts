import { RoutePath, RoutePathToNameMap } from '@/enums/route';
import { client } from '@/services/baseRequest';
import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';
import { useUserStore } from '@/store';

const routes: Array<RouteRecordRaw> = [
  {
    path: RoutePath.INDEX,
    name: RoutePathToNameMap.get(RoutePath.INDEX),
    component: () => import('@/pages/404/index.vue')
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  next()
});

export default router;