const getInstallationSettings =
  async ({ confirm, input }) => {
    const settings = {
			devPort: 8080,
      modules: {
				base: true,
	      vitest: false,
	      router: false
      }
    }
    const devPort = await input(
      'Enter development port',
      '8080',
      null,
      (value) => Number.isInteger(Number(value)) || 'You must provide a number'
    )
    settings.dev_port = Number(devPort)
    settings.modules.vitest = await confirm('Do you want to include vitest?')
    settings.modules.router = await confirm('Do you want to include vue router?')
	  if (settings.modules.router) {
			settings.routerImport = 'import router from "./router";'
		  settings.routerUse = 'app.use(router);'
	  }
    return settings
  }
	
module.exports = getInstallationSettings
