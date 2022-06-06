const chalk = require('chalk');
const { WAConnection, MessageType } = require('@adiwajshing/baileys');
const fs = require('fs');

async function ASIATA () {
	const conn = new WAConnection();
	conn.logger.level = 'warn';
  conn.version = [2, 2140, 12]

	conn.on('connecting', async () => {
		console.log(`${chalk.green.bold('T')}${chalk.blue.bold('ASIATA')}
${chalk.white.italic('ASIATA String SESSION')}
${chalk.blue.italic('ℹ️  Connecting to Whatsapp... Please wait.')}`);
	});

	conn.on('open', async () => {
		console.log(
			chalk.green.bold('ASIATA QR Code: '),
			'ASIATA;;;' +
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
		if (conn.user.jid.startsWith('90')) {
			await conn.sendMessage(
				conn.user.jid,
				'*⚠️ PLEASE DO NOT SHARE THIS CODE WITH ANYONE , කරුණාකර මෙම කේතය වෙන කිසිවෙකුට ලබා නොදෙන්න.. ' + conn.user.name + '* ⚠️',
				MessageType.text
			);
		} else {
			await conn.sendMessage(
				conn.user.jid,
				'*⚠️ Please Do Not Share This Code With Anyone , කරුණාකර මෙම කේතය වෙන කිසිවෙකුට ලබා නොදෙන්න...' +
					conn.user.name +
					'* ⚠️',
				MessageType.text
			);
		}
		console.log(
			chalk.green.bold(
				"IF YOU CANNOT COPY THE MESSAGEE , PLEASE CHECK WHATSAPP. QR CODE SENT TO YOUR OWN NUMBER!මෙම කේතය මෙතැන කොපි කල නොහැක කරුණාකර ඔබගේ වට්සැප් අන්කය පරීක්ශා කරන්න...\n"
			),
			chalk.green.bold(
				'IF YOU CANNOT COPY THE MESSAGE, PLEASE CHECK WHATSAPP. QR CODE SENT TO YOUR OWN NUMBER!මෙම කේතය මෙතැන කොපි කල නොහැක කරුණාකර ඔබගේ වට්සැප් අන්කය පරීක්ශා කරන්න...'
			)
		);
		process.exit(0);
	});

	await conn.connect();
}

ASIATA ();
