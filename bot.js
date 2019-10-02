const Discord = require('discord.js');
const client = new Discord.Client();

const PREFIX = '.';
const voiceChannelToMoveFromId = '628940183735238676'
const Jeetoh = '628940183735238676'
const voiceChannelToMoveToId = '628939897742295063'
const moveerAdminTextChannelId = '629032504644599809' // Don't change this after you've added the correct channel
let autoMoveEnabled = false
let JeetohMoveEnabled = false

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('voiceStateUpdate', (oldUser, newUser) => {
    if (!autoMoveEnabled) return
    if (!JeetohMoveEnabled) return
    if (newUser.voiceChannelID === voiceChannelToMoveFromId) client.channels.get(moveerAdminTextChannelId).send('!cmove ' + voiceChannelToMoveToId + ' <@' + newUser.id + '>') // Don't change anything after client.channels
    if (newUser.voiceChannelID === Jeetoh) client.channels.get(moveerAdminTextChannelId).send('!cmove ' + voiceChannelToMoveToId + ' <@' + newUser.id + '>')
}) 

client.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");

    if (args[0] === '1-lock') {
        autoMoveEnabled = true
        message.channel.send('Automoving activated')
    }
    if (args[0] === '1-unlock') {
        autoMoveEnabled = false
        message.channel.send('Automoving disabled')
    }
   
    if (args[0] === 'jeetoh-lock') {
        JeetohMoveEnabled = true
        message.channel.send('Automoving activated')
    }
    if (args[0] === 'jeetoh-unlock') {
        JeetohMoveEnabled = false
        message.channel.send('Automoving disabled')
    }

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
        case 'DeHu':
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
