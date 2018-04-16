
const userInforkey = 'user-info'
export function saveUserInfo (userInfo = {}) {
  window.localStorage.setItem(userInforkey, JSON.stringify(userInfo))
}
export function getUserInfo () {
  return window.localStorage.getItem(userInforkey)
}

export function getToken () {
  return JSON.parse(getUserInfo()).token
}

export function removeUserInfo () {
  window.localStorage.removeItem(userInforkey)
}
