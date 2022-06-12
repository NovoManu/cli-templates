const getInstallationSettings =
  async ({ confirm }) => {
    const settings = {
      templates: {
				base: true,
	      vitest: false
      }
    }
    settings.templates.vitest = await confirm({ message: 'Do you want to include vitest?' })
    return settings
  }
	
module.exports = getInstallationSettings
