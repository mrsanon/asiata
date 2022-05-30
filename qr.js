
const chalk = require('chalk');
const { WAConnection, MessageType } = require('@adiwajshing/baileys');
const fs = require('fs');

async function asiata() {
	const conn = new WAConnection();
	conn.logger.level = 'warn';
	conn.version = [2, 2140, 12]
//[2, 2140, 12]
	conn.on('connecting', async () => {
		console.log(`${chalk.green.bold('ASIATA')}${chalk.blue.bold('ASIATA')}
${chalk.white.italic('ASIATA')}
${chalk.blue.italic('ℹ️  Connecting to Whatsapp... Please wait.')}`);
	});

	conn.on('open', async () => {
		console.log(
			chalk.green.bold('ASIATABOT QR Code: '),
			'AQUA;;;' +
				Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString(
					'base64'
				)
		);
		await conn.sendMessage(
			conn.user.jid,
			'ASIATA;;;' +
				Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString(
					'base64'
				),
			MessageType.text
		);
		if (conn.user.jid.startsWith('94')) {
			await conn.sendMessage(
				conn.user.jid,
				'*🛑 මේක කාටවත් දෙන්න එපා mchn  ' + conn.user.name + '* 🛑',
				MessageType.text
			);
		} else {
			await conn.sendMessage(
				conn.user.jid,
				'*🛑 Please Do Not Share This Code With Anyone mchn  ' + conn.user.name + '* 🛑',
				MessageType.text
			);
		}
		console.log(
			
			chalk.green.bold(
				'IF YOU CANNOT COPY THE MESSAGE, PLEASE CHECK WHATSAPP. QR CODE SENT TO YOUR OWN NUMBER !!'
			)
		);
		process.exit(0);
	});

	await conn.connect();
}

asiata();
