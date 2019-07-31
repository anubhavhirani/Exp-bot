const Discord = require('discord.js');
const client = new Discord.Client();

const PREFIX = '.';

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message =>{
    
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ping':
            message.channel.send('pong!');
            break;
        case 'youtube':
            message.channel.send('Youtube.com/ExperienceYT')
            break;
        case 'clear' :
            if(!args[1]) return message.reply('Please mention number of messages to delete')
            message.channel.bulkDelete(args[1]);
            break;
        
    }
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

