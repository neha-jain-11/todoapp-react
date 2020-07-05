const request = require("supertest");
const app = require("../src/index");
const todos = require("../src/data/todos.json");

describe("api test for todos", () => {
  it("to get the list", async () => {
    const res = await request(app).get("/api/todos/get");
    // console.log("res", res);
    expect(res.body).toEqual(todos);
    expect(res.status).toEqual(200);
  });
});
