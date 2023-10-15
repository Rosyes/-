// createRouter：创建router实例对象
// createWebHistory：创建history模式的路由

import { createRouter, createWebHistory } from 'vue-router'
import routes from "./routes"

const router = createRouter({
    history: createWebHistory(),// 内部提供了 history 模式的实现。

    routes, // `routes: routes` 的缩写

    // 路由滚动行为定制
    scrollBehavior() {
        return {
            top: 0
        }
    }
})





export default router