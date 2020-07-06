const request = require("supertest");
const app = require("../src/index");
const todos = require("../src/data/todos.json");

describe("api test for todos", () => {
  it("to get the list", async () => {
    const res = await request(app).get("/api/todos/get");
    expect(res.body).toEqual(todos);
    expect(res.status).toEqual(200);
  });
  it("to post the list", async () => {
    const res = await request(app).post("/api/todos/post");
    expect(res.text).toEqual("Saved");
    expect(res.status).toEqual(200);
  });
});
