const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('If you need help.'),
	async execute(interaction) {
		return interaction.reply('If you need help please contact an admin.');
	},
};
