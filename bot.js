const Discord = require('discord.js');
const client = new Discord.Client();
const PREFIX = '';

const termgen = '564445955252944899'
const termdan = '595318381541064705' 
const termmus = '573709249260290073'   // For Terminus Force
const termmvc = '604997838887452672'
const termgeneral = '630616948618821664'  //Text channel

const confetti = '628940303763767355'
const voiceChannelToMoveFromId = '628940183735238676'
const flipkart = '628940415567134720'
const jeetoh = '628940265511452682'
const mb = '628940223224610816'        // For Trivia Night
const voiceChannelToMoveToId = '628939897742295063'
const moveerAdminTextChannelId = '629032504644599809' 

let autoMoveEnabled = false
let confettiMoveEnabled = false
let flipkartMoveEnabled = false // For Trivia Night
let jeetohMoveEnabled = false
let mbMoveEnabled = false

let termgenMoveEnabled = false
let termdanMoveEnabled = false  // For Terminus Force
let termmusMoveEnabled = false
let termmvcMoveEnabled = false



client.on('ready', () => {
var welcomeChannel = []
try {
    welcomeChannel.push(client.channels.find("name", "welcome"))
}
catch(error) {
    console.log(error)
}

try {
    welcomeChannel.push(client.channels.find("name", "general"))
}
catch(error) {
    console.log(error)
}
for(item in welcomeChannel) {
welcomeChannel[item].send('Hey Experience, I am online!')
}
  console.log('I am ready!');
  client.user.setPresence({
        status:"idle",
        game: {
            type: "PLAYING",
            name : "ExperienceYT on Instagram"
        }
    })
	  
});

client.on('voiceStateUpdate',(oldMember,newMember)=>{
	const channel=oldMember.guild.channels.find(ch=>ch.name==='voice-log');
	if(!channel)return;
	if(oldMember.voiceChannel===undefined&&newMember.voiceChannel!==undefined){
		channel.send(`${newMember} joined ${newMember.voiceChannel} ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })}`);
	}else if(newMember.voiceChannel===undefined){
		channel.send(`${oldMember} left ${oldMember.voiceChannel} ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })}`);
	}
});

client.on('voiceStateUpdate', (oldUser, newUser) => {
    if (newUser.voiceChannelID === voiceChannelToMoveFromId && autoMoveEnabled) client.channels.get(moveerAdminTextChannelId).send('!cmove ' + voiceChannelToMoveToId + ' <@' + newUser.id + '>') // Don't change anything after client.channels
    if (newUser.voiceChannelID === confetti && confettiMoveEnabled) client.channels.get(moveerAdminTextChannelId).send('!cmove ' + voiceChannelToMoveToId + ' <@' + newUser.id + '>')
    if (newUser.voiceChannelID === flipkart && flipkartMoveEnabled) client.channels.get(moveerAdminTextChannelId).send('!cmove ' + voiceChannelToMoveToId + ' <@' + newUser.id + '>')
    if (newUser.voiceChannelID === jeetoh && jeetohMoveEnabled) client.channels.get(moveerAdminTextChannelId).send('!cmove ' + voiceChannelToMoveToId + ' <@' + newUser.id + '>')
    if (newUser.voiceChannelID === mb && mbMoveEnabled) client.channels.get(moveerAdminTextChannelId).send('!cmove ' + voiceChannelToMoveToId + ' <@' + newUser.id + '>')

    if (newUser.voiceChannelID === termdan && termmvcMoveEnabled) client.channels.get(termgeneral).send('!cmove ' + termgen + ' <@' + newUser.id + '>')
    if (newUser.voiceChannelID === termgen && termgenMoveEnabled) client.channels.get(termgeneral).send('!cmove ' + termgen + ' <@' + newUser.id + '>')
    if (newUser.voiceChannelID === termmus && termdanMoveEnabled) client.channels.get(termgeneral).send('!cmove ' + termgen + ' <@' + newUser.id + '>')
    if (newUser.voiceChannelID === termmvc && termmusMoveEnabled) client.channels.get(termgeneral).send('!cmove ' + termgen + ' <@' + newUser.id + '>')
}) 

client.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");

    if(message.channel.name === "moveeradmin"){

    if (args[0].toLowerCase() === 'llock') {
        autoMoveEnabled = true
        message.channel.send('LOCO Automoving activated')
    }
    if (args[0].toLowerCase() === 'lunlock') {
        autoMoveEnabled = false
        message.channel.send('LOCO Automoving disabled')
    }
    if (args[0].toLowerCase() === 'clock') {
        confettiMoveEnabled = true
        message.channel.send('Confetti Automoving activated')
    }
    if (args[0].toLowerCase() === 'cunlock') {
        confettiMoveEnabled = false
        message.channel.send('Confetti Automoving disabled')
    }
    if (args[0].toLowerCase() === 'flock') {
        flipkartMoveEnabled = true
        message.channel.send('Flipkart Automoving activated')
    }
    if (args[0].toLowerCase() === 'funlock') {
        flipkartMoveEnabled = false
        message.channel.send('Flipkart Automoving disabled')
    }
    if (args[0].toLowerCase() === 'mblock') {
        mbMoveEnabled = true
        message.channel.send('100MB Automoving activated')
    }
    if (args[0].toLowerCase() === 'mbunlock') {
        mbMoveEnabled = false
        message.channel.send('100MB Automoving disabled')
    }
    if (args[0].toLowerCase() === 'jlock') {
        jeetohMoveEnabled = true
        message.channel.send('Jeetoh Automoving activated')
    }
    if (args[0].toLowerCase() === 'junlock') {
        jeetohMoveEnabled = false
        message.channel.send('Jeetoh Automoving disabled')
    }
    if (args[0].toLowerCase() === 'vclock') {
        jeetohMoveEnabled = true
        autoMoveEnabled = true
        confettiMoveEnabled = true
        flipkartMoveEnabled = true
        mbMoveEnabled = true
        message.channel.send('All Voice Channels Locked to Entry Room')
    }
    if (args[0].toLowerCase() === 'vcunlock') {
        jeetohMoveEnabled = false
        autoMoveEnabled = false
        confettiMoveEnabled = false
        flipkartMoveEnabled = false
        mbMoveEnabled = false
        message.channel.send('All Voice Channels Unlocked')
    }
    if (args[0].toLowerCase() === 'ltoe') {
        message.channel.send('!fmove LOCO "Entry Room"')
    }
    if (args[0].toLowerCase() === 'ctoe') {
        message.channel.send('!fmove CONFETII "Entry Room"')
    }
    if (args[0].toLowerCase() === 'jtoe') {
        message.channel.send('!fmove JEETOH "Entry Room"')
    }
    if (args[0].toLowerCase() === 'ftoe') {
        message.channel.send('!fmove FLIPKART "Entry Room"')
    }
    if (args[0].toLowerCase() === 'mbtoe') {
        message.channel.send('!fmove 100MB "Entry Room"')
    }
    if (args[0].toLowerCase() === 'etol') {
        message.channel.send('!fmove "Entry Room" LOCO')
    }
    if (args[0].toLowerCase() === 'etoc') {
        message.channel.send('!fmove "Entry Room" CONFETII')
    }
    if (args[0].toLowerCase() === 'etof') {
        message.channel.send('!fmove "Entry Room" FLIPKART')
    }
    if (args[0].toLowerCase() === 'etoj') {
        message.channel.send('!fmove "Entry Room" JEETOH')
    }
    if (args[0].toLowerCase() === 'etomb') {
        message.channel.send('!fmove "Entry Room" 100MB')
    }
    if (args[0].toLowerCase() === 'moveall') {
        message.channel.send('!tmove 628939897742295063 "Trivia Family!"')
    }}

    if(message.channel.name === "moveeradmin"){

    if (args[0].toLowerCase() === 'tvclock') {
        termdanMoveEnabled = true
        termmusMoveEnabled = true
        termmvcMoveEnabled = true
        message.channel.send('All Voice Channels Locked to 🔊STUDY ROOM🔊')
    }
    if (args[0].toLowerCase() === 'tvcunlock') {
        termmvcMoveEnabled = false
        termmusMoveEnabled = false
        termdanMoveEnabled = false
        message.channel.send('All Voice Channels Unlocked')
    }
    if (args[0].toLowerCase() === 'tmoveall') {
        message.channel.send('!tmove 564445955252944899 CUSTOMER')
    }}


    switch (args[0].toLowerCase()) {

        case 'ping':
            message.channel.send('pong!');
            break;

        case 'clear':
            if (!args[1]) return message.reply('Please mention number of messages to delete')
            message.channel.bulkDelete(args[1]);
            break;
            
        case 'help':
                if(message.channel.name === "general"){
            const embed = {
                "title": "VC Mover by Experience!",
                 "name": " `Default prefix is set to '.'` ",
                    "description": " Here are all the commands for your server: ",
                    "color": 16773632,
                    "thumbnail": {
                      "url": "https://cdn.discordapp.com/attachments/629032504644599809/630217087666618408/icon-2382008_960_720.png"
                    },
                    "fields": [
                      {
                        "name": " `tvclock:` ",
                        "value": "Locks all voice channels, leaving main VC."
                      },
                      {
                        "name": " `tvcunlock:` ",
                        "value": "Unlocks all voice channels."
                      },
                      {
                        "name": " `tmoveall:`  ",
                        "value": "Moves users from all voice channels to main VC."
                      }
                    ]
                  };
                  message.channel.send({embed});
            break;    
    }}

});

// THIS MUST BE THIS WAY

client.login(process.env.BOT_TOKEN);
