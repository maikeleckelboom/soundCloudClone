import * as fs from 'fs'
import path from 'path'

export type Sound = {
  name: string
  mime: string
  url: string
}

const titelCase = (str: string) => str.split('-').map((word) => word[0].toUpperCase() + word.slice(1)).join(' ')

export default defineEventHandler((event) => {
  const relativeFolderPath = path.relative(process.cwd(), 'public/assets/sounds');
  const files = fs.readdirSync(relativeFolderPath).filter((file) => file.endsWith('.mp3') || file.endsWith('.wav'))
  const sounds = files.map((sound) => ({
    name: titelCase(sound.split('.').shift() as string),
    mime: sound.split('.').pop(),
    url:  path.relative(process.cwd(), path.join(relativeFolderPath, sound))
  })) as Sound[]

  return {
    status: 200,
    body: sounds
  }
})