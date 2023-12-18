import fs from 'node:fs'
import moment from 'moment'

const data = fs.readFileSync('./txt/AutoProxy.sorl', 'utf-8')
let proxyTxt = data.split('; start')[1].split('; end')[0]
proxyTxt = proxyTxt.trim()
let arrProxyTxt = proxyTxt.split('\n')
arrProxyTxt = [...new Set(arrProxyTxt)]
const newProxyTxt = arrProxyTxt.sort((a, b) => {
    // 在这里定义你的自定义排序逻辑
    if (a.includes('@@'))
        return 0
    // 返回负数表示 a 在 b 前面，返回正数表示 a 在 b 后面，返回 0 表示 a 和 b 相等

    // 例如，按照字符的 ASCII 码进行升序排序
    return a.charCodeAt(0) - b.charCodeAt(0)
}).join('\n')

const writeProxyTxt = `[SwitchyOmega Conditions]
; Require: SwitchyOmega >= 2.3.2
; Date: ${moment().format('YYYY-MM-DD HH:mm:ss')}
; Usage: https://github.com/FelisCatus/SwitchyOmega/wiki/RuleListUsage

; start

${newProxyTxt}

; end
`
fs.writeFileSync('./txt/AutoProxy.sorl', writeProxyTxt)
console.log('排序完成')
