/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
const core = require('@actions/core')

// Import the core GitHub Actions toolkit

// Define your action function
async function run() {
  try {
    // Get the input values from the user
    const name = core.getInput('project')
    const message = core.getInput('space')

    // Perform your action logic here
    console.log(`Hello, ${name}! Your message is: ${message}`)

    // Set the output value (if needed)
    core.setOutput('result', 'Action completed successfully')
  } catch (error) {
    // Handle any errors that occur during the action
    core.setFailed(error.message)
  }
}

module.exports = {
  run
}
