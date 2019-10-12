const { body } = require('express-validator');
const urlRegex = new RegExp(/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi);
const shortcodeRegex = new RegExp(/^[0-9a-zA-Z_]{4,}$/);

module.exports = {
    post_shorten: [
        body['url'].matches(urlRegex).withMeassage('Invalid url'),
        body['shortcode'].optional.matches(shortcodeRegex).withMeassage('Invalid short code')
    ]
};