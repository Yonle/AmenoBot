const { Client } = require("discord.js");
const { createReadStream } = require("fs");
require("dotenv").config();
const { TOKEN } = process.env;
const bot = new Client();
bot.on("ready", () => {
  console.log("Logged as "+bot.user.tag);
  bot.user.setActivity("Ameno");
});
bot.on("message", message => {
if (message.content.startsWith(`<@${bot.user.id}>`)||message.content.startsWith(`<@!${bot.user.id}>`)) {
 if (!message.member.voice.channel) return;
  var voice =  message.member.voice.channel
  voice.join().then(connection => {
  connection.play(createReadStream("Ameno.opus")).on("finish", () => voice.leave());
 }).catch(console.error);
}
});
bot.login(TOKEN);
