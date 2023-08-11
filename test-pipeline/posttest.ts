import waitTime from "./utils"

export default async function tearDownTestPipelinePost() {
    console.log('Environment - ', env)
    console.log('Teardowning  pipeline test......')
    await waitTime(3)
    console.log('Teardowned pipeline test!')
}