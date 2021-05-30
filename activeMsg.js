const Discord = require("discord.js");

const showEmbed = require("./showEmbed");
const showEmbed64 = require("./showEmbed64");
const showEmbed65 = require("./showEmbed65");

module.exports = (msg) => {
    let lowmsg = msg.content.toLowerCase()
    if (lowmsg === "hello") {
        msg.reply("Hello!");
      }
      if (lowmsg === "showmyavatar") {
        msg.reply(msg.author.displayAvatarURL());
      }
      if (lowmsg === "kuy") {
        msg.channel.send("ควยไรอะ");
      }
      if (lowmsg === "#help") {
        msg.channel.send("You can ask CamtSchdule - CamtSchdule64 - CamtSchdule65");
      }
      if (msg.content === "camtschdule") {
        showEmbed(msg);
      }
      if (msg.content === "camtsch") {
        showEmbed(msg);
      }
      if (msg.content === "camtschdule64") {
        showEmbed64(msg);
      }
      if (msg.content === "camtsch64") {
        showEmbed64(msg);
      }
      if (msg.content === "camtschdule65") {
        showEmbed65(msg);
      }
      if (msg.content === "camtsch65") {
        showEmbed65(msg);
      }
}