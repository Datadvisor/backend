export{}
const request = require("supertest");

describe('Register endpoint', () => {
    const baseurl = 'http://localhost:3001';
    it('should return a 201 status code', (done) => {
        request(baseurl)
            .post('/users')
            .expect("Content-Type", /json/)
            .send({
                firstName: "Demo",
                lastName: "Datadvisor",
                email: "contact@anthoni-marie.fr",
                password: "datadvisor"
            })
            .end(function(err:any, res:any) {
                expect(res.statusCode).toBe(201);
                done();
            });
    });
});