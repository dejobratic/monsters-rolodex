import { restService } from "./RestService"
import Monster from "../models/Monster"

class MonsterService {
  async getAll() {
    const url = "https://jsonplaceholder.typicode.com/users"
    const rawMonsters = await restService.get(url)
    return rawMonsters.map(
      (rawMonster) =>
        new Monster(rawMonster.id, rawMonster.name, rawMonster.email)
    )
  }
}

export const monsterService = new MonsterService()
