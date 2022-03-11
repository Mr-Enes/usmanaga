const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ intents: 98303 });
const config = require('./config.json');

//Prefix Ayarlama
var prefix = config.prefix

//Bot-Sunucu ID
const clientId = '946023146857828352';
const guildId = '949050494209392710';

//Ready.js
client.on('ready', () => {
  console.log(`${client.user.tag} Çevirimiçi !`);
  client.user.setPresence({ activities: [{ name: `Safiye ile`, type: "PLAYING" }], status: 'dnd' });
  //Slash Commands
  const guild = client.guilds.cache.get(guildId);
  let commands
  if (guild) {
    commands = guild.commands
  } else {
    commands = client.application?.commands
  }
  commands?.create({
    name: "sa",
    description: "Usman Agaya Selam Verirsin."
  });
});

//Slash Command - 1
client.on('interactionCreate', async interaction => {
  if(!interaction.isCommand()) return;
  if(interaction.commandName === 'sa') {
    await interaction.reply("Aleykümselam KıZaNıM Hojgeldın :)");
  };
});

//Sa-As Komutu
client.on('messageCreate', message => {
  if(message.content.toLowerCase() === 'sa') {
    message.channel.send(`${message.author} Aleykümselam KıZaNıM Hojgeldın :)`);
  };
});

//Botu Sesliye Sokma Komutu
client.on('messageCreate', message => {
	if(message.content.toLowerCase() === prefix + 'join') {
    message.channel.send(`Bre SuSak Ararım Nie Açmassın ?`);
		const { joinVoiceChannel } = require('@discordjs/voice');
		const connection = joinVoiceChannel({
			channelId: message.member.voice.channel.id,
			guildId: message.guild.id,
			adapterCreator: message.guild.voiceAdapterCreator,
		});
	};
});

//Bot Giriş
client.login(config.token);
