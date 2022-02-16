const fs = require('fs')
const date = require('locutus/php/datetime/date')
const trim = require('locutus/php/strings/trim')

const data = fs.readFileSync('./txt/AdBlock.txt', 'utf-8')
let BlockTxt = data.split('! start')[1].split('! end')[0]
BlockTxt = trim(BlockTxt)
let arrBlockTxt = BlockTxt.split('\n')
arrBlockTxt = [...new Set(arrBlockTxt)]
const newBlockTxt = arrBlockTxt.sort().join('\n')

const writeBlockTxt = `[Adblock Plus 2.0]
! Checksum: RW/QudyvEPmfX2nVXTJ+AA
! Version: ${date('YmdHis')}
! Title: 自定义过滤规则
! Last modified: ${date('Y-m-d H:i:s')}
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
