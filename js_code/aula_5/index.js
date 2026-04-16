let results = []
let requests = [
  "44656953000188",
  "87547683000180",
  "56931602000117",
  "05112169000157",
  "04824185000100",
  "05392714000106",
  "09357838000101",
  "87547188005997",
  "61236936000100"
]

for (let request of requests) {
    let response = await fetch(`https://api.opencnpj.org/${request}`)
    response = await response.json()
    results.push(response)
}
console.log(results.map(element => element.nome_fantasia), results.length);

