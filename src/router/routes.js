
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'attendance', component: () => import('pages/AttendancePage.vue'), meta: { title: 'Kehadiran' } },
      { path: 'report', component: () => import('pages/ReportPage.vue'), meta: { title: 'Laporan Keuangan' } },
      { path: 'info', component: () => import('pages/InfoPage.vue'), meta: { title: 'Informasi' } }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
