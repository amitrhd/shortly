var mongoose = require('mongoose');

var urlShortcodeMapping = new mongoose.Schema(
    {
        url: { type: String, require: true },
        shortcode: { type: String, require: true, unique: true },
        lastSeenDate: { type: Date },
        redirectCount: { type: Number, default: 0 },
        startDate: { type: Date, default: new Date() }
    },
    { collection: 'urlShortcodeMappingMstr' }
);

module.exports = mongoose.model('urlShortcodeMapping', urlShortcodeMapping);
