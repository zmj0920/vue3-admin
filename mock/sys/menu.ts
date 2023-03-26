import { resultSuccess, resultError, getRequestToken, requestParams } from '../_util'
import { MockMethod } from 'vite-plugin-mock'
import { createFakeUserList } from './user'

// single
const dashboardRoute = {
  path: '/dashboard',
  name: 'Dashboard',
  component: 'LAYOUT',
  redirect: '/dashboard/analysis',
  meta: {
    title: 'routes.dashboard.dashboard',
    icon: 'bx:bx-home'
  },
  children: [
    {
      path: 'analysis',
      name: 'Analysis',
      component: '/dashboard/analysis/index',
      meta: {
        title: 'routes.dashboard.analysis',
        icon: 'bx:bx-home'
      }
    },
    {
      path: 'workbench',
      name: 'Workbench',
      component: '/dashboard/workbench/index',
      meta: {
        title: 'routes.dashboard.workbench',
        icon: 'bx:bx-home'
      }
    }
  ]
}

const sysRoute = {
  path: '/system',
  name: 'System',
  component: 'LAYOUT',
  redirect: '/system/account',
  meta: {
    icon: 'ion:settings-outline',
    title: 'routes.demo.system.moduleName'
  },
  children: [
    {
      path: 'account',
      name: 'AccountManagement',
      meta: {
        title: 'routes.demo.system.account',
        ignoreKeepAlive: true
      },
      component: '/system/account/index'
    },
    {
      path: 'account_detail/:id',
      name: 'AccountDetail',
      meta: {
        hideMenu: true,
        title: 'routes.demo.system.account_detail',
        ignoreKeepAlive: true,
        showMenu: false,
        currentActiveMenu: '/system/account'
      },
      component: '/demo/system/account/AccountDetail'
    },
    {
      path: 'role',
      name: 'RoleManagement',
      meta: {
        title: 'routes.demo.system.role',
        ignoreKeepAlive: true
      },
      component: '/demo/system/role/index'
    },
    {
      path: 'menu',
      name: 'MenuManagement',
      meta: {
        title: 'routes.demo.system.menu',
        ignoreKeepAlive: true
      },
      component: '/demo/system/menu/index'
    },
    {
      path: 'dept',
      name: 'DeptManagement',
      meta: {
        title: 'routes.demo.system.dept',
        ignoreKeepAlive: true
      },
      component: '/demo/system/dept/index'
    },
    {
      path: 'changePassword',
      name: 'ChangePassword',
      meta: {
        title: 'routes.demo.system.password',
        ignoreKeepAlive: true
      },
      component: '/demo/system/password/index'
    }
  ]
}

const charts = {
  path: '/charts',
  name: 'Charts',
  component: 'LAYOUT',
  redirect: '/charts/map',
  meta: {
    orderNo: 500,
    icon: 'ion:bar-chart-outline',
    title: 'routes.demo.charts.charts'
  },
  children: [
    {
      path: 'map',
      name: 'Map',
      component: '/charts/Map.vue',
      meta: {
        title: 'routes.demo.charts.map'
      }
    },
    {
      path: 'line',
      name: 'Line',
      component: '/charts/Line.vue',
      meta: {
        title: 'routes.demo.charts.line'
      }
    },
    {
      path: 'pie',
      name: 'Pie',
      component: '/charts/Pie.vue',
      meta: {
        title: 'routes.demo.charts.pie'
      }
    }
  ]
}

const comp = {
  path: '/comp',
  name: 'Comp',
  component: 'LAYOUT',
  redirect: '/comp/basic',
  meta: {
    orderNo: 30,
    icon: 'ion:layers-outline',
    title: 'routes.demo.comp.comp'
  },
  children: [
    {
      path: 'transition',
      name: 'transitionDemo',
      component: '/components/transition/index.vue',
      meta: {
        title: 'routes.demo.comp.transition'
      }
    },
    {
      path: 'cropper',
      name: 'CropperDemo',
      component: '/components/cropper/index.vue',
      meta: {
        title: 'routes.demo.comp.cropperImage'
      }
    },
    {
      path: 'scroll',
      name: 'ScrollDemo',
      redirect: '/comp/scroll/basic',
      meta: {
        title: 'routes.demo.comp.scroll'
      },
      children: [
        {
          path: 'basic',
          name: 'BasicScrollDemo',
          component: '/components/scroll/index.vue',
          meta: {
            title: 'routes.demo.comp.scrollBasic'
          }
        },
        {
          path: 'action',
          name: 'ActionScrollDemo',
          component: '/components/scroll/Action.vue',
          meta: {
            title: 'routes.demo.comp.scrollAction'
          }
        },
        {
          path: 'virtualScroll',
          name: 'VirtualScrollDemo',
          component: '/components/scroll/VirtualScroll.vue',
          meta: {
            title: 'routes.demo.comp.virtualScroll'
          }
        }
      ]
    },
    {
      path: 'lazy',
      name: 'LazyDemo',
      redirect: '/comp/lazy/basic',
      meta: {
        title: 'routes.demo.comp.lazy'
      },
      children: [
        {
          path: 'basic',
          name: 'BasicLazyDemo',
          component: '/components/lazy/index.vue',
          meta: {
            title: 'routes.demo.comp.lazyBasic'
          }
        },
        {
          path: 'transition',
          name: 'BasicTransitionDemo',
          component: '/components/lazy/Transition.vue',
          meta: {
            title: 'routes.demo.comp.lazyTransition'
          }
        }
      ]
    },
    {
      path: 'verify',
      name: 'VerifyDemo',
      redirect: '/comp/verify/drag',
      meta: {
        title: 'routes.demo.comp.verify'
      },
      children: [
        {
          path: 'drag',
          name: 'VerifyDragDemo',
          component: '/components/verify/index.vue',
          meta: {
            title: 'routes.demo.comp.verifyDrag'
          }
        },
        {
          path: 'rotate',
          name: 'VerifyRotateDemo',
          component: '/components/verify/Rotate.vue',
          meta: {
            title: 'routes.demo.comp.verifyRotate'
          }
        }
      ]
    },
    {
      path: 'upload',
      name: 'UploadDemo',
      component: '/components/upload/index.vue',
      meta: {
        title: 'routes.demo.comp.upload'
      }
    },
    {
      path: 'ws',
      name: 'WebSocket',
      component: '/components/ws/index.vue',
      meta: {
        title: 'routes.demo.feat.ws'
      }
    },
    {
      path: 'download',
      name: 'DownLoadDemo',
      component: '/components/download/index.vue',
      meta: {
        title: 'routes.demo.feat.download'
      }
    },
    {
      path: 'img-preview',
      name: 'ImgPreview',
      component: '/components/img-preview/index.vue',
      meta: {
        title: 'routes.demo.feat.imgPreview'
      }
    },
    {
      path: 'watermark',
      name: 'WatermarkDemo',
      component: '/components/watermark/index.vue',
      meta: {
        title: 'routes.demo.feat.watermark'
      }
    },
    {
      path: 'excel',
      name: 'Excel',
      redirect: '/comp/excel/customExport',
      meta: {
        // icon: 'mdi:microsoft-excel',
        title: 'routes.demo.excel.excel'
      },

      children: [
        {
          path: 'customExport',
          name: 'CustomExport',
          component: '/components/excel/CustomExport.vue',
          meta: {
            title: 'routes.demo.excel.customExport'
          }
        },
        {
          path: 'jsonExport',
          name: 'JsonExport',
          component: '/components/excel/JsonExport.vue',
          meta: {
            title: 'routes.demo.excel.jsonExport'
          }
        },
        {
          path: 'arrayExport',
          name: 'ArrayExport',
          component: '/components/excel/ArrayExport.vue',
          meta: {
            title: 'routes.demo.excel.arrayExport'
          }
        },
        {
          path: 'importExcel',
          name: 'ImportExcel',
          component: '/components/excel/ImportExcel.vue',
          meta: {
            title: 'routes.demo.excel.importExcel'
          }
        }
      ]
    }
  ]
}

const iframe = {
  path: '/frame',
  name: 'Frame',
  component: 'LAYOUT',
  redirect: '/frame/doc',
  meta: {
    orderNo: 1000,
    icon: 'ion:tv-outline',
    title: 'routes.demo.iframe.frame'
  },
  children: [
    {
      path: 'doc',
      name: 'Doc',
      meta: {
        frameSrc: 'https://doc.vvbin.cn/',
        title: 'routes.demo.iframe.doc'
      }
    },
    {
      path: 'antv',
      name: 'Antv',
      meta: {
        frameSrc: 'https://www.antdv.com/docs/vue/introduce-cn/',
        title: 'routes.demo.iframe.antv'
      }
    },
    {
      path: 'https://doc.vvbin.cn/',
      name: 'DocExternal',
      meta: {
        title: 'routes.demo.iframe.docExternal'
      }
    }
  ]
}

export default [
  {
    url: '/basic-api/getMenuList',
    timeout: 1000,
    method: 'get',
    response: (request: requestParams) => {
      const token = getRequestToken(request)
      if (!token) {
        return resultError('Invalid token!')
      }
      const checkUser = createFakeUserList().find((item) => item.token === token)
      if (!checkUser) {
        return resultError('Invalid user token!')
      }
      const id = checkUser.userId
      let menu: Object[]
      switch (id) {
        case '1':
          dashboardRoute.redirect = dashboardRoute.path + '/' + dashboardRoute.children[0].path
          menu = [dashboardRoute, sysRoute, charts, comp, iframe]
          break
        case '2':
          dashboardRoute.redirect = dashboardRoute.path + '/' + dashboardRoute.children[1].path
          menu = [dashboardRoute, sysRoute, charts, comp, iframe]
          break
        default:
          menu = []
      }

      return resultSuccess(menu)
    }
  }
] as MockMethod[]
