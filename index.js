const server = require("./server.js")
const Discord = require("discord.js-selfbot-v13");
//const { Client, GatewayIntentBits, Partials } = require('discord.js-selfbot');
//const bot =  [ new Discord.Client(), new Discord.Client(),new Discord.Client(),new Discord.Client(),new Discord.Client(),new Discord.Client(),new Discord.Client()];
//const delay = ms => new Promise(res => setTimeout(res, ms));
var kakoy_bot;
var currentdate = new Date;
const auth = [
  "OTQ4MjU4NzQzODg2NDI2MTEy.G8Wh2h.EY-X5aZ-QE7w3DNrc-VveWaaDm1J4aCqWSy0jM"
  , "OTkxNjc5MzcwOTA3MzYxMzAw.GXDc3X.yOe1rNVj8CDhJgthgH6B4KRop14-7N1cDbNfWA"
  , "Nzc5Njk4NTY3Njg1NjAzMzM4.GDmkiM.wBzoQqR4t0P7SnfhJfEwy68pIHG0KAfMkZScPc"
  , "MTA0MTU3Nzk4OTYwMDcxNDgxMg.GQNrR4._xY9BKiKT_LEb6sSWVgGREDQDeiIO7UWa8VcNk"
  , "MTA0MTU4MTMyNzQ2NTU4MjYwNA.GGTpez.ENsv-PPQokxiKAp1yUsWW0KEVGCoQUUU78SuZ4"
  , "MTA0MTU4NDQ3NjM4MTI2NTk1MA.GlS1D2.uxpiME9eLnUrpAhjWt0kDJxjm2LjVMe4egIshw"
  //, "OTMxOTEyMjUxMjE1MDU2OTQ2.GyYO4-.qCCPWhmGFO9Jf-OMABhZActKgt96sdwN_Ono3k"
  //, "MTAxMDg5NDEyMDEyODA5NDI4OA.G8D6x8.to-BY1H1ByDN91SjCWSYATYiZsF7qJkZAqRuPQ"
  //, "MTAxNTUzMDU3MDM0MTY5NTUyOA.Gk6e_L.1EpQJb7QXdagVZEfi7v8bPOMQuQB7WWW85rWus"//токены
]
try {
  for (const token of auth) {
    const bot = new Discord.Client();
    bot.on("ready", async () => { console.log(`${bot.user.tag} has logged in`) });
    bot.login(token);
    bot.on("messageCreate", (message) => {//пинганите что бы он использовал ae/attack и он будет его использовать пока не появиться кд
      if (message.mentions.has(bot.user) & (message.author.id === '891713802096230461' || message.author.id === '948258743886426112')) {
        setTimeout(() => {
          message.channel.send('ae/attack');

          console.log(`${bot.user.tag} отправил ae/attack ${currentdate}`);
        }, 3050
        );
        //var now = new Date.now();
        currentdate = Date.now();
        kakoy_bot = bot.user.tag.toString();
        console.log(currentdate);
        console.log(Date.now() + 5000);
        try {
          message.clickButton('attack_button');
        } catch { }
      };
      if (message.content.startsWith('Подождите 0:59:5') & (message.author.id === '891713802096230461' || message.author.id === '948258743886426112') & kakoy_bot === bot.user.tag & currentdate < (Date.now() + 10000)) {//кд 1 час
        setTimeout(() => {
          message.channel.send('ae/attack');
        }, 3600000);

      };
      if (message.content.startsWith('Подождите 0:04:5') & (message.author.id === '891713802096230461' || message.author.id === '948258743886426112') & kakoy_bot === bot.user.tag & currentdate < (Date.now() + 10000)) {//кд 5 минут
        setTimeout(() => {
          message.channel.send('ae/attack');
        }, 300000);
      };
      //if (message.type === "REPLY" & (message.author.id === '891713802096230461' || message.author.id === '948258743886426112') & kakoy_bot === bot.user.tag & currentdate < (Date.now() + 10000)) {
      //  setTimeout(() => {
      //    message.channel.send('ae/attack');
      //  }, 3050);
      //}
    });
  }
  server();
}
catch { }
