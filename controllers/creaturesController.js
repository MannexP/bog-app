const Creature = require('../models/Creature')

const creaturesController = {
    index: (req, res) => {
        Creature.find({})
            .then((creatures) => {
                res.send(creatures)
            })
     },
    show: (req, res) => {
        Creature.findById(req.params.creatureId)
            .then((creature) => {
                res.send(creature)
            })
    },
    update: (req, res) => {
        Creature.findByIdAndUpdate(req.params.creatureId, req.body)
            .then((updatedCreature) => {
                updatedCreature.save()
                res.send(updatedCreature)
            })
    },
    delete: (req, res) => {
        Creature.findByIdAndDelete(req.params.creatureId)
            .then(() => {
                res.sendStatus(200)
            })
    },
    create: (req, res) => {
        Creature.create(req.body)
            .then((creatures) => {
                res.send(creatures)
            })
    }
}

 
module.exports = creaturesController