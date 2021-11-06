import Add from "./components/book/Add";

const CategoryList = () => import('./components/category/List.vue' /* webpackChunkName: "resource/js/components/category/list" */)
const CategoryCreate = () => import('./components/category/Add.vue' /* webpackChunkName: "resource/js/components/category/add" */)
const CategoryEdit = () => import('./components/category/Edit.vue' /* webpackChunkName: "resource/js/components/category/edit" */)
const BookEdit = () => import('./components/book/Edit.vue' /* webpackChunkName: "resource/js/components/book/edit" */)
const BookCreate = () => import('./components/book/Add.vue' /* webpackChunkName: "resource/js/components/book/add" */)
const BookInfo = () => import('./components/book/Info.vue' /* webpackChunkName: "resource/js/components/book/info" */)

export const routes = [
    {
        name: 'categoryList',
        path: '/',
        component: CategoryList
    },
    {
        name: 'categoryEdit',
        path: '/category/:id/edit',
        component: CategoryEdit
    },
    {
        name: 'categoryAdd',
        path: '/category/add',
        component: CategoryCreate
    },
    {
        name: 'bookAdd',
        path: '/book/add',
        component: BookCreate
    },
    {
        name: 'bookEdit',
        path: '/book/:id/edit',
        component: BookEdit
    },
    {
        name: 'bookInfo',
        path: '/book/:id/info',
        component: BookInfo
    }
]
