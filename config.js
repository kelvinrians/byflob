import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['6285601142988', 'MyOwner', true]
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
global.packname = 'Whatsapp Bot'
global.author = 'Me2k Glowing'

global.multiplier = 69 // The higher, The harder levelup

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: 'ðŸŽ–ï¸„1¤7',
      limit: 'ðŸŽ³',
      health: 'â¤ï¸',
      exp: 'âœ‰ï¸',
      money: 'ðŸ’°',
      potion: 'ðŸ¥¤',
      diamond: 'ðŸ’Ž',
      common: 'ðŸ“¦',
      uncommon: 'ðŸŽ',
      mythic: 'ðŸ—³ï¸„1¤7',
      legendary: 'ðŸ—ƒï¸„1¤7',
      pet: 'ðŸŽ',
      trash: 'ðŸ—‘',
      armor: 'ðŸ¥¼',
      sword: 'âš”ï¸',
      wood: 'ðŸªµ',
      rock: 'ðŸª¨',
      string: 'ðŸ•¸ï¸„1¤7',
      horse: 'ðŸŽ',
      cat: 'ðŸˆ',
      dog: 'ðŸ•',
      fox: 'ðŸ¦Š',
      petFood: 'ðŸ–',
      iron: 'â›“ï¸',
      gold: 'ðŸ‘‘',
      emerald: 'ðŸ’š'
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
