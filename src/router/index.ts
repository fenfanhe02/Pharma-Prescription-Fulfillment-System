import { RoutePath, RoutePathToNameMap } from '@/enums/route';
import { client } from '@/services/baseRequest';
import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';
import { useUserStore } from '@/store';

const routes: Array<RouteRecordRaw> = [
  {
    path: RoutePath.INDEX,
    name: RoutePathToNameMap.get(RoutePath.INDEX),
    component: () => import('@/pages/Main/index.vue'),
    children: [
      {
        path: RoutePath.DRUGS,
        name: RoutePathToNameMap.get(RoutePath.DRUGS),
        component: () => import('@/pages/Drugs/index.vue'),
      },
      {
        path: RoutePath.PHARMACIES,
        name: RoutePathToNameMap.get(RoutePath.PHARMACIES),
        component: () => import('@/pages/Pharmacies/index.vue'),
      },
      {
        path: RoutePath.PRESCRIPTIONS,
        name: RoutePathToNameMap.get(RoutePath.PRESCRIPTIONS),
        component: () => import('@/pages/Prescriptions/index.vue'),
      },
      {
        path: RoutePath.LOGS,
        name: RoutePathToNameMap.get(RoutePath.LOGS),
        component: () => import('@/pages/Logs/index.vue'),
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/pages/404/index.vue'),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path === '/') {
    next({ path: RoutePath.DRUGS });
  }
  next();
});

export default router;