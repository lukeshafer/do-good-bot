import { CommandInteraction, Interaction } from 'discord.js';
import interactionCreate from './interaction-create';
import ready from './ready';

interface Event {
  name: string;
  once?: boolean;
  execute(...args: any[]): any;
}

export default [ready, interactionCreate] as Event[];
