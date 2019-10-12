var chai = require('chai'),
    chaiHttp = require('chai-http');
var expect = chai.expect;
var app = require('../app.js');
chai.use(chaiHttp);

const testUrlforSucess = {
    url: 'example.com/',
    shortcode: ''
};

describe("URL Shortner test", function () {
    it("should return status 201 for valid url and unique short-url ", function () {
        chai.request(app)
            .post('/shorten')
            .set('content-type', 'application/x-www-form-urlencoded')
            .send(testUrlforSucess)
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(201);
            });
    });

    it("should return status 400 for invalid url", function () {
        const testURL = {
            url: '',
            shortcode: ''
        };
        chai.request(app)
            .post('/shorten')
            .set('content-type', 'application/x-www-form-urlencoded')
            .send(testURL)
            .end(function (err, res) {
                expect(res).to.have.status(400);
            });
    });
    it("should return status 409 for duplicate shortcode", function () {
        chai.request(app)
            .post('/shorten')
            .set('content-type', 'application/x-www-form-urlencoded')
            .send(testUrlforSucess)
            .end(function (err, res) {
                expect(res).to.have.status(409);
            });
    });
    it("should return status 422 for invalid shortcode", function () {
        const testURL = { url: '', shortcode: '' };
        chai.request(app)
            .post('/shorten')
            .set('content-type', 'application/x-www-form-urlencoded')
            .send(testURL)
            .end(function (err, res) {
                expect(res).to.have.status(422);
            });
    });
});
