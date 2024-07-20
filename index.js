const fs = require('fs');
const path = require('path');
const cg_send = require('./send/cg')
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
      const res = await cg_send(title, token)
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


