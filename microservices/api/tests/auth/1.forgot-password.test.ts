export{}
const request = require("supertest");

describe('Ask reset password endpoint', () => {
    const baseurl = 'http://localhost:3001';
    it('should return a 200 status code', (done) => {
        request(baseurl)
            .post('/users/reset-password')
            .send({
                email: "contact@anthoni-marie.fr",
            })
            .end(function(err:any, res:any) {
                expect(res.statusCode).toBe(200);
                done();
            });
    });
});