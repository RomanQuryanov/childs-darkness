const Discord = require("discord.js");
//const bot =  [ new Discord.Client(), new Discord.Client(),new Discord.Client(),new Discord.Client(),new Discord.Client(),new Discord.Client(),new Discord.Client()];
const delay = ms => new Promise(res => setTimeout(res, ms));
const auth = [
    "OTQ4MjU4NzQzODg2NDI2MTEy.GpxGpF.1_AoqyTuLwmOaa6fyMZjT3bCJWMWDMQl7qMNCI"
    , "Nzc5Njk4NTY3Njg1NjAzMzM4.Gr3mIZ.xw4DnSG-W3JXhHeHm86VLFsX8vSQT6OuptL8fM"
    ,"MTA0MTU3Nzk4OTYwMDcxNDgxMg.GxyD6X.rZXcfVls--g5tIGmxpGjp-KUlLGMn9WZtYzUpQ"
,"MTA0MTU4NDQ3NjM4MTI2NTk1MA.GIUuyk.-tLPnlazbIocsWDDRefmJQNzevVLXBSOvtJKEs"
,"MTA0MTU4MTMyNzQ2NTU4MjYwNA.GgXosl.6-XSoP0y874zlH7CV-KC1B2gZ5MuTpf4bVMzoI"
,"OTkxNjc5MzcwOTA3MzYxMzAw.GOrk7z.taVhH0lQiStXcEksUxPwH7WafkcCfcffuLfVfc"]//токены

const sleep = async (milliseconds) => {
await new Promise(resolve => {
    return setTimeout(resolve,milliseconds);
});
};

for (const token of auth) {
    const bot = new Discord.Client()

    bot.on("ready", async() =>{console.log(`${bot.user.tag} has logged in`)})
    
    bot.login(token);

    bot.on("message", (message) => {//пинганите что бы он использовал ae/attack и он будет его использовать пока не появиться кд
    if (message.isMemberMentioned(bot.user) & (message.author.id === '891713802096230461' || message.author.id === '948258743886426112')) {
        setTimeout(() => {
            message.channel.send('ae/attack');
        }, 3050);  
	};
    if (message.content.startsWith('Подождите 0:59:5') & message.author.id === '891713802096230461' ) {//кд 1 час
        setTimeout(() => {
            message.channel.send('ae/attack');
        }, 3600500);  
	};
    if (message.content.startsWith('Подождите 0:04:5') & message.author.id === '891713802096230461' ) {//кд 5 минут
        setTimeout(() => {
            message.channel.send('ae/attack');
        }, 300000);  
	};
});
};