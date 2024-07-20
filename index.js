const fs = require('fs');
const path = require('path');
main()

async function main() {
  const root = 'authorization'
  const list = fs.readdirSync(root)

  const fail_list = []
  for (let i = 0; i < list.length; i++) {
    const item = list[i];
    const token = fs.readFileSync(path.join(root, item)).toString()
    // console.log(token)
    const res = await send(item, token)
    if (res) fail_list.push(res)
  }

  if (fail_list.length > 0) pushWX(fail_list)
}

function pushWX(fail_list) {
  fetch(
    `http://www.pushplus.plus/send/d5c255f8bb3f4b1c848f8a85dcce6aac?content=${fail_list.join(' ')}`
  )
}


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
    if (res.statusText == 'OK') {
      // console.log('edge3 成功')
    } else {
      // console.log('edge3 失败')
      // failStr = failStr + 'edge3 失败 '
      return item
    }
  })
}