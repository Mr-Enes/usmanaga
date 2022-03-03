const { Client, Intents } = require('discord.js');
const client = new Client({ intents: 32767 });

//Ready.js
client.on('ready', () => {
  console.log(`${client.user.tag} Çevirimiçi !`);
  client.user.setStatus('dnd');
  client.user.setActivity(`Safiyeyi`, {type: "WATCHING"});
});

//SA-AS KOMUTU
client.on('messageCreate', message => {
  if(message.content.toLowerCase() === "sa") {
    message.channel.send(`${message.author} Aleykümselam Hoşgeldin !`);
  };
});

//KOMİK KOMUTLAR #1
client.on('messageCreate', message => {
  if(message.content.toLowerCase() === "UsMaNıMM") {
    message.channel.send(`${message.author} bRe SuSaK Sen Ne DeRSıN ?!`);
  };
});

//Bot Giriş
client.login('OTQ2MDIzMTQ2ODU3ODI4MzUy.YhYqtg.kIjXKatPspmp9uMXNKlOHODC5xk');
