import { createApp, App as VueApp } from 'vue'
import { createRouter, createWebHistory, Router } from 'vue-router'
import { createHead, HeadClient } from '@vueuse/head'
import { createPinia } from 'pinia'

import App from '@/app.vue'

const app: VueApp<Element> = createApp(App)
const head: HeadClient<{}> = createHead()
const pinia = createPinia()

/**
 * Built-in components
 */
const nativeComponents = require.context(
  '@/app/vue/shared/components/',
  true,
  /\.(vue|js|ts)$/i
)
nativeComponents.keys().map(key => {
  let nativeComponentName = key.split('.')[1].replace(/\//g, '')

  if (nativeComponentName.match(/index$/)) {
    nativeComponentName = nativeComponentName.replace('index', '')
  }

  app.component(nativeComponentName, nativeComponents(key).default)
})

let routes: Array<{ path: string; component: any; meta?: any }> = []

/**
 * Built-in pages
 */
const nativePageComponents = require.context(
  '@/app/vue/shared/pages/',
  true,
  /\.(vue|js|ts)$/i
)
nativePageComponents.keys().map(key => {
  let slugName = key
    .split('.')[1]
    .replace(/([A-Z])/g, '-$1')
    .replace(/(^-)/g, '')
    .toLowerCase()

  if (slugName.match(/\/index$/)) {
    slugName = slugName.replace('/index', '/')
  }

  routes.push({
    path: slugName === '/index' ? '/' : `/${slugName}`,
    component: nativePageComponents(key).default,
  })
})

/**
 * Pages
 */
const pageComponents = require.context(
  '@/resources/views/',
  true,
  /\.(vue|js|ts)$/i
)

pageComponents.keys().map(key => {
  let slugName = key
    .split('.')[1]
    .replace(/([A-Z])/g, '-$1')
    .replace(/(^-)/g, '')
    .toLowerCase()

  if (slugName.match(/\/index$/)) {
    slugName = slugName.replace('/index', '/')
  }

  routes.push({
    path: slugName === '/index' ? '/' : `/${slugName}`,
    component: pageComponents(key).default,
    meta: {
      transition: 'fade',
    },
  })
})

/**
 * Dynamic Pages
 */
const dynamicPageComponents = require.context(
  '@/resources/views/',
  true,
  /\[(.*)\]\.(vue|js|ts)$/i
)
dynamicPageComponents.keys().map((key: string) => {
  let slugName: string = key
    .split('.')[1]
    .replace(/([A-Z])/g, '-$1')
    .replace(/(^-)/g, '')
    .toLowerCase()

  if (slugName.match(/\/index$/)) {
    slugName = slugName.replace('/index', '/')
  } else {
    slugName = slugName.replace(/\/\[(.*)\]/, '/:$1')
  }

  routes.push({
    path: slugName === '/index' ? '/' : `/${slugName}`,
    component: dynamicPageComponents(key).default,
    meta: {
      transition: 'fade',
    },
  })
})

routes.push({
  path: '/:pathMatch(.*)*',
  component: require('@/app/vue/shared/pages/404.vue').default,
})

const router: Router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

/**
 * Layouts
 */
const layoutFiles = require.context('@/resources/layouts/', true, /\.(vue|js|ts)$/i)

layoutFiles.keys().map((key: string) => {
  const layoutName: string =
    'layout-' +
    key
      .split('.')[1]
      .replace(/\//g, '')
      .replace(/([A-Z])/g, '-$1')
      .replace(/(^-)/g, '')
      .toLowerCase()

  app.component(layoutName, layoutFiles(key).default)
})

app.use(router)
app.use(head)
app.use(pinia)

app.mount('[data-larapress-app]')
