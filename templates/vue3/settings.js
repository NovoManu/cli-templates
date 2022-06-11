const confirm = require('@inquirer/confirm')

const getInstallationSettings =
  async () => {
    const settings = {
      vitest: false
    }
    settings.vitest = await confirm({ message: 'Do you want to include vitest?' })
    return settings
  }
	
module.exports = getInstallationSettings
