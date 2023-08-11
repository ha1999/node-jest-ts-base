import waitTime from "./utils"

export default async function setupTestPipelineTest() {
    global.env = 'test'
    console.log('\nSetting up pipeline test......')
    await waitTime(3)
    console.log('Setuped pipeline test is ok!\n')
}

