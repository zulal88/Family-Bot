const discord = require('discord.js');
const client = new discord.client();

client.on('ready', ()=> {
	console.log('I am ready!');
});

client.on('message', message => {
	if (message.content === 'ping') {
		message.reply('pong');
	}
});

//THIS MUST BE THIS WAY
client.login(process.env.NTQ3MjgzMTc0ODgzOTgzMzYw.XQJbww.bBlLVAhgrEw_CZ8pUolwsJQWXiY);
