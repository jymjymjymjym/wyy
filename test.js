const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args))

fetch('http://www.baidu.com', {
  
}).then(res =>res.text()).then(res=>{
  console.log(res);
})
