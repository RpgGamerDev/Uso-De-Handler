module.exports = {
  name: "ejemplo",
  alias: ["e", ""],
  execute (client, message, args){
    message.channel.send("Este es un mensaje de ejemplo")
  }
}
