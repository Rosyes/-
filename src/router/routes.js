export default [
    {
        path: '/home',
        component: () => import("@/pages/Home"),
    },
    {
        path: '/register',
        component: () => import("@/pages/Register"),
    },
    {
        path: '/login',
        component: () => import("@/pages/Login"),
    },
    {
        //页面刚打开重定向到首页
        path: '/',
        redirect: '/login'
    }
]