const Discord = require("discord.js");
// const client = new Discord.Client();
// const auth = require('./auth.json');
//https://imgur.com/a/GfuTZME

module.exports = (msg) => {
    const emb = new Discord.MessageEmbed()
       .setTitle("All Command Here")
       .setColor('#0099ff')
       .setAuthor('Maiyai Command','https://i.imgur.com/W0SR6Rr.jpg')
    //    .setThumbnail('https://i.imgur.com/W0SR6Rr.jpg')
       .addField('Watch Schedule Type',"```"+ 'CamtSchedule / Camtsch'+"```")
       .addField('PlayMusic', "```"+'#play [any youtube link]'+"```",true)
       .addField('Stop n Skip', "```"+'#stop/#skip'+"```",true)
       .addField('View Incoming Class', "```"+'Class?'+"```",true)
       .addField('View Bot Source', "```"+'Sourcecode'+"```",true)
       .setTimestamp()
       .setFooter('Updated Since 31/5/2021')
       console.log(`sent help request by ${msg.author}`);
   msg.channel.send(emb);
}