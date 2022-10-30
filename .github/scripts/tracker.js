let XMLHttpRequest = require('xhr2');

/*
token tag commits author
 */

const token = process.env.TOKEN
const ticket = process.env.TICKET
const tag = process.env.TAG
const commits = process.env.COMMITS
const author = process.env.AUTHOR
const orgID = process.env.ID

console.log(JSON.parse(commits))
console.log(JSON.parse(commits)[0])

// let desc = `Ответственный за релиз ${author}.\n Коммиты, попавшие в релиз:\n`
//
// for(let commit of commits){
//     desc += (`${commit[0]} ${commit[1]} ${commit[2]}\n`)
// }
//
// const body = {
//     summary: tag,
//     description: desc
// }
//
// const xhr = new XMLHttpRequest();
//
// console.log(`https://api.tracker.yandex.net/v2/issues/${ticket}`)
//
// xhr.open("PATCH", `https://api.tracker.yandex.net/v2/issues/${ticket}`)
// xhr.setRequestHeader('Host', 'https://api.tracker.yandex.net')
// xhr.setRequestHeader('Authorization', `OAuth ${token}`)
// xhr.setRequestHeader('X-Org-ID', orgID)
//
// // xhr._onHttpResponse((req, res) => console.log(res))
//
// xhr.onreadystatechange = () => {
//     console.log(xhr.response)
// }
//
// xhr.send(JSON.stringify(body))

