require('dotenv').config()
const Discord = require('discord.js') 
const swears = require('./swears')

const bot = new Discord.Client ({
   
    intents: [
        'GUILDS',
        'GUILD_MESSAGES',

    ]
})
bot.once('ready', function() {
    console.log('Bot is ready')
})

bot.on('messageCreate', function(message) {
    if(message.author.bot) return;
    

    if(message.content == '-11') {

        message.reply(swears[Math.floor(Math.random() * swears.length)])
    }
})

bot.login(process.env.TOKEN);