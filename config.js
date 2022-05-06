import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['6285601142988', 'ᴋᴇʟᴠɪɴ', true]
  // [number, dia creator/owner?, dia developer?]
] // Put your number here
global.mods = ['6285601142988'] // Want some help?
global.prems = ['6285601142988'] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': '493053acc612476f',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

// Sticker WM
global.packname = 'Fara-Md'
global.author = 'By Kelvin'

global.multiplier = 69 // The higher, The harder levelup

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '馃帠锔�',
      limit: '馃幊',
      health: '鉂わ笍',
      exp: '鉁夛笍',
      money: '馃挵',
      potion: '馃イ',
      diamond: '馃拵',
      common: '馃摝',
      uncommon: '馃巵',
      mythic: '馃棾锔�',
      legendary: '馃梼锔�',
      pet: '馃巵',
      trash: '馃棏',
      armor: '馃ゼ',
      sword: '鈿旓笍',
      wood: '馃',
      rock: '馃',
      string: '馃暩锔�',
      horse: '馃悗',
      cat: '馃悎',
      dog: '馃悤',
      fox: '馃',
      petFood: '馃崠',
      iron: '鉀擄笍',
      gold: '馃憫',
      emerald: '馃挌'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Updated - config.js"))
  import(`${file}?update=${Date.now()}`)
})