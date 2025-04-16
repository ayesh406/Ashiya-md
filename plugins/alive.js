const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');

cmd({
    pattern: "alive",
    alias: ["status", "runtime", "uptime"],
    desc: "Check uptime and system status",
    category: "main",
    react: "👋",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Generate system status message
        const status = `╭━━〔 *𝐀𝐒𝐇𝐈𝐘𝐀-MD* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• *👋Hi*: ${pushname}
┃◈┃• *⏳Uptime*:  ${runtime(process.uptime())} 
┃◈┃• *📟 Ram*: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB
┃◈┃• *👨‍💻 Owner*: 
┃◈└───────────┈⊷
╰──────────────┈⊷

  *𝐀𝐒𝐇𝐈𝐘𝐀-MD Multidevice Whatsapp Bot.*

  https://whatsapp.com/channel/0029VbACpjVGJP8Pvuy1nC3T

> 𝐀𝐒𝐇𝐈𝐘𝐀-MD`;

        // Send the status message with an image
        await conn.sendMessage(from, { 
            image: { url: `https://i.ibb.co/cKdpJ7Sz/SulaMd.jpg` },  // Image URL
            caption: status,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363401249335754@newsletter',
                    newsletterName: '𝐀𝐒𝐇𝐈𝐘𝐀-MD',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Error in alive command:", e);
        reply(`An error occurred: ${e.message}`);
    }
});
