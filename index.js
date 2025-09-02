const express = require("express");
const client = require("./client");

async function inti(params) {
  const result = await client.mget("name:1", "name:2", "msg:1", "msg:2");
  console.log("Result ", result);
}

inti();

const app = express();

app.listen();
