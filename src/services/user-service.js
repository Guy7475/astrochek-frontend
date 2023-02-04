import { utilService } from './util-service.js'
import { httpService } from './http-service.js'

const ENDPOINT = 'auth'
const STORAGE_KEY = 'loggedUser'

export const userService = {
  login,
  signup,
  logout,
  getLoggedinUser,
  getGuestUser,
}


async function signup(cred) {
  return await httpService.post(ENDPOINT + '/signup', cred)
}

function getLoggedinUser() {
  return JSON.parse(sessionStorage.getItem(STORAGE_KEY) || null)
}

async function login(cred) { 
  const loggedUser = await httpService.post(`${ENDPOINT}/login`, cred)
  utilService.saveToSessionStorage(STORAGE_KEY, loggedUser)
  return loggedUser
}

async function logout() {
  await httpService.post(`${ENDPOINT}/logout`)
  utilService.deleteFromSessionStorage(STORAGE_KEY)
  return null
}

function getGuestUser() {
  return {
    fullname: 'Guest User',
    username: 'guest',
    password: 'guest',
    isAdmin: true,
  }
}
