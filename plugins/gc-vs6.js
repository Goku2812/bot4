let handler = async (m, { conn, text, command, usedPrefix }) => {
let pp = './src/warn.jpg'
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
let user = global.db.data.users[who]
let bot = global.db.data.settings[conn.user.jid] || {}
let warntext = `*ββββ*π₯ *6 VS 6* *EXTERNO*π₯
*ββ§*  *HiGHER ANGELS*
*β*
*ββ§* β°  * *  π²π½πͺπ¨*
*β* 
*ββ§*  **
*β*
*ββ§* *USO DE DISCORD OBLIGATORIO*
*β*
*βββ* *ESCUADRA* 
*ββ§*π€
*ββ§*π€ 
*ββ§*π€
*ββ§*π€
*ββ§*π€
*ββ§*π€
*βββ* *SUPLENTES*
*ββ§*π£
*ββ§*π£ 
*βββ* *DONADOR DE SALA*
*ββ§*β­  
*ββ*β­`
if (!who) throw m.reply(warntext, m.chat, { mentions: conn.parseMention(warntext)}) 
user.warn += 1
  
await conn.sendButton(m.chat,`${user.warn == 1 ? `*@${who.split`@`[0]}*` : `*@${who.split`@`[0]}*`} ππ΄π²πΈπ±πΈπΎ ππ½π° π°π³ππ΄πππ΄π½π²πΈπ° π΄π½ π΄πππ΄ πΆπππΏπΎ!`, `*ADVERTENCIAS ${user.warn}/3*\n\n${wm}`, pp, [['π π»πΈππππ°ππ½ π', '#listwarn']], m, { mentions: [who] })
	
if (user.warn >= 3) {
if (!bot.restrict) return m.reply('*[βππππβ] π΄π» πΏππΎπΏπΈπ΄ππ°ππΈπΎ π³π΄π» π±πΎπ π½πΎ ππΈπ΄π½π΄ π·π°π±πΈπ»πΈππ°π³πΎ π»π°π ππ΄ππππΈπ²π²πΈπΎπ½π΄π (#ππππππ ππππππππ) π²πΎπ½ππ°π²ππ΄ π²πΎπ½ π΄π» πΏπ°ππ° πππ΄ π»πΎ π·π°π±πΈπ»πΈππ΄*')        
user.warn = 0
await m.reply(`ππ΄ π»πΎ π°π³ππ΄πππΈ ππ°ππΈπ°π ππ΄π²π΄π!!\n*@${who.split`@`[0]}* πππΏπ΄ππ°πππ΄ π»π°π *3* π°π³ππ΄πππ΄π½π²πΈπ°π, π°π·πΎππ° ππ΄ππ°π π΄π»πΈπΌπΈπ½π°π³πΎ/π° π½`, null, { mentions: [who]})
//user.banned = true
await conn.groupParticipantsUpdate(m.chat, [who], 'remove') 
} 
return !1
}
handler.help = ['inicial <texto>']
handler.tags = ['group']
handler.command = /^(vs6|VS6)$/i
handler.botAdmin = true
export default handler
