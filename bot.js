const Discord = require('discord.js');
const client = new Discord.Client();

const PREFIX = '.';
const voiceChannelToMoveFromId = '628940183735238676'
const confetti = '628940303763767355'
const flipkart = '628940415567134720'
const jeetoh = '628940265511452682'
const mb = '628940223224610816'
const voiceChannelToMoveToId = '628939897742295063'
const moveerAdminTextChannelId = '629032504644599809' // Don't change this after you've added the correct channel

let autoMoveEnabled = false
let confettiMoveEnabled = false
let flipkartMoveEnabled = false
let jeetohMoveEnabled = false
let mbMoveEnabled = false

client.on('ready', () => {
  console.log('I am ready!');
  client.user.setActivity('YouTube', { type: 'WATCHING' })
  .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : 'none'}`))
  .catch(console.error);
})

client.on('voiceStateUpdate', (oldUser, newUser) => {
    if (newUser.voiceChannelID === voiceChannelToMoveFromId && autoMoveEnabled) client.channels.get(moveerAdminTextChannelId).send('!cmove ' + voiceChannelToMoveToId + ' <@' + newUser.id + '>') // Don't change anything after client.channels
    if (newUser.voiceChannelID === confetti && confettiMoveEnabled) client.channels.get(moveerAdminTextChannelId).send('!cmove ' + voiceChannelToMoveToId + ' <@' + newUser.id + '>')
    if (newUser.voiceChannelID === flipkart && flipkartMoveEnabled) client.channels.get(moveerAdminTextChannelId).send('!cmove ' + voiceChannelToMoveToId + ' <@' + newUser.id + '>')
    if (newUser.voiceChannelID === jeetoh && jeetohMoveEnabled) client.channels.get(moveerAdminTextChannelId).send('!cmove ' + voiceChannelToMoveToId + ' <@' + newUser.id + '>')
    if (newUser.voiceChannelID === mb && mbMoveEnabled) client.channels.get(moveerAdminTextChannelId).send('!cmove ' + voiceChannelToMoveToId + ' <@' + newUser.id + '>')
}) 

client.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");

    if(message.channel.name === "moveeradmin"){

    if (args[0] === 'llock') {
        autoMoveEnabled = true
        message.channel.send('LOCO Automoving activated')
    }
    if (args[0] === 'lunlock') {
        autoMoveEnabled = false
        message.channel.send('LOCO Automoving disabled')
    }
    if (args[0] === 'clock') {
        confettiMoveEnabled = true
        message.channel.send('Confetti Automoving activated')
    }
    if (args[0] === 'cunlock') {
        confettiMoveEnabled = false
        message.channel.send('Confetti Automoving disabled')
    }
    if (args[0] === 'flock') {
        flipkartMoveEnabled = true
        message.channel.send('Flipkart Automoving activated')
    }
    if (args[0] === 'funlock') {
        flipkartMoveEnabled = false
        message.channel.send('Flipkart Automoving disabled')
    }
    if (args[0] === 'mblock') {
        mbMoveEnabled = true
        message.channel.send('100MB Automoving activated')
    }
    if (args[0] === 'mbunlock') {
        mbMoveEnabled = false
        message.channel.send('100MB Automoving disabled')
    }
    if (args[0] === 'jlock') {
        jeetohMoveEnabled = true
        message.channel.send('Jeetoh Automoving activated')
    }
    if (args[0] === 'junlock') {
        jeetohMoveEnabled = false
        message.channel.send('Jeetoh Automoving disabled')
    }
    if (args[0] === 'vclock') {
        jeetohMoveEnabled = true
        autoMoveEnabled = true
        confettiMoveEnabled = true
        flipkartMoveEnabled = true
        mbMoveEnabled = true
        message.channel.send('All Voice Channels Locked to Entry Room')
    }
    if (args[0] === 'vcunlock') {
        jeetohMoveEnabled = false
        autoMoveEnabled = false
        confettiMoveEnabled = false
        flipkartMoveEnabled = false
        mbMoveEnabled = false
        message.channel.send('All Voice Channels Unlocked')
    }
    if (args[0] === 'ltoe') {
        message.channel.send('!fmove LOCO "Entry Room"')
    }
    if (args[0] === 'ctoe') {
        message.channel.send('!fmove CONFETII "Entry Room"')
    }
    if (args[0] === 'jtoe') {
        message.channel.send('!fmove JEETOH "Entry Room"')
    }
    if (args[0] === 'ftoe') {
        message.channel.send('!fmove FLIPKART "Entry Room"')
    }
    if (args[0] === 'mbtoe') {
        message.channel.send('!fmove 100MB "Entry Room"')
    }
    if (args[0] === 'etol') {
        message.channel.send('!fmove "Entry Room" LOCO')
    }
    if (args[0] === 'etoc') {
        message.channel.send('!fmove "Entry Room" CONFETII')
    }
    if (args[0] === 'etof') {
        message.channel.send('!fmove "Entry Room" FLIPKART')
    }
    if (args[0] === 'etoj') {
        message.channel.send('!fmove "Entry Room" JEETOH')
    }
    if (args[0] === 'etomb') {
        message.channel.send('!fmove "Entry Room" 100MB')
    }
    if (args[0] === 'moveall') {
        message.channel.send('!tmove 628939897742295063 "Trivia Family!"')
    }}

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
