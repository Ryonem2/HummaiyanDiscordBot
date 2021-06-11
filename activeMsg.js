const showEmbed = require("./showEmbed");
const showEmbed64 = require("./showEmbed64");
const showEmbed65 = require("./showEmbed65");
const help = require('./embedHelp');
const displayClass = require('./displayFutureClass');
const queue = new Map();

module.exports = (msg) => {
    let lowmsg1 = msg.content;
    let lowmsg = lowmsg1.toLowerCase();
    if (lowmsg === "hello") {
        msg.reply("Hello!");
      }
      if (lowmsg === "test") {
        console.log(queue.get(msg.guild.id));
      }
      if (lowmsg === "showmyavatar") {
        msg.reply(msg.author.displayAvatarURL());
        console.log(`avatar called request by ${msg.author}`);
      }
      if (lowmsg === "kuy") {
        msg.channel.send("ควยไรอะ :full_moon:");
        console.log(`kuy called request by ${msg.author}`);
      }
      if (lowmsg === "sourcecode") {
        msg.channel.send("https://github.com/Ryonem2/HummaiyanDiscordBot");
      }
      if (lowmsg === "classschedule"){
        msg.channel.send("https://o365cmu-my.sharepoint.com/:x:/g/personal/theerakarn_maiw_cmu_ac_th/EVTbAsh2vw9MmT66yLjcfSUBE5NNp5_R-RYgrK7CM9gKEw?e=oycy0n");
      }
      if (lowmsg === "#help") {
        help(msg);
      }
      if (lowmsg === "camtschedule") {
        showEmbed(msg);
        console.log(`avatar called request by ${msg.author}`);
      }
      if (lowmsg === "class?") {
        console.log(`Class called request by ${msg.author}`);
        displayClass(msg);
      }
      if (lowmsg === "camtsch") {
        console.log(`schedule called request by ${msg.author}`);
        showEmbed(msg);
      }
      if (lowmsg === "camtschedule64") {
        console.log(`schedule64 called request by ${msg.author}`);
        showEmbed64(msg);
      }
      if (lowmsg === "camtsch64") {
        console.log(`schedule64 called request by ${msg.author}`);
        showEmbed64(msg);
      }
      if (lowmsg === "camtschedule65") {
        console.log(`schedule65 called request by ${msg.author}`);
        showEmbed65(msg);
      }
      if (lowmsg === "camtsch65") {
        console.log(`schedule65 called request by ${msg.author}`);
        showEmbed65(msg);
      }
}