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
 client.user.setPresence({ watching: { name: 'with discord' }, status: 'online' })
  .then(console.log)
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

        case 'clear':
            if (!args[1]) return message.reply('Please mention number of messages to delete')
            message.channel.bulkDelete(args[1]);
            break;
    }

    exports.run = async (bot, message, args) => {
        let commandSize = 0
        let embed = new Discord.RichEmbed().setColor("RANDOM")
    
        if (!args[0]) {
            let categories =
                bot.commands
                    .map(c => c.command.category)
                    .reduce((a, b) => {
                        if (a.indexOf(b) < 0) a.push(b)
                        return a
                    }, []).sort()
    
            embed.setAuthor("Commands List", message.author.avatarURL)
            categories.forEach(c => {
                let commands = bot.commands.filter(
                    command => command.command.category == c
                )
                commands = commands.map(cmd => cmd.command.name)
                if (commands.length <= 0) return;
                commandSize += commands.length
                embed.addField(c, `\`${commands.sort().join("`, `")}\``)
            })
            embed.setFooter(`Total commands: ${commandSize}`)
    
            return message.channel.send(embed)
        } else {
            let command = bot.commands.get(args[0])
            if (!command) return message.reply("Cant find this command, sorry!")
            command = command.command
            embed.setAuthor(`Command help for ${command.name}`, message.author.avatarURL)
            embed.setDescription(command.description)
            if (command.aliases.length >= 1) embed.addField("Aliases", `\`${command.aliases.join("`, `")}\``)
            if (command.usage != null) embed.addField("Usage", command.usage)
    
            return message.channel.send(embed)
        }
};

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
