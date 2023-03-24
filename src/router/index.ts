import type { RouteRecordRaw } from 'vue-router';
import type { App } from 'vue';

import { createRouter, createWebHashHistory } from 'vue-router';
import { basicRoutes } from './routes';

// 白名单应该包含基本静态路由
const WHITE_NAME_LIST: string[] = [];
const getRouteNames = (array: any[]) =>
  array.forEach((item) => {
    WHITE_NAME_LIST.push(item.name);
    getRouteNames(item.children || []);
  });
getRouteNames(basicRoutes);

// app router 创建路由实例
export const router = createRouter({
  // 基于 hash 的历史记录
  history: createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH),
  // 添加到路由的初始路由列表
  routes: basicRoutes as unknown as RouteRecordRaw[],
  strict: true,
  // 在页面之间导航时控制滚动的函数
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

// reset router 重置路由
export function resetRouter() {
  router.getRoutes().forEach((route) => {
    const { name } = route;
    if (name && !WHITE_NAME_LIST.includes(name as string)) {
      router.hasRoute(name) && router.removeRoute(name);
    }
  });
}

// 注册路由
export function setupRouter(app: App<Element>) {
  app.use(router);
}
