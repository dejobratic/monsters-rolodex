class RestService {
  async get(uri) {
    const response = await fetch(uri)
    return await response.json()
  }
}

export const restService = new RestService()
