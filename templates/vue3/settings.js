const getInstallationSettings =
  async ({ confirm, input }) => {
    const settings = {
			devPort: 8080,
      templates: {
				base: true,
	      vitest: false,
	      router: false
      }
    }
		  const devPort = await input({
	    message: 'Enter development port',
	    default: 8080,
	    validate: (value) =>
	      new Promise((resolve) => {
	        setTimeout(
	          () =>
	            resolve(
	              Number.isInteger(Number(value)) || 'You must provide a number'
	            ),
	          3000
	        )
	      })
	  })
	  settings.devPort = Number(devPort)
    settings.templates.vitest = await confirm({ message: 'Do you want to include vitest?' })
    settings.templates.router = await confirm({ message: 'Do you want to include vue router?' })
	  if (settings.templates.router) {
			settings.routerImport = 'import router from "./router";'
		  settings.routerUse = 'app.use(router);'
	  }
    return settings
  }
	
module.exports = getInstallationSettings
