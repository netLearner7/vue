import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/views/layout'
import { constantRouterMap } from './defaultRouter'

Vue.use(Router)



export const routes = [
  {
    path: '/',
    redirect: '/dashboard',
    component: layout,
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard'),
        meta: {
          title: '首页',
          icon: 'dashboard'
        }
      }
    ]
  },
  {
    path: '/Manage',
    name: 'Manage',
    component: layout,
    meta: {
      title: '日常管理',
      icon: 'clipboard'
    },
    redirect: '/Manage/AssetsInto',
    children: [
      {
        path: 'AssetsInto',
        name: 'AssetsInto',
        component: () => import('@/views/Manage/AssetsInto'),
        meta: {
          title: '资产入库',
        }
      },
      {
        path: 'ModifyData',
        name: 'ModifyData',
        component: () => import('@/views/Manage/ModifyData'),
        meta: {
          title: '修改信息',
        }
      },
      {
        path: 'Declare',
        name: 'Declare',
        component: () => import('@/views/Manage/Declare'),
        meta: {
          title: '申报审批',
        }
      },
      {
        path: 'AssetsLinkage',
        name: 'AssetsLinkage',
        component: () => import('@/views/Manage/AssetsLinkage'),
        meta: {
          title: '挂钩与脱钩',
        }
      },
      {
        path: 'AssetsDeliver',
        name: 'AssetsDeliver',
        component: () => import('@/views/Manage/AssetsDeliver'),
        meta: {
          title: '资产调拨',
        }
      },
    ]
  },
  {
    path: '/Inventory',
    redirect: '/Inventory/FillNumber',
    component: layout,
    meta: {
      title: '统计分析',
      icon: 'chart'
    },
    children: [
      {
        path: 'AssetsInventory',
        name: 'AssetsInventory',
        component: () => import('@/views/Inventory/AssetsInventory'),
        meta: {
          title: '资产盘点'
        },
      },
      {
        path: 'AssetsAnalysis',
        name: 'AssetsAnalysis',
        component: () => import('@/views/Inventory/AssetsAnalysis'),
        meta: {
          title: '资产分析'
        },
      },

    ]
  },
  {
    path: '/Finance',
    redirect: '/Finance/FillNumber',
    component: layout,
    meta: {
      title: '财务',
      icon: 'money'
    },
    children: [
      {
        path: 'FillNumber',
        name: 'FillNumber',
        component: () => import('@/views/Finance/FillNumber'),
        meta: {
          title: '填写资产凭证号'
        },
      },
      {
        path: 'MakeForm',
        name: 'MakeForm',
        component: () => import('@/views/Finance/MakeForm'),
        meta: {
          title: '制作财务报表'
        },
      },

    ]
  },
  {
    path: '/User',
    redirect: '/User/UserManage',
    name: 'User',
    component: layout,
    meta: {
      title: '用户管理',
      icon: 'user'
    },
    children: [
      {
        path: 'UserCurrent',
        name: 'UserCurrent',
        component: () => import('@/views/User/UserCurrent'),
        meta: {
          title: '当前用户'
        },
      },
      {
        path: 'UserManage',
        name: 'UserManage',
        component: () => import('@/views/User/UserManage'),
        meta: {
          title: '用户管理'
        },
      }
    ]
  },



  ...constantRouterMap
]
export default new Router({
  routes
})
