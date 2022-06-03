export{}
import supertest = require("supertest");
const request = require("supertest");

describe('Signin endpoints including login, update, get and delete user', () => {
    const baseurl = 'http://localhost:3001';
    let userId: '';
    let cookies = "";
    beforeAll(async () => {
        const response = await supertest(baseurl).post("/auth/signin").send({
            email: "contact@anthoni-marie.fr",
            password: "datadvisor"
        });
        cookies = response.header["set-cookie"][0].split(";");
        userId = response.body.id;
    });

    it.only("should be able get my user", (done) => {
        supertest(baseurl)
            .get('/users/me')
            .set('Cookie', cookies)
            .end(function(err:any, res:any) {
                expect(res.statusCode).toBe(200);
                done();
            });
    });

    it.only("should be able update my user", (done) => {
        supertest(baseurl)
            .patch('/users/me')
            .set('Cookie', cookies)
            .send({
                email: "anthoni.marie@epitech.eu"
            })
            .end(function(err:any, res:any) {
                expect(res.statusCode).toBe(200);
                done();
            });
    });

    it.only("should be able delete my user", (done) => {
        supertest(baseurl)
            .delete('/users/' + userId)
            .set('Cookie', cookies)
            .end(function(err:any, res:any) {
                expect(res.statusCode).toBe(204);
                done();
            });
    });
});