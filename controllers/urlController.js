const urlShortcodeMapping = require('../models').urlShortcodeMapping,
    generateString = require('../utils/generateRandomString'),
    { validationResult } = require('express-validator');

module.exports = {
    post_shorten: (req, res) => {
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            const url = req.body.url;
            const shortcode = req.body.shortcode || generateString(6);
            saveUrlObj(url, shortcode);
            function saveUrlObj(url, shortcode) {
                var urlShortcodeMappingObj = new urlShortcodeMapping({ url, shortcode });
                urlShortcodeMappingObj.save((err, data) => {
                    if (err) {
                        if (err.code = "11000") {
                            saveUrlObj(url, generateString(6));
                        } else {
                            //todo: send error response of server error 500

                        }
                    } else {
                        //todo: send success response with status 201
                    }
                });
            }
        } else {
            //todo: send error resposne according to validation err

        }
    }
};
