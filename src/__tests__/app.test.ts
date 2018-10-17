import request from "supertest";
import app from "../app";

test("Request server", (done) => {
    request(app).get("/").then((response) => {
        expect(response.status).toBe(200);
        done();
    });
});
