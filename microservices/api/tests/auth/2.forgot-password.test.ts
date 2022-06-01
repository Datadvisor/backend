const request = require("supertest");
const baseUrl = 'http://localhost:3001';

describe('Ask reset password endpoint', () => {
    it('should return a 200 status code', async () => {
        const response = await request(baseUrl)
            .post('/users/reset-password')
            .send({
                email: "contact@anthoni-marie.fr",
            })
        expect(response.statusCode).toBe(200);
    });
});