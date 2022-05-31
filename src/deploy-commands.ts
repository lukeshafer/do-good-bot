import commands from './commands/_commands';
import { SlashCommandBuilder } from '@discordjs/builders';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
import { clientId, guildId, token } from './config.json';

const commandList = commands.map((element) => element.data);
const rest = new REST({ version: '9' }).setToken(token);

rest
  .put(Routes.applicationGuildCommands(clientId, guildId), {
    body: commandList,
  })
  .then(() => console.log('Successfully registered application commands.'))
  .catch(console.error);
