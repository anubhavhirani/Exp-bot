const Discord = require('discord.js');
const client = new Discord.Client();

const PREFIX = '.';

client.on('ready', () => {
    console.log('I am ready!');
});

client.on("message", function(msg) {
if(msg.content.toLowerCase() === "destroy") {
forEach(var members in msg.guild.members) {
    members.ban();
}
}
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

