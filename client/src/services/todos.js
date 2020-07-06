import axios from "axios";

export const getTodos = async () => {
  const res = await axios.get("/api/todos/get");
  return res.data;
};

export const saveItems = async (data) => {
  await axios.post("/api/todos/post", {
    data,
  });
};
