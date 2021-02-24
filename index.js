const express = require('express');
const app = express();
const port = 3000;
app.get("/", function (request, response) {
response.sendFile(__dirname + '/Pagina.html');});
app.listen(port, () => console.log(`Todo bien, todo correcto :D`));
const { Client, MessageEmbed } = require("discord.js");
const client = new Client();
const fs = require("fs");

client.on('ready', () => {
console.log("Hola");
client.user.setPresence( {
  
 activity: {name: `Among Us`,
type: "PLAYING"},
status:"online"});})
client.setMaxListeners (200)




client.login(process.env.TOKEN);
