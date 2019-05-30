import Vue from 'vue'
import Router from 'vue-router'
import Parent from '@/components/Parent'
import NewParent from '@/components/newParent'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Parent',
            component: Parent
        },
        {
            path: '/newParent',
            name: 'NewParent',
            component: NewParent
        }
    ]
})