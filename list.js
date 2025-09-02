const client = require("./client");

async function inti(params) {
  const result = await client.lpush("withdrawal", 5000);
  const withdrawal = await client.lrange("withdrawal", 0, -1, (err, val) => {
    if (err) return;
    console.log("All the Values", val);
  });
  console.log("Result ", result);
}

inti();
