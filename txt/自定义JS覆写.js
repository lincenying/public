// https://mihomo.party/docs/guide/override/javascript
function removeElements(arr, elementsToRemove) {
    const removeSet = new Set(elementsToRemove)
    return arr.filter(item => !removeSet.has(item))
}

// eslint-disable-next-line unused-imports/no-unused-vars
function main(config) {
    config['proxy-groups'].push({
        name: '🚀ChatGPT',
        type: 'select',
        proxies: ['美国01-IEPL-倍率1.0', '美国02-IEPL-倍率1.0', '美国03-IEPL-倍率1.0', '美国04-IEPL-倍率1.0', '美国05-IEPL-倍率1.0', '美国06-IEPL-倍率1.0', '🧱直接连接'],
    })
    const tmpRules = removeElements([...config.rules], [
        'DOMAIN-SUFFIX,chatgpt.com,🚀节点选择',
        'DOMAIN-SUFFIX,openai.com,🚀节点选择',
        'DOMAIN-SUFFIX,chat.openai.com,🚀节点选择',
        'MATCH,🐟漏网之鱼',
    ])
    config.rules = [
        ...tmpRules,
        'DOMAIN-SUFFIX,chatgpt.com,🚀ChatGPT',
        'DOMAIN-SUFFIX,openai.com,🚀ChatGPT',
        'DOMAIN-SUFFIX,chat.openai.com,🚀ChatGPT',
        'MATCH,🐟漏网之鱼',
    ]
    return config
}
