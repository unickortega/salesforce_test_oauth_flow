import Top from '@/views/Top'
import TimeManagement from '@/views/TimeManagement'
import ProjectManagement from '@/views/ProjectManagement'

export default [
  {
    path: '/',
    redirect: { name: 'top' }
  },
  {
    path: '/top',
    name: 'top',
    component: Top
  },
  {
    path: '/time_management',
    name: 'time.management',
    component: TimeManagement
  },
  {
    path: '/project_management',
    name: 'project.management',
    component: ProjectManagement
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/auth/Login.vue')
  },
]