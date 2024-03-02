// api-spec.js

var request = require("request");

const base_url = process.env.BASE_URL || "http://localhost:3000";

describe("API Test Suite", () => {
	describe("GET /", () => {
		it("return status code 200", function (done) {
			request.get(base_url, (error, response, body) => {
				expect(response.statusCode).toBe(200);
				done();
			});
		});

		it("return description", () => {
			request.get(base_url, (error, response, body) => {
				expect(body).toBe("Sample API");
			});
		});
	});
});