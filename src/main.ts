import { Bot } from "grammy";
const bot = new Bot("7917423695:AAHcJunVQuctkEEZFni6nPC9FN3WMn27D_o");

bot.command("portugal", (ctx) => {
  ctx.reply("Lissabon");
});
bot.command("spain", (ctx) => {
  ctx.reply("Madrid");
});
bot.command("france", (ctx) => {
  ctx.reply("Parij");
});
bot.command("england", (ctx) => {
  ctx.reply("London");
});
bot.command("germany", (ctx) => {
  ctx.reply("Berlin");
});
bot.command("ireland", (ctx) => {
  ctx.reply("Dublin");
});
bot.command("norway", (ctx) => {
  ctx.reply("Oslo");
});

bot.on("message", (ctx) => {
  ctx.reply("Text name of country and I will tell you the capital.");
});
bot.start();
