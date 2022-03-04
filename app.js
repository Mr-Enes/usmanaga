const { Client, Intents } = require('discord.js');
const client = new Client({ intents: 98303 });

//Ready.js
client.on('ready', () => {
  console.log(`${client.user.tag} Çevirimiçi !`);
  client.user.setActivity(`Safiyeyi`, {type: "WATCHING"});
  client.user.setStatus("idle");
});

//SA-AS KOMUTU
client.on('messageCreate', message => {
  if(message.content.toLowerCase() === "sa") {
    message.channel.send(`${message.author} Aleykümselam Hoşgeldin !`);
  };
});

//KOMİK KOMUTLAR #1
client.on('messageCreate', message => {
  if(message.content.toLowerCase() === "usmanım") {
    message.channel.send(`${message.author} bRe SuSaK Sen Ne DeRSıN ?!`);
  };
});

//PİNG KOMUTU
client.on('messagecreate', message => {
  if(message.content === "ping") {

    const ping = new Discord.MessageEmbed()
    .setTitle("Ping")
    .setDescription("Gecikme Sürem: (client.ws.ping)ms")
    .setColor(ff00000)

    message.channel.send({ embeds : [ping] });
  };
});

//Bot Giriş
client.login('OTQ2MDIzMTQ2ODU3ODI4MzUy.YhYqtg.kIjXKatPspmp9uMXNKlOHODC5xk');
