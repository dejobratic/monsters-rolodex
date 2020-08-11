import { restService } from "./RestService"

class MonsterService {
  async getMonsters() {
    const url = "https://jsonplaceholder.typicode.com/users"
    return await restService.get(url);
  }
}

export const monsterService = new MonsterService()
