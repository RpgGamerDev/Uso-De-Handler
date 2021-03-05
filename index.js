const express = require('express');
const app = express();
const port = 3000;
app.get("/", function (request, response) {
response.sendFile(__dirname + '/Pagina.html');});
app.listen(port, () => console.log(`Todo bien, todo correcto :D`));
const { Client, MessageEmbed, Collection } = require("discord.js");
const config = require('./config.json');
const client = new Client();
const fs = require("fs");
const { readdirSync } = require("fs"); 

let prefix = "!",

client.commands = new Collection();
const commandFiles = fs.readdirSync('./comandos').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./comandos/${file}`);
    client.commands.set(command.name, command);
}


client.on('ready', () => {
console.log("Hola");
client.user.setPresence( {
  
 activity: {name: `Super Mario Maker 2`,
type: "COMPETING"},
status:"online"});})
client.setMaxListeners (200)


client.on("message", async message => {


if(message.author.bot) return;

if(message.content.indexOf(prefix) !== 0) return;

const args = message.content.slice(prefix.length) .trim().split(/ +/g);

const command = args.shift().toLowerCase();

 let cmd = client.commands.find((c) => c.name === command || c.alias && c.alias.includes(command));
if(cmd){
cmd.execute(client, message, args)

}
});

client.login(config.token);
