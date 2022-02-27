const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', () => {
  console.log(`${client.user.tag} Çevirimiçi !`);
  client.user.setStatus('online');
});

client.on('messageCreate', message => {
  if(message.content.toLowerCase() === "sa") {
    message.channel.send(`${message.author} Aleykümselam Hoşgeldin !`);
  };
});

client.on('messageCreate', message => {
  if(message.content.toLowerCase() === '!yardım') {

    let yardım = new Discord.MessageEmbed()
    .setTitle('Yardım Menüsü')
    .setColor('#ffffff')
    .setDescription('Merhaba!')
    .setTimestamp()

    message.channel.send({embeds: [yardım]});
  };
});

client.login('OTQ2MDIzMTQ2ODU3ODI4MzUy.YhYqtg.kIjXKatPspmp9uMXNKlOHODC5xk');
