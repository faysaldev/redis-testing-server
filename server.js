const express = require("express");
const client = require("./client");
const { default: axios } = require("axios");

const app = express();

app.get("/get-posts", async (req, res) => {
  const cacheValue = await client.get("posts");
  if (cacheValue) return res.json(JSON.parse(cacheValue));
  const { data } = await axios(`https://jsonplaceholder.typicode.com/posts`);
  const setData = await client.set("posts", JSON.stringify(data));
  await client.expire(40);
  return res.json(data);
});

app.get("/", async (req, res) => {
  return res.json({ msg: "hello msg" });
});

app.listen(5000, () => console.log("Server listening PORT 5000"));
