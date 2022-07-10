const getInstallationSettings =
  async ({ select }) => {
    const settings = {
			mood: null
    }
	  settings.mood = await select(
			'How are you today?',
		  [{ value: 'good', name: 'I am good!' }, { value: 'great', name: 'I am doing great!' }]
	  )
    return settings
  }
	
module.exports = getInstallationSettings
