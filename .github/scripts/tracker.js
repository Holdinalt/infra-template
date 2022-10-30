let XMLHttpRequest = require('xhr2');

const token = process.env.TOKEN
const ticket = process.env.TICKET
const tag = process.env.TAG
let commits = process.env.COMMITS
// Когда сделал, понял что можно просто строку передавать уже отформатированную bash, а не массив.
// Представьте, что этого костыля нет, пожалуйста. Мне жалко удалять эти 25 минут жизни
commits = commits.slice(0, commits.length - 2) + commits.slice(commits.length - 1)
commits = JSON.parse(commits)
const author = process.env.AUTHOR
const orgID = process.env.ID

console.log(JSON.parse(commits), 'commits')

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
xhr.setRequestHeader('X-Org-ID', orgID)

// xhr._onHttpResponse((req, res) => console.log(res))

xhr.onreadystatechange = () => {
    console.log(xhr.response)
}

xhr.send(JSON.stringify(body))

