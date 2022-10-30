let XMLHttpRequest = require('xhr2');

/*
token tag commits author
 */

const token = process.argv[2]
const ticket = 'HOMEWORKSHRI-180'
const tag = process.argv[3]
const commits = [['123123', '000', 'deploy'],['22222', '000', 'fastFix'],['3333', '11', 'fix']]
const author = 'who'

let desc = `Ответственный за релиз ${author}.\n Коммиты, попавшие в релиз:\n`

for(let commit of commits){
    desc += (`${commit[0]} ${commit[1]} ${commit[2]}\n`)
}

const body = {
    summary: tag,
    description: desc
}

const xhr = new XMLHttpRequest();

console.log(`https://api.tracker.yandex.net/v2/issues/${ticket}`)

xhr.open("PATCH", `https://api.tracker.yandex.net/v2/issues/${ticket}`)
xhr.setRequestHeader('Host', 'https://api.tracker.yandex.net')
xhr.setRequestHeader('Authorization', `OAuth ${token}`)
xhr.setRequestHeader('X-Org-ID', '7526988')

// xhr._onHttpResponse((req, res) => console.log(res))

xhr.onreadystatechange = () => {
    console.log(xhr.response)
}

xhr.send(JSON.stringify(body))

