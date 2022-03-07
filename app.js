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
    message.channel.send(`${message.author} Aleykümselam Hojgeldın KıZaNıM :)`);
  };
});

//Usman Aga #1
client.on('messageCreate', message => {
  if(message.content.toLowerCase() === 'usmanımm') {
    message.channel.send(`${message.author} Ne DeRSıN SeN Bre SuSak !`);
  };
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

    if (interaction.commandName === 'ping') {
      await interaction.reply('Pong!'); 
} 
});


//Bot Giriş
client.login(config.token);
