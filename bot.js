const Discord = require('discord.js');
const client = new Discord.Client();

const PREFIX = '.';

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case 'ping':
            message.channel.send('pong!');
            break;
        case 'youtube':
            message.channel.send('Youtube.com/ExperienceYT')
            break;
        case 'terminus':
            message.channel.send('Terminus is a good boy!');
            break;
        case 'shoonya':
            message.channel.send('Shoonya bhai ki jay ho!');
            break;
        case 'noob':
            message.channel.send('babbla bhaiya hi noob hai!');
            break;
        case 'rohit':
            message.channel.send('Photo to dikha bhai!');
            break;
        case 'MLA':
            message.channel.send('Arre meri baat to suno!');
            break;
        case 'clear':
            if (!args[1]) return message.reply('Please mention number of messages to delete')
            message.channel.bulkDelete(args[1]);
            break;
        case 'boss':
            message.channel.send('Bhadwoss hai ye to!');
            break;
        case 'nav':
            message.channel.send('Oye saale kya bola mujhe, main sardar hu isme meri galti nahi hai!');
            break;
        case '.DeHu':
            message.channel.send('Main hi CS:GO hacker hu aimbot chalata hu AWP pe!');
            break;
    }
});


client.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case 'kick':

            const user = message.mentions.users.first();

            if(user){
                const member = member.guild.member(user);

                if(member){
                    member.kick('You were kicked!').then(() =>{
                        message.reply('Successfully kicked ${user.tag}');
                    }).catch(err =>{
                        message.reply('I was unable to kick the member');
                        console.log(err);

                    });
                } else {
                    message.reply("That user isn\'t in this guild")
                }
            } else {
                    message.reply('You need to specify a person')
            }

            break;
    }


});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
