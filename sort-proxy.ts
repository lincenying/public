import fs from 'node:fs'
import moment from 'moment'

const data = fs.readFileSync('./txt/AutoProxy.sorl', 'utf-8')
let proxyTxt = data.split('; start')[1].split('; end')[0]
proxyTxt = proxyTxt.trim()
let arrProxyTxt = proxyTxt.split('\n')
arrProxyTxt = [...new Set(arrProxyTxt)]
const newProxyTxt = arrProxyTxt.sort().join('\n')

const writeProxyTxt = `[SwitchyOmega Conditions]
; Require: SwitchyOmega >= 2.3.2
; Date: ${moment().format('Y/m/d')}
; Usage: https://github.com/FelisCatus/SwitchyOmega/wiki/RuleListUsage

; start

${newProxyTxt}

; end
`
fs.writeFileSync('./txt/AutoProxy.sorl', writeProxyTxt)
console.log('排序完成')
