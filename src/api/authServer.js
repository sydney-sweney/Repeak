export const authServer = {
  signup: async (payload) => {
    const res = await fetch('/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })

    if (!res.ok) {
      throw new Error('Ошибка сервера')
    }

    return await res.json()
  },

  signin: async (payload) => {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })

    if (!res.ok) {
      throw new Error('Неверный email или пароль')
    }

    return await res.json()
  }
}