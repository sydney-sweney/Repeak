import { authMock } from './authMock.js'
import { authServer } from './authServer.js'

// switch between real server and mock
const USE_MOCK = true

const api = USE_MOCK ? authMock : authServer

export const authApi = {
  signUp: (data) => api.signup(data),
  signIn: (data) => api.signin(data)
}