let axios = require('axios')
let { JSDOM } = require('jsdom')

async function fancy(text) {
    let res = await axios.get('http://qaz.wtf/u/convert.cgi?text=' + encodeURIComponent(text))
    let html = await res.data
    let dom = new JSDOM(html)
    let table = dom.window.document.querySelector('table').children[0].children
    let obj = {}
    for (let tr of table) {
      let name = tr.querySelector('.aname').innerHTML
      let content = tr.children[1].textContent.replace(/^\n/, '').replace(/\n$/, '')
      obj[name + (obj[name] ? ' Reversed' : '')] = content
    }
    return obj
}

module.exports = fancy
