const {cmd , commands} = require('../command')

cmd({
    pattern: "ayesh",
    desc: "about",
    react: "❕",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let desc = `
====================••••••••==========
*මමත් ආසයි...🙂*

*මටත් ආදරය කරන්න කෙනෙක් හිටියා නම්,*

*හැමවෙලේම මැසේජ් කරන්න,*

*කරදර කර කර හොයල බලන්න කෙනෙක් හිටියා නම්,*

*පරිස්සමෙන් ඉන්න මේ දවස් වල*
*මට ඉන්නෙ ඔයා විතරනෙ කියන්න කෙනෙක් හිටියා නම්,*

*මට දැනෙන තරම් මාව දැනෙන කෙනෙක් හිටියා නම්,*

*ඔව් ආදරේ කියන්නෙ*
*පරිස්සම් කරන එකට තමයි එත් 🥺,*

*මට උනේම ආදරේ කරන්න ගිහින් ආදරේ කියන මාත්‍රකාව එපා උන එක විතරයි...! 🥺💔*

*ස්තූතිය....!*

> *_bot-owner 🥺👇_*

https://wa.me/+94760746437?text=*Hy_AYESH-𝐌𝐃_😌💗_*

> 𝐀𝐒𝐇𝐈𝐘𝐀-𝐌𝐃 🥺❤‍🩹
`

return await conn.sendMessage(from,{image: {url: `https://files.catbox.moe/3szo6f.jpg`},caption: desc},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
