const mongoose = require('../mongoose')
require('mongoose-type-url')

const { Symbol } = require('v4ex-api-symbol/components/symbol')

const Schema = mongoose.Schema

const SymbolInformationSchema = new Schema({
  symbol: { type: mongoose.Schema.Types.ObjectId, ref: Symbol },
  website: mongoose.SchemaTypes.Url
})

const SymbolInformation = mongoose.model('SymbolInformation', SymbolInformationSchema)

module.exports = {
  SymbolInformation,
  SymbolInformationSchema
}
