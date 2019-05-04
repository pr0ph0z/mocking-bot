# Mocking Bot

Discord bot for mocking people.

## Installation

Use the npm package manager

```bash
npm install
```

## Usage

Open index.js file, and edit the [client.login()](https://github.com/pr0ph0z/mocking-bot/blob/master/index.js#L24) using your bot's token
```js
client.login('xxx-xxx-xxx')
```

Invite the bot to your channel using [https://discordapp.com/oauth2/authorize?&client_id=YOUR_CLIENT_ID&scope=bot&permissions=0](https://discordapp.com/oauth2/authorize?&client_id=YOUR_CLIENT_ID&scope=bot&permissions=0) and start mocking people using the `/mock` prefix.

Example:
`/mock this furry plz @asdf#333`

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)