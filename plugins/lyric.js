const Asiata = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const config = require('../config');
const axios = require('axios');
const Language = require('../language');
const solenolyrics= require("solenolyrics"); 
const Slang = Language.getString('lyrics');
let wk = config.WORKTYPE == 'public' ? false : true


 Asiata.addCommand({pattern: 'lyric ?(.*)', fromMe: wk, desc: Slang.LY_DESC, deleteCommand: false }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, Slang.NEED, MessageType.text);

        var aut = await solenolyrics.requestLyricsFor(`${match[1]}`); 
        var son = await solenolyrics.requestAuthorFor(`${match[1]}`);
        var cov = await solenolyrics.requestIconFor(`${match[1]}`);
        var tit = await solenolyrics.requestTitleFor(`${match[1]}`);
          
        const pic = await axios.get(cov, {responseType: 'arraybuffer'});
        const msg = 'ââââ[ðASIATAð±ð¾ðð]\n\n  *ð¼LYRICS*\n\nâðsá´á´Êá´Êá´á´: ' + match[1] + '\n\nââ¨ Òá´á´É´á´á´á´: ' + tit + '\n\nâð¨âð¤ á´á´¡É´á´Ê: ' + son +'\n\nââï¸ ÊÊÊÉªá´s : ' + aut + '\n\nâââââââââââââ'
        await message.client.sendMessage(message.jid, Buffer.from(pic.data),  MessageType.image, {caption: msg , quoted: message.data  });

    }))    
