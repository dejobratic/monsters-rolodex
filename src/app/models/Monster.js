class Monster {
  constructor(id, name, email) {
      this.id = id
      this.name = name
      this.email = email
      this.image = `https://robohash.org/${this.id}?set=set2&size=180x180`
  }
}

export default Monster
