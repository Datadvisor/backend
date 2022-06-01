const request = require("supertest");
const baseUrl = 'http://localhost:3001';

describe('Signin endpoints including login, update and delete user', () => {
    it('should return a 200 status code', async () => {
        const response = await request(baseUrl)
            .post('/auth/signin')
            .expect("Content-Type", /json/)
            .send({
                email: "contact@anthoni-marie.fr",
                password: "datadvisor"
            })
        expect(response.statusCode).toBe(200);
    });
});