import { Client, Intents } from 'discord.js';
import { token } from './config.json';
import events from './events/_events';

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

events.forEach((event) => {
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args));
  } else {
    client.on(event.name, (...args) => event.execute(...args));
  }
});

// Login to Discord with your client's token
client.login(token);
