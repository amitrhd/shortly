export default (length) => {
    let chars = "1234567890QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjjklzxcvbnm";
    let result = '';
    for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
    return result;
};