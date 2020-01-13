import Vue from 'vue'
import App from './App'

// 注册组件 color Ui 相关
import basics from './pages/basics/home.vue'
Vue.component('basics', basics)
import components from './pages/component/home.vue'
Vue.component('components', components)
import plugin from './pages/plugin/home.vue'
Vue.component('plugin', plugin)

// 注册组件 自定义 navigation : colorUi自带
import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom', cuCustom)

// 注册组件 自定义 navigation : 胶囊模式
import navCustom from './components/struggler-navigationCustom/navigation-custom.vue'
Vue.component('nav-custom', navCustom)





// 添加全局 store 属性
import store from './store'
Vue.prototype.$store = store
// 添加全局 backgroundAudio 属性
Vue.prototype.$backgroundAudioData = {
	playing: false,
	playTime: 0,
	formatedPlayTime: '00:00:00'
}

Vue.config.productionTip = false

App.mpType = 'app'
const app = new Vue({
	store,
	...App
})
app.$mount()
