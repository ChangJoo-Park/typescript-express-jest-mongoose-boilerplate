import request from "supertest";
import app from "../../src/app";

test("Request server", (done) => {
    request(app).get("/").then((response) => {
        expect(response.status).toBe(200);
        done();
    });
});
