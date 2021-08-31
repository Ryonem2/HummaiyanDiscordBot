const Discord = require("discord.js");
const client = new Discord.Client();
const { token, prefix } = require("./auth.json");
const queue = new Map();
const ytdl = require("ytdl-core");

const activeMsg = require("./activeMsg");
const calc = require("./calc");
// const openMusic = require("./openMusic");

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("#help | Camtsch", {
    type: "PLAYING",
  });
});

client.on("message", (msg) => {
  activeMsg(msg);
  calc(msg);
});

client.login(token);
