import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/views/test'
import Test1 from '@/views/test1'



Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/test',
            name: 'test',
            component: Test
        },
        {
            path: '/test1',
            name: 'test1',
            component: Test1
        },
    ]
})