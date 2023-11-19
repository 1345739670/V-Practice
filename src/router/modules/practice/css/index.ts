
import practice from '@/views/practice/index.vue'

export default [
  {
    path: 'layout',
    component: practice,
    children: [
      {
        path: 'full',
        name: 'LayoutFull',
        component: () => import('@/views/layout/Full.vue'),
        meta: {
          title: 'layout'
        }
      },
      {
        path: 'two-column',
        name: 'TwoColumn',
        component: () => import('@/views/layout/TwoColumn.vue'),
        meta: {
          title: 'TwoColumn'
        }
      },
      {
        path: 'three-column',
        name: 'ThreeColumn',
        component: () => import('@/views/layout/ThreeColumn.vue'),
        meta: {
          title: 'ThreeColumn'
        }
      },
      {
        path: 'grail',
        name: 'grail',
        component: () => import('@/views/layout/Grail.vue'),
        meta: {
          title: 'ThreeColumn'
        }
      },
      {
        path: 'double-wing',
        name: 'double-wing',
        component: () => import('@/views/layout/DoubleWing.vue'),
        meta: {
          title: 'double-wing'
        }
      },
      {
        path: 'margin',
        name: 'margin',
        component: () => import('@/views/practice/css/Margin.vue'),
        meta: {
          title: 'margin'
        }
      }
    ]
  }
]