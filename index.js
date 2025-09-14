const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessageReactions
  ],
});

const CHANNEL_ID = "1416542351970799646";
const AUTO_REPLY ="https://cdn.discordapp.com/attachments/1357932748605751337/1414201727908843591/1241717267901976576.png?ex=68c7effe&is=68c69e7e&hm=1d37b028beeb4816399baeb41069d82e8b39b6871b530779597f4b725141ebc9&";
const REACTION_EMOJI = "<a:heart:1394488182439022744>"; // ضع أي إيموجي

client.on("ready", () => {
  console.log(`✅ Logged in as ${client.user.tag}`);
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  if (message.channel.id === CHANNEL_ID) {
    await message.channel.send(AUTO_REPLY);
    await message.react(REACTION_EMOJI);
  }
});

client.login("MTQxNjc1NTUxMDMwODI0MTUzOQ.GeygTK.wmHkSELD04XXCGUOZ5PoZknu8IQ5oNXAtGYxwA");
