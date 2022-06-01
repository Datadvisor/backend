const request = require("supertest");
const baseUrl = 'http://localhost:3001';

describe('Register endpoint', () => {
    it('should return a 201 status code', async () => {
        const response = await request(baseUrl)
            .post('/users')
            .expect("Content-Type", /json/)
            .send({
                firstName: "Demo",
                lastName: "Datadvisor",
                email: "contact@anthoni-marie.fr",
                password: "datadvisor"
            })
        expect(response.statusCode).toBe(201);
    });
});