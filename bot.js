const Discord = require("discord.js");
const client = new Discord.Client();
const auth = require("./auth.json");
const ytdl = require("ytdl-core");

const activeMsg = require("./activeMsg");

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
      //https://www.youtube.com/watch?v=IZh7oUAOY9U
      const connection = await message.member.voice.channel.join();
      const dispatcher = connection.play(ytdl(a[1], { filter: "audioonly" }), {
        volume: 0.5,
      });
      if (message.content === "#stop") {
        dispatcher.pause();
      }
      if (message.content === "#resume") {
        dispatcher.resume();
      }
      dispatcher.on("finish", () => {
        console.log("Finished playing!");
        dispatcher.destroy();
      });
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
