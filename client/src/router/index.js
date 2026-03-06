import { createRouter, createWebHistory } from 'vue-router'
import UserCreate from '../components/Users/CreateUser.vue'
import UserEdit from '../components/Users/EditUser.vue'
import UserShow from '../components/Users/ShowUser.vue'
import UserIndex from '../components/Users/Index.vue'
import Login from '../components/Login.vue'

import BlogIndex from '../components/Blogs/Index.vue'
import BlogCreate from '../components/Blogs/CreateBlog.vue'
import BlogEdit from '../components/Blogs/EditBlog.vue'
import BlogShow from '../components/Blogs/ShowBlog.vue'

import ProjectIndex from '../components/Projects/Index.vue'
import ProjectCreate from '../components/Projects/CreateProject.vue'
import ProjectEdit from '../components/Projects/EditProject.vue'
import ProjectShow from '../components/Projects/ShowProject.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/users',
      name: 'users',
      component: UserIndex
    },
    {
      path: '/user/create',
      name: 'users-create',
      component: UserCreate
    },
    {
      path: '/user/edit/:userId',
      name: 'user-edit',
      component: UserEdit
    },
    {
      path: '/user/:userId',
      name: 'user',
      component: UserShow
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: BlogIndex
    },
    {
      path: '/blog/create',
      name: 'blogs-create',
      component: BlogCreate
    },
    {
      path: '/blog/edit/:blogId',
      name: 'blog-edit',
      component: BlogEdit
    },
    {
      path: '/blog/:blogId',
      name: 'blog',
      component: BlogShow
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectIndex
    },
    {
      path: '/project/create',
      name: 'projects-create',
      component: ProjectCreate
    },
    {
      path: '/project/edit/:projectId',
      name: 'project-edit',
      component: ProjectEdit
    },
    {
      path: '/project/:projectId',
      name: 'project',
      component: ProjectShow
    },
  ]
})

export default router
