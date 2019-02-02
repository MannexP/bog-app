require('dotenv').config()
const mongoose = require('./connection')
mongoose.connect(process.env.MONGODB_URI)

const Creature = require('../models/Creature')

const luke = new Creature({
  name: 'Luke',
  description: 'Jedi'
})

const darth = new Creature({
  name: 'Darth',
  description: 'Father of Luke'
})

const yoda = new Creature({
  name: 'Yoda',
  description: 'Small guy, big Force'
})
Creature.deleteMany({})
    .then(() => yoda.save())
    .then(() => darth.save())
    .then(() => luke.save())
    .then(() => console.log("Database seeded success"))
    .then(() => mongoose.connection.close())


const saved = async () => {
  await Creature.remove()
  const luke = new Creature({name: 'Luke', description: 'Jedi'})
  await luke.save()
  const darth = new Creature({name: 'Darth Vader', description: 'Father of Luke'})
  await darth.save()
  db.close()
}

saved()