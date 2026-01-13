// https://mihomo.party/docs/guide/override/javascript
function removeElements(arr, elementsToRemove) {
    const removeSet = new Set(elementsToRemove)
    return arr.filter(item => !removeSet.has(item))
}

// eslint-disable-next-line ts/no-unused-vars
function main(config) {
    config['proxy-groups'].push({
        name: '💬ChatGPT',
        type: 'select',
        proxies: [
            '🇺🇸 美国01-Air',
            '🇺🇸 美国02-Air',
            '🇺🇸 美国03-Air',
            '🇺🇸 美国04-Air',
            '🇺🇸 美国05-Air',
            '🇺🇸 美国06-Air',
            '🧱直接连接',
        ],
    })
    const tmpRules = removeElements([...config.rules], [
        'DOMAIN-SUFFIX,chatgpt.com,🚀节点选择',
        'DOMAIN-SUFFIX,openai.com,🚀节点选择',
        'DOMAIN-SUFFIX,chat.openai.com,🚀节点选择',
        'DOMAIN-SUFFIX,auth0.openai.com,🚀节点选择',
        'DOMAIN-SUFFIX,platform.openai.com,🚀节点选择',
        'MATCH,🐟漏网之鱼',
    ])
    config.rules = [
        ...tmpRules,
        'DOMAIN-SUFFIX,auth0.openmai.com,💬ChatGPT',
        'DOMAIN-SUFFIX,platform.openai.com,💬ChatGPT',
        'DOMAIN-SUFFIX,chatgpt.com,💬ChatGPT',
        'DOMAIN-SUFFIX,openai.com,💬ChatGPT',
        'DOMAIN-SUFFIX,chat.openai.com,💬ChatGPT',
        'DOMAIN-SUFFIX,google-analytics.com,🍃应用净化',
        'DOMAIN-SUFFIX,googletagmanager.com,🍃应用净化',
        'MATCH,🐟漏网之鱼',
    ]
    return config
}
