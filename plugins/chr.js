const config = require("../config");
const { cmd, commands } = require("../command");
const os = require("os");
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, Func, fetchJson } = require("../lib/functions");

cmd({
    pattern: "channelreact",
    alias: ["chr"],
    react: "📕",
    use: ".channelreact *<query,page>*",
    desc: ".",
    category: "owner",
    filename: __filename,
},
async (conn, mek, m, { from, quoted, l, body, isCmd, command, args, q, prefix, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let link = q.split(",")[0]
        const channelId = link.split('/')[4];
        const messageId = link.split('/')[5];
        let react = q.split(",")[1]?.trim(); // ?. to avoid undefined error

        if (!channelId || !messageId || !react) {
            return reply("Please provide a valid format: `.channelreact link 𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 𝐀𝐒𝐇𝐈𝐘𝐀_𝐌𝐃 🥷💗`");
        }

        const res = await conn.newsletterMetadata("invite", channelId);
        await conn.newsletterReactMessage(res.id, messageId, react);
        reply("Reaction sent successfully!");
    } catch (e) {
        console.log(e);
        reply("Error: " + e.message);
    }
});
