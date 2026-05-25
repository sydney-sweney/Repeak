import { authState } from './authState.js'

export const authMock = {
    signup: async (payload) => {
    await new Promise(r => setTimeout(r, 500))

    const exist = authState.users.find(u => u.email === payload.email)

    if (exist) {
      throw new Error('Такой email уже зарегистрирован')
    }

    const user = {
      id: Date.now(),
      email: payload.email,
      password: payload.password,
      nickname: null,
      tag: null

    }

    return user
  },

    signin: async (payload) => {
    await new Promise(r => setTimeout(r, 500))

    const user = authState.users.find(
      u => u.email === payload.email && u.password === payload.password
    )

    if (!user) {
      throw new Error('Неверный email или пароль')
    }

    return user
  }
}