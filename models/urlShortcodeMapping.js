var mongoose = require('mongoose');

var urlShortcodeMapping = new mongoose.Schema(
    {
        url: { type: String, require: true },
        shortcode: { type: String, require: true, unique: true },
        createdAt: { type: Date, default: new Date() }
    },
    { collection: 'urlShortcodeMappingMstr' }
);

module.exports = mongoose.model('urlShortcodeMapping', urlShortcodeMapping);
