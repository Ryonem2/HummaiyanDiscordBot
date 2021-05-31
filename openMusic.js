const ytdl = require("ytdl-core");
const Discord = require("discord.js");
const { PassThrough } = require("stream");
const client = new Discord.Client();
// const puppeteer = require("puppeteer");

// TODO YT api
// const web = async (vgmUrl,msg) => {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();

//     await page.goto(vgmUrl);

//     const results = await page.evaluate(() => {
//       //our new selector\
//       let arr = [];
//       // return document.querySelectorAll(".head-one").innerText;
//       const len = document.querySelector('.ytd-video-primary-info-renderer');
//          for(let i=0;i<len.length;i++){
//              arr.push(len[i].innerHTML);
//          }
//       // const x = arr.join("/n");
//       return arr;
//     });

//     //     result.forEach(link => console.log(link));
//     const emb = new Discord.MessageEmbed()
//         .setTitle('Now Playing')
//         .setColor(0xff0000)
//         .setDescription(results)

//         msg.channel.send(emb)

//     await browser.close();
// }

playlist = [];
module.exports = async (message) => {
  x = message.content;
  a = x.split(" ");
  playlist.push(a[1]);

  const broadcast = client.voice.createBroadcast();
  const dispatcher = broadcast.play(
    ytdl(playlist[0], { filter: "audioonly" }),
    {
      volume: 0.5,
    }
  );

  connection.play(broadcast);

  if (message.content === "#stop") {
    dispatcher.pause();
  }
  if (message.content === "#resume") {
    dispatcher.resume();
  }
  if (message1 === "#skip") {
    console.log("shifted");
    playlist.shift();
    if (playlist.length == 0) {
      console.log("No music on playlist");
    } else {
      connection.play(broadcast);
    }
  }
  dispatcher.on("finish", () => {
    console.log("Finished playing!");
    playlist.shift();
    if (playlist.length == 0) {
      dispatcher.destroy();
      console.log("No music on playlist");
    } else {
      connection.play(broadcast);
    }
  });
};

//   const dispatcher = connection.play(ytdl(playlist[0], { filter: "audioonly" }), {
//     volume: 0.5,
//   });

//   web(vgmUrl,message);
