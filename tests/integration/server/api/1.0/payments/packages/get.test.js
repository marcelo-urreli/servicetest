'use strict';

const COUNTRY_ID = 89; // GUATEMALA

describe('server', function(done) {
    describe('api', function() {
        describe('1.0', function() {
            describe('payments', function() {
                describe('packages', function() {
                    describe('countries', function() {
                        describe(':countryId', function() {
                            describe('get', function() {
                                test();
                            });
                        });
                    });
                });
            });
        });
    });
});

function test() {
    it('should return 200', function(done) {
        request(api.jarvis)
            .get(`/v1.0/payments/packages/countries/${COUNTRY_ID}`)
            .expect('Content-Type', /json/)
            .expect(200)
            .expect(bodyToBeArray)
            .expect(eachHasIdNameDescriptionAndProducts)
            .end(done);

        function bodyToBeArray(res) {
            if (!Array.isArray(res.body)) {
                throw new Error('Invalid response (Array expected)');
            }
        }

        function eachHasIdNameDescriptionAndProducts(res) {
            for (let element of res.body) {
                if (!element.id || !element.name || !element.description || !element.products) {
                    throw new Error('Malformed response (Missing attributes)');
                }
            }
        }
    });
}
