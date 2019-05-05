import ga from 'src/components/gtm'

// "async" is optional
export default async ({ Vue, router }) => {
  router.afterEach((to) => {
    ga.logPage(to.path)
  })
}
