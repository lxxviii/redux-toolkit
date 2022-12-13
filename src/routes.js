import Home from './views/Home'
import Profile from './views/Profile'
import About from './views/About'
import Login from './views/Login'

export const routes = [
    {
        path: '/',
        exact: true,
        component: Home,
        auth: false
    },
    {
        path: '/profile',
        exact: true,
        component: Profile,
        auth: true
    },
    {
        path: '/about',
        exact: true,
        component: About,
        auth: false
    },
    {
        path: '/login',
        exact: true,
        component: Login,
        auth: false
    }
]