const {cmd , commands} = require('../command')

cmd({
    pattern: "about",
    desc: "about",
    react: "❕",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let desc = `
====================••••••••==========
*╭──〔 𝐀𝐒𝐇𝐈𝐘𝐀-𝐌𝐃 〕──┈⊷*
*│👋 𝙷𝙴𝙻𝙻𝙾 ɪᴛ'ꜱ ᴍᴇ┃ASHIYAᵀᴱᴬᴹxᴰᵀᶻ✦*
*╰────────────────┈⊷*

⦁✧◄─────𝗔𝗦𝗛𝗜𝗬𝗔_𝗠𝗗 𝗔𝗕𝗢𝗨𝗧─────►✧⦁    

*┏━━━〔 𝗔𝗦𝗛𝗜𝗬𝗔 ABOUT 〕━━━━━━┈⊷*
*┃✯╭──────────────*
*┃✯│ᴡᴇʟᴄᴏᴍᴇ ᴛᴏ ᴀꜱʜɪʏᴀ ᴍᴅ*
*┃✯│ᴄʀᴇᴀᴛᴇʀ : ᴀʏᴇꜱʜ*
*┃✯│ᴘᴜʙʟɪᴄ ɴᴀᴍᴇ : ᴀꜱʜɪʏᴀ*
*┃✯│ᴀɢᴇ : 16 ʏᴇᴀʀ*
*┃✯│ꜰʀᴏᴍ : ɴᴜᴡᴀʀᴀ*
*┃✯│ʙᴏᴛ ᴏᴡner :-+94760746437*
*┃✯│ᴀ sɪᴍᴘʟᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ ᴅᴇᴠᴇʟᴘᴏʀ*
*┃✯╰──────────────*
*┗━━━━━━━━━━━━━━━━━━━┈⊷*

> *㋡ 𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝐀𝐒𝐇𝐈𝐘𝐀-𝐌𝐃 🍷🥷*
`
return await conn.sendMessage(from,{image: {url: `https://files.catbox.moe/4g6ao5.jpg`},caption: desc},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
