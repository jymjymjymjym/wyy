const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args))

// 163 - 1 (360)
fetch('https://n.cg.163.com/api/v2/sign-today', {
  headers: {
    accept: 'application/json, text/plain, */*',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
    authorization:
      'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI0ZGNhYjRlZi1lNzgwLTRlZTgtODM0Ny0zMGVhNjM1MWUxZWIiLCJmcmVzaCI6ZmFsc2UsImlhdCI6MTY0OTk5NTQ3NCwiaWRlbnRpdHkiOiI2MDkzZGY5ZWE3ODQ0MmQyYzIwN2U5M2EiLCJ1c2VyX2NsYWltcyI6eyJ0aW1lc3RhbXAiOjE2NDk5OTU0NzQsIm51bWJlciI6NTM0ODMyNDY2LCJzYWx0Ijo2NH0sInR5cGUiOiJhY2Nlc3MiLCJuYmYiOjE2NDk5OTU0NzR9.MHbYKhBWtIadGU6mTXRyZK8oQmrJi6CKkL9g2_pd9yk',
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
    console.log('edge3 成功')
  } else {
    console.log('edge3 失败')
  }
})

// 163 - 2 (edge0)
fetch('https://n.cg.163.com/api/v2/sign-today', {
  headers: {
    accept: 'application/json, text/plain, */*',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
    authorization:
      'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsIm5iZiI6MTYzOTcwNjQzMiwidHlwZSI6ImFjY2VzcyIsImlhdCI6MTYzOTcwNjQzMiwianRpIjoiMzc3YWEwMDItZjQxMi00YzUwLWIyMWYtMGI0YWM0ZmU0YjUxIiwidXNlcl9jbGFpbXMiOnsic2FsdCI6OTQsIm51bWJlciI6NDQxOTkzODUyLCJ0aW1lc3RhbXAiOjE2Mzk3MDY0MzJ9LCJpZGVudGl0eSI6IjYxYmJlZjQwYjlhZTM2MjM3MTNlMjUyZiJ9.lT8Jjc2rfiI7OVot9tv7gWO6DJeeGuozYKpzpN62QkQ',
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
    console.log('edge0 成功')
  } else {
    console.log('edge0 失败')
  }
})

// 163 - 3 (edge1)
fetch('https://n.cg.163.com/api/v2/sign-today', {
  headers: {
    accept: 'application/json, text/plain, */*',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
    authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwiaWRlbnRpdHkiOiI2MjEwZGZiYzAwYjM4MTdkOGFkMzQ1MzEiLCJmcmVzaCI6ZmFsc2UsIm5iZiI6MTY0NTI3MzAyMCwiaWF0IjoxNjQ1MjczMDIwLCJ1c2VyX2NsYWltcyI6eyJudW1iZXIiOjI3OTA0MzcyNiwic2FsdCI6OTQsInRpbWVzdGFtcCI6MTY0NTI3MzAyMH0sImp0aSI6ImEwMjcxOWMzLTNkNDktNDdiOC1hN2U0LTU4YTU3NmE0MzJjZiJ9.c3wW_roa1XUhRLEC1wcZ-DU-adgaoh5yni4aG9WDRVc',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'x-platform': '0'
  },
  referrer: 'https://cg.163.com/',
  referrerPolicy: 'no-referrer-when-downgrade',
  body: null,
  method: 'POST',
  mode: 'cors'
}).then(res => {
  if (res.statusText == 'OK') {
    console.log('edge1 成功')
  } else {
    console.log('edge1 失败')
  }
})

// 163 - 4 (edge2 1314869)
fetch('https://n.cg.163.com/api/v2/sign-today', {
  headers: {
    accept: 'application/json, text/plain, */*',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
    authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NDkwNjc0OTIsInR5cGUiOiJhY2Nlc3MiLCJmcmVzaCI6ZmFsc2UsImp0aSI6ImM4NTZhNjE1LTVjZTYtNDg0Zi1iZDFhLTYyMjAwY2NhYjFiNSIsImlkZW50aXR5IjoiNjI0YWM1ZTRmODA5ZWY5MDdmYTBmNzA5IiwidXNlcl9jbGFpbXMiOnsidGltZXN0YW1wIjoxNjQ5MDY3NDkyLCJzYWx0Ijo5MSwibnVtYmVyIjo3NjU2MTQ1OTB9LCJuYmYiOjE2NDkwNjc0OTJ9.0TgRxIYqbsq9UbOJgCVsfyoAhKaDoSj6d1l4vSvPnUc',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'x-platform': '0'
  },
  referrer: 'https://cg.163.com/',
  referrerPolicy: 'no-referrer-when-downgrade',
  body: null,
  method: 'POST',
  mode: 'cors'
}).then(res => {
  if (res.statusText == 'OK') {
    console.log('edge2 成功')
  } else {
    console.log('edge2 失败')
  }
})

//------------------------------------------------------------------ bird
// bird()
function bird () {
  fetch('http://49.232.169.143:4000/api/user/reports', {
    credentials: 'include',
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:96.0) Gecko/20100101 Firefox/96.0',
      Accept: 'application/json, text/plain, */*',
      'Accept-Language':
        'zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2',
      'Content-Type': 'application/json;charset=utf-8',
      'X-Requested-With': 'XMLHttpRequest',
      'Set-Cookie':
        'userInfo=ODQ2NzgwNTg2QHFxLmNvbQ==_MjAxOS0wNi0xMSAyMzo1OQ==_false_76_0_0_0__; userInfo.sig=Kcv2FRJDUkIU1cOQDc3XGp4tpKo; birdiesearchkey=eyJ1c2VyIjp7InBheWluZ1VzZXIiOnsic3RhcnRUaW1lIjoxNTYwMjY1NzUzMDAwLCJlbmRUaW1lIjoxNTYwMjY4Nzk5MDAwLCJsZXZlbCI6MH0sIm5hdiI6W10sIm5vdGVUZXh0IjoiIiwiaW52aXRlUG93ZXIiOjAsInNldHRsZWRBbW91bnQiOjAsImRyYXdNb25leUNvZGUiOiIiLCJmaWx0ZXIiOltdLCJfaWQiOiI1Y2ZmYzQxOTJiZDk4NDliZjVjOGVlMTAiLCJsb2dpbklwIjoiMTEzLjc1LjE3MC4xNTQiLCJsYXN0TG9naW5UaW1lIjoxNjQ0MTQ0MzQ2MDAwLCJsb2NrIjowLCJjcmVhdGVEYXRlIjoxNTYwMjY1NzUzMDAwLCJsdiI6NzYsInByb2JhdGlvbiI6MTU1OTY2Mzk5OTAwMCwiZW1haWwiOiI4NDY3ODA1ODZAcXEuY29tIiwiX192IjowLCJpbnZpdGVJZCI6IiIsImludml0ZU1vbmV5IjowLCJpbnZpdGVVc2VySWQiOiIiLCJ0b2tlbiI6ImQ3NzU1MzdkNjdhYzliZTRjZTE0NzZjMmQwNjMzZjkwIn0sInJlcG9ydHMiOjMsIl9leHBpcmUiOjE2NzAwNjQzNTc3NDMsIl9tYXhBZ2UiOjI1OTIwMDAwMDAwfQ==; birdiesearchkey.sig=sluj4K5kXntCGojzEZT1O6rR7_Q; Hm_lvt_0ab5c71622569a68eff055e481014466=1644144349,1644165115; Hm_lpvt_0ab5c71622569a68eff055e481014466=1644165115',
      cookie:
        'userInfo=ODQ2NzgwNTg2QHFxLmNvbQ==_MjAxOS0wNi0xMSAyMzo1OQ==_false_76_0_0_0__; userInfo.sig=Kcv2FRJDUkIU1cOQDc3XGp4tpKo; birdiesearchkey=eyJ1c2VyIjp7InBheWluZ1VzZXIiOnsic3RhcnRUaW1lIjoxNTYwMjY1NzUzMDAwLCJlbmRUaW1lIjoxNTYwMjY4Nzk5MDAwLCJsZXZlbCI6MH0sIm5hdiI6W10sIm5vdGVUZXh0IjoiIiwiaW52aXRlUG93ZXIiOjAsInNldHRsZWRBbW91bnQiOjAsImRyYXdNb25leUNvZGUiOiIiLCJmaWx0ZXIiOltdLCJfaWQiOiI1Y2ZmYzQxOTJiZDk4NDliZjVjOGVlMTAiLCJsb2dpbklwIjoiMTEzLjc1LjE3MC4xNTQiLCJsYXN0TG9naW5UaW1lIjoxNjQ0MTQ0MzQ2MDAwLCJsb2NrIjowLCJjcmVhdGVEYXRlIjoxNTYwMjY1NzUzMDAwLCJsdiI6NzYsInByb2JhdGlvbiI6MTU1OTY2Mzk5OTAwMCwiZW1haWwiOiI4NDY3ODA1ODZAcXEuY29tIiwiX192IjowLCJpbnZpdGVJZCI6IiIsImludml0ZU1vbmV5IjowLCJpbnZpdGVVc2VySWQiOiIiLCJ0b2tlbiI6ImQ3NzU1MzdkNjdhYzliZTRjZTE0NzZjMmQwNjMzZjkwIn0sInJlcG9ydHMiOjMsIl9leHBpcmUiOjE2NzAwNjQzNTc3NDMsIl9tYXhBZ2UiOjI1OTIwMDAwMDAwfQ==; birdiesearchkey.sig=sluj4K5kXntCGojzEZT1O6rR7_Q; Hm_lvt_0ab5c71622569a68eff055e481014466=1644144349,1644165115; Hm_lpvt_0ab5c71622569a68eff055e481014466=1644165115'
    },
    referrer: 'http://49.232.169.143:4000/',
    method: 'POST',
    mode: 'cors'
  })

  fetch('http://49.232.169.143:4000/api/user/reports', {
    headers: {
      accept: 'application/json, text/plain, */*',
      'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
      'content-type': 'application/json;charset=utf-8',
      'x-requested-with': 'XMLHttpRequest',
      cookie:
        'userInfo=MTI4NjIwMDM5OUBxcS5jb20=_MjAxOS0wNi0xMSAyMzo1OQ==_false_0_0_0_0__; userInfo.sig=3GlwE5-jEvaai3VZ3Z9z6ABNePA; Hm_lvt_0ab5c71622569a68eff055e481014466=1644249793; Hm_lpvt_0ab5c71622569a68eff055e481014466=1644249793; birdiesearchkey=eyJ1c2VyIjp7InBheWluZ1VzZXIiOnsic3RhcnRUaW1lIjoxNTYwMjY2OTkzMDAwLCJlbmRUaW1lIjoxNTYwMjY4Nzk5MDAwLCJsZXZlbCI6MH0sIm5hdiI6W10sIm5vdGVUZXh0IjoiIiwiaW52aXRlUG93ZXIiOjAsInNldHRsZWRBbW91bnQiOjAsImRyYXdNb25leUNvZGUiOiIiLCJmaWx0ZXIiOltdLCJfaWQiOiI1Y2ZmYzhmMTJiZDk4NDliZjVjOGVlMTEiLCJsb2dpbklwIjoiMTEzLjc1LjE3MC4xNTQiLCJsYXN0TG9naW5UaW1lIjoxNjQ0MjQ5NzkxMDAwLCJsb2NrIjowLCJjcmVhdGVEYXRlIjoxNTYwMjY2OTkzMDAwLCJsdiI6MCwicHJvYmF0aW9uIjoxNTU5NjYzOTk5MDAwLCJlbWFpbCI6IjEyODYyMDAzOTlAcXEuY29tIiwiX192IjowLCJpbnZpdGVJZCI6IiIsImludml0ZU1vbmV5IjowLCJpbnZpdGVVc2VySWQiOiIiLCJ0b2tlbiI6IjM1Y2ZkNWZhZTM1NTgxMjdkZTNhNDlhNDc3MDc1YjFjIn0sInJlcG9ydHMiOjAsIl9leHBpcmUiOjE2NzAxNjk3OTM4MjUsIl9tYXhBZ2UiOjI1OTIwMDAwMDAwfQ==; birdiesearchkey.sig=rmHzzA_5saAYcJIxTaewSQIFcuE'
    },
    referrer: 'http://49.232.169.143:4000/',
    referrerPolicy: 'no-referrer-when-downgrade',
    body: null,
    method: 'POST',
    mode: 'cors'
  })

  fetch('http://49.232.169.143:4000/api/user/reports', {
    headers: {
      accept: 'application/json, text/plain, */*',
      'accept-language': 'zh-CN,zh;q=0.9,ja;q=0.8',
      'content-type': 'application/json;charset=utf-8',
      'x-requested-with': 'XMLHttpRequest',
      cookie:
        'userInfo=anltODQ2NzgwNTg2QHFxLmNvbQ==_MjAxOS0wNi0xMSAyMzo1OQ==_false_2_0_0_0__; userInfo.sig=mrzPYoh8avxfT67bl1jGLqes2MA; birdiesearchkey=eyJ1c2VyIjp7InBheWluZ1VzZXIiOnsic3RhcnRUaW1lIjoxNTYwMjY3MDYxMDAwLCJlbmRUaW1lIjoxNTYwMjY4Nzk5MDAwLCJsZXZlbCI6MH0sIm5hdiI6W10sIm5vdGVUZXh0IjoiIiwiaW52aXRlUG93ZXIiOjAsInNldHRsZWRBbW91bnQiOjAsImRyYXdNb25leUNvZGUiOiIiLCJmaWx0ZXIiOltdLCJfaWQiOiI1Y2ZmYzkzNTJiZDk4NDliZjVjOGVlMTIiLCJsb2dpbklwIjoiMTEzLjc1LjE3MC4xNTQiLCJsYXN0TG9naW5UaW1lIjoxNjQ0MjQ5OTI3MDAwLCJsb2NrIjowLCJjcmVhdGVEYXRlIjoxNTYwMjY3MDYxMDAwLCJsdiI6MiwicHJvYmF0aW9uIjoxNTU5NjYzOTk5MDAwLCJlbWFpbCI6Imp5bTg0Njc4MDU4NkBxcS5jb20iLCJfX3YiOjAsImludml0ZUlkIjoiIiwiaW52aXRlTW9uZXkiOjAsImludml0ZVVzZXJJZCI6IiIsInRva2VuIjoiOTE3NmE2NTA4NDY4YWJhNzQ4Mjk1MTU3ZDNkMzdlMGQifSwicmVwb3J0cyI6MCwiX2V4cGlyZSI6MTY3MDE2OTkyOTE3OCwiX21heEFnZSI6MjU5MjAwMDAwMDB9; birdiesearchkey.sig=fNiAXCPYsMRLSy09qhTpxsgy6t8; Hm_lvt_0ab5c71622569a68eff055e481014466=1644147748,1644249931; Hm_lpvt_0ab5c71622569a68eff055e481014466=1644249931',
      Referer: 'http://49.232.169.143:4000/',
      'Referrer-Policy': 'strict-origin-when-cross-origin'
    },
    body: null,
    method: 'POST'
  })
}

//------------------------------------------------------------------ bird
