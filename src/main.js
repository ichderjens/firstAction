const core = require('@actions/core')
const fetch = require('node-fetch')

async function fetchAttachments(url, token) {
  try {
    
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    console.log('Fetched Data:', data)
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

// Define your action function
async function run() {
  try {
    // Get the input values from the user
    const project = core.getInput('project')
    const space = core.getInput('space')
    const name = core.getInput('name')
    const token = process.env.PET_TOKEN

    // Log the input values to the GitHub Actions console
    console.log(`The project is: ${project}`)
    console.log(`The space is: ${space}`)
    console.log(`The name is: ${name}`)

    // URL for fetching attachments
    const url = `https://pet-gematikde.msappproxy.net/polarion/rest/v1/projects/${project}/spaces/${space}/documents/${name}/attachments?fields%5Bdocument_attachments%5D=%40all`
    await fetchAttachments(url, token)
  } catch (error) {
    // Handle any errors that occur during the action
    core.setFailed(error.message)
  }
}

module.exports = {
  run
}
