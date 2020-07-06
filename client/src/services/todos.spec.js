import * as todos from "./todos";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

describe("service", () => {
  const mock = new MockAdapter(axios);
  mock.onGet("/api/todos/get").reply(200, [{ id: "abc" }]);
  it("test", async () => {
    const tt = await todos.getTodos();
    expect(tt[0]).toEqual({ id: "abc" });
  });
});
