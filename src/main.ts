import { Bot } from "grammy";
const bot = new Bot("7917423695:AAHcJunVQuctkEEZFni6nPC9FN3WMn27D_o");

bot.command("portugal", (ctx) => {
  ctx.reply("Lissabon");
});
bot.command("ispaniya", (ctx) => {
  ctx.reply("Madrid");
});
bot.command("fransiya", (ctx) => {
  ctx.reply("Parij");
});
bot.command("angliya", (ctx) => {
  ctx.reply("London");
});
bot.command("germaniya", (ctx) => {
  ctx.reply("Berlin");
});
bot.command("irlandiya", (ctx) => {
  ctx.reply("Dublin");
});
bot.command("norvegiya", (ctx) => {
  ctx.reply("Oslo");
});

bot.on("message", (ctx) => {
  ctx.reply("Text name of country and I will tell you the capital.");
});
bot.start();
