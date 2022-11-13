const Discord = require("discord.js");
const bot =  [ new Discord.Client(), new Discord.Client()];
const config = require("./config.json")
const delay = ms => new Promise(res => setTimeout(res, ms));
const auth = [config.token, config.token2,config.token3]

for (const token of auth) {
    const bot = new Discord.Client()

    bot.on("ready", async() =>{console.log(`${bot.user.tag} has logged in`)})
    
    bot.login(token);

    bot.on("message", (message) => {
    if (message.isMemberMentioned(bot.user) & (message.author.id === '891713802096230461' || message.author.id === '948258743886426112')) {
        setTimeout(() => {
            message.channel.send('ae/attack');
        }, 3050);  
	};
    if (message.content.startsWith('Подождите') & message.author.id === '891713802096230461' ) {
        setTimeout(() => {
            message.channel.send('ae/attack');
        }, 3600500);  
	};
});
};