const nike = require('./modules/getNike')
const {
    Client,
    GatewayIntentBits,
    EmbedBuilder
} = require('discord.js')
const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.MessageContent, GatewayIntentBits.DirectMessages, GatewayIntentBits.GuildMessages]
});

client.on("ready", async () => {
    let d = new Date()
    let day = d.getDate()
    let month = d.getMonth() + 1
    const currentDate = `${d.getFullYear()}-${month < 10 ? `0${month}` : month}-${day < 10 ? `0${day}` : day}`
    console.log(`${client.user.tag} • Monitoring Stock • ${currentDate}`)
    console.log(`SNKRS • ${nike.startSearching(client.guilds.cache.get("958182597593296946").channels.cache.get("1110617321929711636"))}`) // GuildID & ChannelID
})

client.login('MTA3NjUzNjE1MTg0MzgwNzI5Mg.Gcna70.0A5jTpDCkq0YN8dKjza3I486nMQf-gh4JZD6yE')