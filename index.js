const Discord = require("discord.js");
const bot =  [ new Discord.Client(), new Discord.Client()];
const delay = ms => new Promise(res => setTimeout(res, ms));
const auth = [
    "OTQ4MjU4NzQzODg2NDI2MTEy.GpxGpF.1_AoqyTuLwmOaa6fyMZjT3bCJWMWDMQl7qMNCI"
    , "Nzc5Njk4NTY3Njg1NjAzMzM4.Gr3mIZ.xw4DnSG-W3JXhHeHm86VLFsX8vSQT6OuptL8fM"
    ,"OTkxNjc5MzcwOTA3MzYxMzAw.GsAT3y.ASDWW6ug7nEXfTL_ACkPcQYmSh7qww2Om6QvEE"]

const sleep = async (milliseconds) => {
await new Promise(resolve => {
    return setTimeout(resolve,milliseconds);
});
};

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
    if (message.content.startsWith('Подождите 0:59:5') & message.author.id === '891713802096230461' ) {
        setTimeout(() => {
            message.channel.send('ae/attack');
        }, 3600500);  
	};
});
};