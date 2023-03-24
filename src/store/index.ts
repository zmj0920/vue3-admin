import type { App } from 'vue';
import { createPinia } from 'pinia';
// 创建一个 pinia（根存储）
const store = createPinia();

export function setupStore(app: App<Element>) {
  // 注册到应用程序
  app.use(store);
}
// 单独将pinia 实例导出
export { store };
