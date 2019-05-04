const { Client, Attachment } = require('discord.js')

const client = new Client()

client.on('ready', () => {
  console.log('I am ready')
});

client.on('message', message => {
	if (message.content.startsWith('/mock')) {
		const user = message.mentions.users.first()
		let userLastMessage = user.lastMessage.content
		let replaceMessage = userLastMessage.replace(/<.*>/g, '').replace('/mock ', '').trim().split('')
		let randomize = replaceMessage.map((x) => {
			return [randomCase(x)].join('')
		})
		message.channel.send(randomize.join(''))
	}
	if (message.type === 'GUILD_MEMBER_JOIN') {
		message.channel.send('Njir ada furry invite gw ke sini')
	}
});

client.login('')

function randomCase(char)
{
	if (Math.floor(Math.random()*(1-0+1)+0) == 0) {
		return char.toUpperCase()
	} else {
		return char.toLowerCase()
	}
}