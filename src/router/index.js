import Vue from 'vue'
import VueRouter from 'vue-router'

// 懒加载
const Home = () =>
    import ('../views/home/Home')

const Recommend = () =>
    import ('../views/home/childComps/Recommend')
const Ranking = () =>
    import ('../views/home/childComps/Ranking')

const Category = () =>
    import ('../views/category/Category')
const Bookshelf = () =>
    import ('../views/bookshelf/Bookshelf')
const Profile = () =>
    import ('../views/profile/Profile')

// 1.安装插件
Vue.use(VueRouter)

// 2.创建router对象
const routes = [{
        path: '',
        //redirect重定向
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/recommend',
        component: Recommend
    },
    {
        path: '/ranking',
        component: Ranking
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: '/bookshelf',
        component: Bookshelf
    },
    {
        path: '/profile',
        component: Profile
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

// 3.导出 将router对象传到vue实例(挂载到main.js)
export default router