import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

// 挂载到原型上，全局可以访问
import axios from 'axios'

//在任意组件中使用，$axios调用axios
//将axios绑定在Vue原型上，这样在其他页面使用axios请求数据就不用引入了，直接使用即可
Vue.prototype.$axios = axios;

// 配置你的请求路径
axios.prototype.baseURL = 'http://localhost:8080/api'

Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router //挂载路由
}).$mount('#app')

// axios({
//     url: 'http://lunbo.wgfgr.cn/node/info?nodeAlias=rankinglist-male-hot-total '
// }).then(res => {
//     console.log(res);

// })