const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjA1OTUwMjk3NTg3NzEyMDAw.XUD_2A.RMopYNM6ow2iv1Bt6CcBcfe2XV4';

const PREFIX = '.';

bot.on('ready', () =>{ 
    console.log('Your bot is online!');
    bot.user.setActivity('ExperienceYT on YouTube!');

})

bot.on('message', message =>{
    
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
})

client.login(process.env.BOT_TOKEN);
