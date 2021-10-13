import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Category from "../views/Category.vue"
import Cart from "../views/Cart.vue"
import ContactUs from "../views/ContactUs.vue"
import About from "../views/About.vue"

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/Login',
        name: 'Login',
        component: Login
    },
    {
        path: '/Register',
        name: 'Register',
        component: Register
    }
    ,
    {
        path: '/cart',
        name: 'Cart',
        component: Cart
    }
    ,
    {
        path: '/:category',
        component: Category
    }
    ,
    {
        path: '/contactUs',
        component: ContactUs
    },
    {
        path: '/about',
        component: About
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router