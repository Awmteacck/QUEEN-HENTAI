const _0x3061d1=_0x49a5;function _0x49a5(_0x4da581,_0x3bdc2b){const _0x2ed747=_0x2ed7();return _0x49a5=function(_0x49a56d,_0x229eaf){_0x49a56d=_0x49a56d-0x1bc;let _0x2e10a6=_0x2ed747[_0x49a56d];return _0x2e10a6;},_0x49a5(_0x4da581,_0x3bdc2b);}(function(_0x57c7e8,_0x3a9e15){const _0x2360fb=_0x49a5,_0x1ab20f=_0x57c7e8();while(!![]){try{const _0x329922=parseInt(_0x2360fb(0x1f7))/0x1+-parseInt(_0x2360fb(0x1c9))/0x2*(parseInt(_0x2360fb(0x1d4))/0x3)+-parseInt(_0x2360fb(0x1c5))/0x4+parseInt(_0x2360fb(0x1d1))/0x5*(parseInt(_0x2360fb(0x1ea))/0x6)+parseInt(_0x2360fb(0x1cc))/0x7*(parseInt(_0x2360fb(0x1bd))/0x8)+-parseInt(_0x2360fb(0x1dd))/0x9+parseInt(_0x2360fb(0x1f5))/0xa*(-parseInt(_0x2360fb(0x1e7))/0xb);if(_0x329922===_0x3a9e15)break;else _0x1ab20f['push'](_0x1ab20f['shift']());}catch(_0x46d7d9){_0x1ab20f['push'](_0x1ab20f['shift']());}}}(_0x2ed7,0xd4247));import{createHash}from'crypto';import _0x15187a from'awesome-phonenumber';import{canLevelUp,xpRange}from'../lib/levelling.js';import _0xa38f7a from'node-fetch';import _0x48f3f0 from'fs';const {levelling}='../lib/levelling.js';import _0x18eed2 from'moment-timezone';import{promises}from'fs';import{join}from'path';function _0x2ed7(){const _0x5a8056=['command','quoted','group','\x0a\x0a💝\x20Uptime\x20:\x20','10493670wHCktw','uptime','1322487eHSmHg','hex','update','sender','2728diYCCL','Good\x20Night\x20🌙','repeat','Asia/Kolkata','md5','format','toString','\x0a💝\x20𝗢𝘄𝗻𝗲𝗿\x20𝗡𝗮𝗺𝗲\x20:\x20','240208UprXGV','help','fromCharCode','numeric','174484FNZDJA','@s.whatsapp.net','\x0a💝\x20𝗕𝗼𝘁\x20𝗡𝗮𝗺𝗲\x20:\x20','25592RuJziC','data','getName','map','tags','2435HqWdVK','react','menu','6jpIVCN','split','mentionedJid','join','toLocaleDateString','main','padStart','digest','Good\x20Afternoon\x20🌇','9665217FtpkHA','bothentai','perfil.jpg','chat','users','Good\x20Afternoon\x20☀️','happy\x20early\x20in\x20the\x20day☀️','user','sendFile','./Hentai.jpg','22zZhDoa','filter','long','21030WZUfft','multiplier','fromMe','values','floor','\x0a👋WELCOME\x20\x20','length'];_0x2ed7=function(){return _0x5a8056;};return _0x2ed7();}const time=_0x18eed2['tz'](_0x3061d1(0x1c0))[_0x3061d1(0x1c2)]('HH');let wib=_0x18eed2['tz']('Asia/Kolkata')[_0x3061d1(0x1c2)]('HH:mm:ss'),handler=async(_0x144919,{conn:_0x1663fd,usedPrefix:_0x2b1027,command:_0x32ede3})=>{const _0x127bb0=_0x3061d1;let _0x192192=new Date(new Date()+0x36ee80),_0x33182e='en',_0x44a5be=_0x192192[_0x127bb0(0x1d8)](_0x33182e,{'weekday':_0x127bb0(0x1e9)}),_0x450976=_0x192192[_0x127bb0(0x1d8)](_0x33182e,{'day':'numeric','month':_0x127bb0(0x1e9),'year':_0x127bb0(0x1c8)}),_0x26adb3=process[_0x127bb0(0x1f6)]()*0x3e8,_0xbc1e53=clockString(_0x26adb3),_0x1cffde=_0x144919[_0x127bb0(0x1f2)]?_0x144919['quoted'][_0x127bb0(0x1bc)]:_0x144919['mentionedJid']&&_0x144919[_0x127bb0(0x1d6)][0x0]?_0x144919['mentionedJid'][0x0]:_0x144919[_0x127bb0(0x1ec)]?_0x1663fd[_0x127bb0(0x1e4)]['jid']:_0x144919[_0x127bb0(0x1bc)];if(!(_0x1cffde in global['db'][_0x127bb0(0x1cd)][_0x127bb0(0x1e1)]))throw'✳️\x20The\x20user\x20is\x20not\x20found\x20in\x20my\x20database';let _0x477448=_0x127bb0(0x1e6),_0x5b1c10=global['db']['data'][_0x127bb0(0x1e1)][_0x1cffde],{name:_0x6a736,exp:_0x466080,diamond:_0x5e0e1f,lastclaim:_0x471091,registered:_0x465051,regTime:_0x5eeb02,age:_0x4e8c26,level:_0x36cc99,role:_0x56b69a,warn:_0x215474}=global['db'][_0x127bb0(0x1cd)][_0x127bb0(0x1e1)][_0x1cffde],{min:_0x4be38c,xp:_0x50445a,max:_0x1ed0e9}=xpRange(_0x5b1c10['level'],global[_0x127bb0(0x1eb)]),_0x4f4695=_0x1663fd[_0x127bb0(0x1ce)](_0x1cffde),_0x5c2141=_0x1ed0e9-_0x50445a,_0x841259=global['prems']['includes'](_0x1cffde[_0x127bb0(0x1d5)]`@`[0x0]),_0x3c01e8=createHash(_0x127bb0(0x1c1))[_0x127bb0(0x1f9)](_0x1cffde)[_0x127bb0(0x1db)](_0x127bb0(0x1f8)),_0x3d3cca=Object[_0x127bb0(0x1ed)](global['db'][_0x127bb0(0x1cd)]['users'])[_0x127bb0(0x1f0)],_0x4f8382=Object['values'](global['db']['data'][_0x127bb0(0x1e1)])[_0x127bb0(0x1e8)](_0x472587=>_0x472587['registered']==!![])['length'],_0x11f3e1=String[_0x127bb0(0x1c7)](0x200e),_0x4f31eb=_0x11f3e1[_0x127bb0(0x1bf)](0x352),_0x55ba28='@'+_0x144919[_0x127bb0(0x1bc)][_0x127bb0(0x1d5)](_0x127bb0(0x1ca))[0x0],_0x3a609e=_0x127bb0(0x1ef)+_0x6a736+_0x127bb0(0x1f4)+_0xbc1e53+_0x127bb0(0x1c4)+author+_0x127bb0(0x1cb)+botname+'\x0a💝\x20𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿\x20-\x20Dinuwa\x20Official²⁰²³\x0a\x0a💝\x20𝙽𝚄𝙼𝙱𝙴𝚁\x20-\x2094740804536\x0a\x0a\x0a\x0a🇱🇰\x20:\x20\x20Queen\x20Hentai\x20\x20𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿\x20𝙱𝙾𝚃\x20ɴᴏᴡ\x20ᴀᴠᴀɪʟᴀʙʟᴇ\x20ᴏɴ\x20COOLIFY\x0a\x20ᴅᴇᴩʟᴏY\x20ɴᴏᴡ.\x0a\x0aThis\x20wa\x20bot\x20created\x20by\x20💝\x20Dinuwa\x20Official²⁰²³\x20💝\x0a\x0aᴅᴏᴡɴʟᴏᴀᴅᴇʀ\x20ᴄᴏᴍᴍᴀɴᴅꜱ\x0a\x0a│┃🩸.instagram\x20\x0a│┃🩸.mediafire\x20\x0a│┃🩸.gdrive\x0a│┃🩸.tiktok\x20\x20\x0a│┃🩸.fb\x0a│┃🩸.gimage\x0a│┃🩸.ytmp3\x20\x0a│┃🩸.ytmp4doc\x0a│┃🩸.ytmp3doc\x0a│┃🩸.pinterest\x0a\x0asearch\x20commands\x0a\x0a│┃💭.play\x20\x0a│┃💭.play2\x20\x0a│┃💭.play3\x0a│┃💭.spotify\x0a│┃💭.yts\x20\x0a│┃💭.ytsearch\x0a\x0aconvert\x20commands\x0a\x0a│┃🇱🇰.sticker\x20\x0a│┃🇱🇰.sticker2\x0a│┃🇱🇰.s\x0a│┃🇱🇰.ss\x0a│┃🇱🇰.sfull\x0a│┃🇱🇰.url\x0a│┃🇱🇰.tourl\x0a│┃🇱🇰.translate\x0a│┃🇱🇰.toimg\x0a│┃🇱🇰.tovid\x0a\x0amaker\x20commands\x0a\x0a│┃✔.attp\x20\x0a│┃✔.attp2\x0a│┃✔.attp3\x0a│┃✔.ttp\x0a│┃✔.ttp2\x0a│┃✔.ttp3\x0a\x0aowner\x20commands\x0a\x0a│┃💰.kick\x20\x0a│┃💰.add\x0a│┃💰.promote\x20\x0a│┃💰.demote\x0a│┃💰.setwelcome\x0a│┃💰.setbye\x0a│┃💰.ban\x0a│┃💰.unban\x0a│┃💰.on\x20\x0a│┃💰.off\x20\x0a│┃💰.link\x0a│┃💰.tagall\x0a│┃💰.hentairestart\x0a│┃💰.update\x20\x0a\x0aother\x20commands\x0a\x0a│┃🔞.xnxxsearch\x20\x0a│┃🔞.xnxx\x20\x0a│┃🔞.xnxxdl\x20\x0a│┃🔞.xvideosdl\x0a│┃🔊.ping\x20\x0a│┃🔊.runtime\x0a│┃🔊.hentaiinfo\x0a│┃🔊.script\x20\x0a│┃🔊.sc\x0a│┃🔊.qhw\x0a│┃🔊.dinuserial\x0a│┃🔊.unhentai\x0a';_0x1663fd[_0x127bb0(0x1e5)](_0x144919[_0x127bb0(0x1e0)],_0x477448,_0x127bb0(0x1df),_0x3a609e,_0x144919,![],{'mentions':[_0x1cffde]}),_0x144919[_0x127bb0(0x1d2)](done);};handler[_0x3061d1(0x1c6)]=[_0x3061d1(0x1d9)],handler[_0x3061d1(0x1d0)]=[_0x3061d1(0x1f3)],handler[_0x3061d1(0x1f1)]=[_0x3061d1(0x1d3),'help',_0x3061d1(0x1de),'alive'];export default handler;function clockString(_0x1ade52){const _0x46842d=_0x3061d1;let _0x436f82=isNaN(_0x1ade52)?'--':Math[_0x46842d(0x1ee)](_0x1ade52/0x36ee80),_0x4411ac=isNaN(_0x1ade52)?'--':Math[_0x46842d(0x1ee)](_0x1ade52/0xea60)%0x3c,_0x3c3fa5=isNaN(_0x1ade52)?'--':Math[_0x46842d(0x1ee)](_0x1ade52/0x3e8)%0x3c;return[_0x436f82,_0x4411ac,_0x3c3fa5][_0x46842d(0x1cf)](_0x4c89b2=>_0x4c89b2[_0x46842d(0x1c3)]()[_0x46842d(0x1da)](0x2,0x0))[_0x46842d(0x1d7)](':');}function ucapan(){const _0x533896=_0x3061d1,_0x980863=_0x18eed2['tz']('Asia/Kolkata')[_0x533896(0x1c2)]('HH');let _0x16e177=_0x533896(0x1e3);return _0x980863>=0x4&&(_0x16e177='Good\x20Morning\x20🌄'),_0x980863>=0xa&&(_0x16e177=_0x533896(0x1e2)),_0x980863>=0xf&&(_0x16e177=_0x533896(0x1dc)),_0x980863>=0x12&&(_0x16e177=_0x533896(0x1be)),_0x16e177;}
