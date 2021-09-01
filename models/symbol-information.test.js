const { SymbolInformation } = require('./symbol-information')

afterAll(function() {
  SymbolInformation.base.connection.close()
})

describe('mongoose', function() {
  it('Insert sample data', function(done) {
    SymbolInformation.updateOne({
      symbol: '612ed16e6aac36e533963263'
    }, {
      symbol: '612ed16e6aac36e533963263',
      website: 'https://www.apple.com'
    }, {
      upsert: true
    }, function(err, res) {
      console.log(`res`, res)
      done(err)
    })
  })
})
