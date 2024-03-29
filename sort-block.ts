import fs from 'node:fs'
import moment from 'moment'

const data = fs.readFileSync('./txt/AdBlock.txt', 'utf-8')
let BlockTxt = data.split('! start')[1].split('! end')[0]
BlockTxt = BlockTxt.trim()
let arrBlockTxt = BlockTxt.split('\n')
arrBlockTxt = [...new Set(arrBlockTxt)]
const newBlockTxt = arrBlockTxt.sort().join('\n')

const writeBlockTxt = `[Adblock Plus 2.0]
! Checksum: RW/QudyvEPmfX2nVXTJ+AA
! Version: ${moment().format('YYYYMMDDHHmmss')}
! Title: 自定义过滤规则
! Last modified: ${moment().format('YYYY-MM-DD HH:mm:ss')}
! Expires: 1 days (update frequency)
! Homepage: https://github.com/lincenying/public
! Licence: https://github.com/lincenying/public
!
!-----------------------General advert blocking filters-----------------------!
! start

${newBlockTxt}

! end
`
fs.writeFileSync('./txt/AdBlock.txt', writeBlockTxt)
console.log('排序完成')
