const { SymbolInformation } = require('../models/symbol-information')

module.exports = app => {
  //===========================================================================
  // Route: /api/symbol-information/:_id
  app.route('/api/symbol-information/:_id')
    .get(function(req, res) {
      const options = {}
      if (req.query.populate === '1' || req.query.populate === 'true') {
        options.populate = 'symbol'
      } 
      SymbolInformation.findById(req.params._id, {}, options, function(err, symbolInformation) {
        if (err) {
          console.error(err)
          if (err.name === 'CastError' && err.kind === 'ObjectId') {
            return res.json({
              status: 404,
              error: 'Not Found'
            })
          }
        }
        res.json(symbolInformation)
      })
    })


  //===========================================================================
  // Route: /api/symbol/:_id

  app.route('/api/symbol/:_id')
    .get(function(req, res) {
      const options = {}
      if (req.query.populate === '1' || req.query.populate === 'true') {
        options.populate = 'symbol'
      } 
      SymbolInformation.findOne({
        symbol: req.params._id
      }, {}, options, function(err, symbolInformation) {
        if (err) {
          if (err.name === 'CastError' && err.kind === 'ObjectId') {
            return res.json({
              status: 404,
              error: 'Not Found'
            })
          }
        }
        res.json(symbolInformation)
      })
    })

}
