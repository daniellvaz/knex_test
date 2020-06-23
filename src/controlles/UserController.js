const knex = require('../database')

module.exports = {
  async  inderx(req, res){
       const results = await knex('users')

       return res.json(results)
   }
}