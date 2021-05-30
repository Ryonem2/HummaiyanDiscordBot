const showEmbed = require("./showEmbed");
const showEmbed64 = require("./showEmbed64");
const showEmbed65 = require("./showEmbed65");

module.exports = (msg) => {
    let lowmsg1 = msg.content;
    let lowmsg = lowmsg1.toLowerCase();
    if (lowmsg === "hello") {
        msg.reply("Hello!");
      }
      if (lowmsg === "showmyavatar") {
        msg.reply(msg.author.displayAvatarURL());
      }
      if (lowmsg === "kuy") {
        msg.channel.send("ควยไรอะ");
      }
      if (lowmsg === "sourcecode") {
        msg.channel.send("https://github.com/Ryonem2/HummaiyanDiscordBot");
      }
      if (lowmsg === "#help") {
        msg.channel.send("You can ask CamtSchdule - CamtSchdule64 - CamtSchdule65");
      }
      if (lowmsg === "camtschedule") {
        showEmbed(msg);
      }
      if (lowmsg === "camtsch") {
        showEmbed(msg);
      }
      if (lowmsg === "camtschedule64") {
        showEmbed64(msg);
      }
      if (lowmsg === "camtsch64") {
        showEmbed64(msg);
      }
      if (lowmsg === "camtschedule65") {
        showEmbed65(msg);
      }
      if (lowmsg === "camtsch65") {
        showEmbed65(msg);
      }
}
