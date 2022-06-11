const confirm = require('@inquirer/confirm')

export const getInstallationSettings =
  async () => {
    const settings = {
      vitest: false
    }
    settings.jest = await confirm({ message: 'Do you want to include vitest?' })
    return settings
  }
