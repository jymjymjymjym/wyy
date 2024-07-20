async function send(item, token) {
  return await fetch('https://n.cg.163.com/api/v2/sign-today', {
    headers: {
      accept: 'application/json, text/plain, */*',
      'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
      authorization: token,
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-site',
      'x-platform': '0'
    },
    referrer: 'https://cg.163.com/',
    referrerPolicy: 'no-referrer-when-downgrade',
    body: null,
    method: 'POST',
    mode: 'cors',
    credentials: 'include'
  }).then(res => {
    if (res.statusText !== 'OK') {
      return item
    }
  })
}

module.exports = send