import fs from 'fs'

export default defineEventHandler(async (event) => {
  const { name } = await readBody(event) as { name: string }
  // const readStream = fs.createReadStream(`./assets/sounds/${name}`)
  // return {
  //   status: 200,
  //   headers: {
  //     'Content-Type': 'audio/mpeg'
  //   },
  //   body: readStream

})
