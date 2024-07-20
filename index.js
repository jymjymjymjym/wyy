const fs = require('fs');
const path = require('path');

const fail_list = []

main()
async function main() {
  const root = 'list'
  const list = fs.readdirSync(root)

  for (let j = 0; j < list.length; j++) {
    const dir = list[j];
    const dir_list = fs.readdirSync(path.join(root, dir))
    for (let i = 0; i < dir_list.length; i++) {
      const item = dir_list[i];
      const token = fs.readFileSync(path.join(root, dir, item)).toString()
      const title = `${dir}_${item}`
      // console.log(title, token)
      const res = await send(title, token)
      if (res) fail_list.push(res)
    }
  }


  if (fail_list.length > 0) {
    pushWX(fail_list)
    throw new Error(fail_list.join(' ') + " 失败")
  }
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
    if (res.statusText !== 'OK') {
      return item
    }
  })
}