import waitTime from "./utils"

export default async function setupTestPipelineTest() {
    global.env = 'test'
    global.deleteFixture = () => {
        console.log('Delete all data was added to DB!')
    }
    console.log('\nSetting up pipeline test......')
    await waitTime(3)
    console.log('Setuped pipeline test is ok!\n')
}

