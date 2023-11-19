import cssRoutes from '@/router/modules/practice/css/index'

const practice = {
  path: '/practice',
  name: 'practice',
  meta: {
    title: '练习'
  },
  children: cssRoutes
}

export default practice
// const routes = [
//   {
//     path: '/',
//     component: layout
//   }
// ]