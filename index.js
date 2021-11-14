// Configuration Files
const config = require('./config');
// Creating the Client
const {
    Client
} = require('discord.js-self');
const client = new Client();

client.on('ready', async () => {
    const CronJob = require('cron').CronJob;
    const bump = new CronJob('0 * */2 * * *', function() {
        const canal = client.channels.cache.get(config.channel);
        canal.send('!d bump');
    }, null, !0, 'America/Sao_Paulo');
})

client.login(config.token);
