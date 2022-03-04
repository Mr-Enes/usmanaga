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

//Yardım Komutu
client.on('messageCreate', async message => {
  if(message.content.toLowerCase() === 'yardım') {

    const yardım = new Discord.MessageEmbed()
    .setTitle("Yardım Menüsü")
    .setColot(ff0000)
    .setDescription("Yardım Menüsü Çalişür")
    .addTimestamp()

    message.channel.send({ embeds: [yardım] });
};
});

//Bot Giriş
client.login('OTQ2MDIzMTQ2ODU3ODI4MzUy.YhYqtg.kIjXKatPspmp9uMXNKlOHODC5xk');
