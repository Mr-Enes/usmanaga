const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ intents: 98303 });
const config = require('./config.json');

//Prefix Ayarlama
var prefix = config.prefix


//Ready.js
client.on('ready', () => {
  console.log(`${client.user.tag} Çevirimiçi !`);
  client.user.setStatus('dnd');
  client.user.setActivity('Safiyeyle');
});

//Sa-As Komutu
client.on('messageCreate', message => {
  if(message.content.toLowerCase() === 'sa') {
    message.channel.send(`${message.author} Aleykümselam Hoşgeldin !`)
  };
});

//Yardım Menüsü
client.on('messageCreate', message => {
  
    var yardım = new MessageEmbed()
    .setTitle("Yardım Menüsü")
    .setColor("#ff0000")
    .setDescription("Yardım Menüsü Çalışıyor :) ")
    .setThumbnail(`${message.author.avatarURL()}`)
    .setTimestamp()

if(message.content === prefix + 'yardım') {
    message.channel.send({ embeds: [yardım] })
  };
});

//Bot Giriş
client.login(config.token);
