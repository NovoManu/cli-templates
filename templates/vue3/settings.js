const confirm = require('@inquirer/confirm')

const getInstallationSettings =
  async () => {
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
