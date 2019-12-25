require('dotenv').config()
const { Client } = require('discord.js')

const client = new Client()

client.on('ready', () => {
  console.log('I am ready')
});

client.on('message', message => {
	if (message.content.startsWith('mock')) {
    const user = message.mentions.users.first()
    if (user === undefined) {
      message.channel.send('Who are you trying to mention?')
    }
		else {
      if (user.lastMessage === null) {
        message.channel.send('Well, it\'s not really a message')
      } else {
        let hee = user.lastMessage.mentions.users[0]
        if (user.lastMessage.mentions.users.exists('id', message.author.id)) {
          message.channel.send('What? You want to mock the one who mocks you?')
        } else {
          let userLastMessage = user.lastMessage.content
          let splitMessage = userLastMessage.split('')
          let randomize = splitMessage.map((x) => {
            return [randomCase(x)].join('')
          })
          message.channel.send(randomize.join(''))
        }
      }
    }
	}
	if (message.type === 'GUILD_MEMBER_JOIN') {
		message.channel.send('Whoa there\'s a furry who invited me here')
	}
});

client.login(process.env.DISCORD_TOKEN)

function randomCase(char)
{
	if (Math.floor(Math.random()*(1-0+1)+0) == 0) {
		return char.toUpperCase()
	} else {
		return char.toLowerCase()
	}
}