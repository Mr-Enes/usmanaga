const { Client, Intents } = require('discord.js');
const client = new Client({ intents: 32767 });

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
  if(message.content === 'yardım') {

    const embedMessage = new MessageEmbed()
    .setTitle('Yardım Menüsü')
    .setColor('#ffffff')
    .setDescription('Selamke')
    
    message.channel.send({ embeds: [embedMessage] });
  };
});

client.login('OTQ2MDIzMTQ2ODU3ODI4MzUy.YhYqtg.kIjXKatPspmp9uMXNKlOHODC5xk');
