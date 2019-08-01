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
            message.channel.send('Arre ab mera IIT kaise niklega? unn 2 ladkio ka to ho gaya!');
            break;
        case 'MLA':
            message.channel.send('Babbla bhaiya meri baat to suno?');
            break;
        case 'clear' :
            if(!args[1]) return message.reply('Please mention number of messages to delete')
            message.channel.bulkDelete(args[1]);
            break;
        
    }
});

client.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case 'kick':

            const user = message.mentions.users.first();

            if (user) {
                const member = member.guild.member(user);

                if (member) {
                    member.kick('You were kicked').then(() => {
                        message.reply('Successfully kicked ${user.tag}');
                    }).catch(err => {
                        message.reply('I was unable to kick the member');
                        console.log(err);

                    });
                } else {
                    message.reply("That user isn\'t in this guild")
                }
            } else {
                    message.reply('You need to specify a person')
            }
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
