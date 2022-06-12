const getInstallationSettings =
  async ({ confirm }) => {
    const settings = {
      templates: {
				base: true,
	      vitest: false,
	      router: false
      }
    }
    settings.templates.vitest = await confirm({ message: 'Do you want to include vitest?' })
    settings.templates.router = await confirm({ message: 'Do you want to include vue router?' })
    return settings
  }
	
module.exports = getInstallationSettings
