const Discord = require("discord.js");
const client = new Discord.Client();
const auth = require("./auth.json");

const activeMsg = require("./activeMsg");
const openMusic = require("./openMusic");

client.on("ready", () => {
  console.log("Bot Actived");
});
client.on("message", (msg) => {
  activeMsg(msg);
});
client.on("message", async (message) => {
  if (!message.guild) return;
  x = message.content;
  a = x.split(" ");
  if (a[0] === "bot") {
    if (message.member.voice.channel) {
      openMusic(message);

    } else {
      message.reply("You need to join a voice channel first!");
    }
  }
  if (message.content === "#join") {
      // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voice.channel) {
      //https://www.youtube.com/watch?v=IZh7oUAOY9U
      await message.member.voice.channel.join();
    } else {
      message.reply("You need to join a voice channel first!");
    }
  }

  if (message.content === "#leave") {
    if (message.member.voice.channel) {
      await message.member.voice.channel.leave();
    } else {
      message.reply("You need to join a voice channel first!");
    }
  }
});
client.login(auth.token);
