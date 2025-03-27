// 修改vitepress base
const fs = require('fs')
const path = require('path')
const { exec } = require('child_process')

// 修改vitepress base
function gitBase() {
    console.log('gitBase')
    const base = '/PakePlus/'
    const configPath = path.join(__dirname, '../docs/.vitepress/config.ts')
    const config = fs.readFileSync(configPath, 'utf-8')
    const newConfig = config.replace("base: '/'", `base: '${base}'`)
    console.log('newConfig', newConfig)
    fs.writeFileSync(configPath, newConfig)
}

function copyStatic() {
    console.log('copyStatic')
    const staticPath = path.join(__dirname, '../docs/static')
    const distStaticPath = path.join(__dirname, '../docs/dist/static')
    fs.cpSync(staticPath, distStaticPath, { recursive: true })
}

// 根据参数 修改vitepress base 或者 copy /docs/static 到 /docs/dist/static
const callFunc = process.argv[0]
console.log('callFunc', callFunc)
if (callFunc === 'gitBase') {
    gitBase()
} else if (callFunc === 'copyStatic') {
    copyStatic()
}
