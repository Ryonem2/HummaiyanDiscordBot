const ytdl = require("ytdl-core");
const puppeteer = require("puppeteer");

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

module.exports = async (message) => {
  x = message.content;
  a = x.split(" ");
//   const vgmUrl = a[1];

  const connection = await message.member.voice.channel.join();
  const dispatcher = connection.play(ytdl(a[1], { filter: "audioonly" }), {
    volume: 0.5,
  });

//   web(vgmUrl,message);

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
};
