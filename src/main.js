import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import './global.scss'

import { Avatar, TreeSelect, Rate, Breadcrumb, InputNumber, Steps, Message, Upload, Button, Layout, Table, Icon, Progress, Radio, Dropdown, Menu, Carousel, Input, Calendar, Badge, Slider, Form, Tooltip, Select, Tag, Affix, Spin, Alert, Checkbox, Tabs, Pagination } from 'ant-design-vue'

Vue.use(Avatar)
Vue.use(Button)
Vue.use(Rate)
Vue.use(TreeSelect)
Vue.use(Breadcrumb)
Vue.use(Layout)
Vue.use(Table)
Vue.use(Icon)
Vue.use(Progress)
Vue.use(Radio)
Vue.use(Dropdown)
Vue.use(Menu)
Vue.use(Carousel)
Vue.use(Input)
Vue.use(Calendar)
Vue.use(Badge)
Vue.use(Slider)
Vue.use(Form)
Vue.use(Tooltip)
Vue.use(Select)
Vue.use(Tag)
Vue.use(Affix)
Vue.use(Spin)
Vue.use(Alert)
Vue.use(Checkbox)
Vue.use(Tabs)
Vue.use(Pagination)
Vue.use(Upload)
Vue.use(Message)
Vue.use(Steps)
Vue.use(InputNumber)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
