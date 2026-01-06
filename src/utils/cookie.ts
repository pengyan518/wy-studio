// Cookie functions
export function setCookie(cname: string, cvalue: any, exdays: any, path: string) {
  const d = new Date()
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000)
  const expires = `expires=${d.toUTCString()}`
  document.cookie = `${cname}=${cvalue};${expires};path=/${path};`
}

export function getCookie(cname: string) {
  const name = `${cname}=`
  const decodedCookie = decodeURIComponent(document.cookie)
  const ca = decodedCookie.split(';')
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) === ' ') {
      c = c.substring(1)
    }

    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length)
    }
  }

  return ''
}

export function deleteCookie(name: string) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`
}

export function bake_cookie(name: string, value: any, exdays: any) {
  const d = new Date()
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000)
  const expires = `expires=${d.toUTCString()}`
  const cookie = [name, '=', JSON.stringify(value), ';', expires, '; path=/;'].join('')
  document.cookie = cookie
}

export function read_cookie(name: string) {
  let result = document.cookie.match(new RegExp(`${name}=([^;]+)`))
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  result && (result = JSON.parse(result[1]))
  return result
}

export function delete_cookie(name: string) {
  document.cookie = [name, '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=/; domain=.', window.location.host.toString()].join('')
}

export function setCookieToPage(cvalue: any) {
  setCookie('choiceSeat', cvalue, 365, '')
}

export function eraseCookie(cname: string) {
  setCookie(cname, '', -1, '')
}

export function setCookieMins(cname: string, cvalue: any, exmins: any, path: any) {
  const d = new Date()
  d.setTime(d.getTime() + exmins * 60 * 1000)
  const expires = `expires=${d.toUTCString()}`
  document.cookie = `${cname}=${cvalue};${expires};path=/${path};`
}
