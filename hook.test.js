// Import the discord.js module
const Discord = require('discord.js');

const hook = new Discord.WebhookClient('848562088096170034', 'yP1kR1bUBoLJfNevtVFbMzpIPIDi_PYP5E0lNOkyG_cEwRT6NXf8pttoKMaxpjOhtNjP');

// Send a message using the webhook
hook.send('I am now alive!');