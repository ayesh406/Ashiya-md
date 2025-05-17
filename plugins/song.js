const { cmd } = require('../command');
const yts = require('yt-search');
const axios = require("axios");

cmd({
    pattern: "song",
    alias: "play",
    desc: "To download songs.",
    react: "🎵",
    category: "download",
    filename: __filename
}, async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        q = q ? q : ''; 
        if (!q) return reply("*`Need YT_URL or Title`*");

       
        reply("*_🎵 Song found, uploading please wait..._*");
        const search = await yts(q);
        if (!search.videos || search.videos.length === 0) {
            return reply("❌ No results found for \"" + q + "\".");
        }

        const data = search.videos[0];
        const url = data.url;
        let desc = `
┏「🐉𝐇𝐀𝐒𝐇𝐈 𝐀𝐔𝐃𝐈𝐎🐉」
┃ 👨‍💻Owner: 𝐌𝐑 𝐀𝐘𝐄𝐒𝐇_𝐁𝐎𝐘 🥷🍷
┃ 🤖 Bot Name: 𝐀𝐒𝐇𝐈𝐘𝐀_𝐌𝐃 🥷💗
┗━━━━━━━━━━━━━━━𖣔𖣔
┏━❮ 🩵𝐇𝐀𝐒𝐇𝐈 𝐃𝐄𝐓𝐀𝐋𝐄𝐒🩵 ❯━
┃🤖 *Title:* ${data.title}
┃📑 *Duration:* ${data.timestamp}
┃🔖 *Views:* ${data.views}
┃📟 *Uploaded On:* ${data.ago}
┃👨‍💻 Owner: 𝐌𝐑 𝐀𝐘𝐄𝐒𝐇 🥷
┗━━━━━━━━━━━━━━𖣔𖣔
╭━━〔🔢 *Reply Number*〕━━┈⊷
┃✯╭─────────────·๏
┃✯┃•1 | Download Audio 🎧
┃✯┃•2 | Download Document 📁
┃✯└───────────┈⊷
╰──────────────┈⊷
> 𝗣𝗼𝘄𝗲𝗿𝗱 𝗯𝘆: 𝐀𝐒𝐇𝐈𝐘𝐀_𝐌𝐃 🥷💚
`;

        const sentMsg = await conn.sendMessage(from, {
            image: { url: data.thumbnail },
            caption: desc,
            contextInfo: {
                mentionedJid: ['94760698006@s.whatsapp.net'],
                groupMentions: [],
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363398661137791@newsletter',
                    newsletterName: "𝐀𝐒𝐇𝐈𝐘𝐀_𝐌𝐃 🥷💗",
                    serverMessageId: 999
                }
            }
        }, { quoted: mek });

        const messageID = sentMsg.key.id;
        conn.ev.on('messages.upsert', async (messageUpdate) => {
            const mek = messageUpdate.messages[0];
            if (!mek.message) return;
            const messageType = mek.message.conversation || mek.message.extendedTextMessage?.text;
            const fromReply = mek.key.remoteJid;
            const senderReply = mek.key.participant || mek.key.remoteJid;

   
            const isReplyToSentMsg = mek.message.extendedTextMessage && mek.message.extendedTextMessage.contextInfo.stanzaId === messageID;

            if (isReplyToSentMsg) {
                if (messageType === '1' || messageType === '2' || messageType === '3') {
                   
                    await conn.sendMessage(fromReply, { react: { text: '⬇️', key: mek.key } });

  
                    const apiUrl = "https://api.giftedtech.web.id/api/download/dlmp3?apikey=gifted&url=" + encodeURIComponent(url);
                    const response = await axios.get(apiUrl);

                    if (!response.data.success) {
                        return reply("❌ Failed to fetch audio for \"" + q + "\".");
                    }

                    const { download_url: downloadUrl } = response.data.result;

                   
                    if (messageType === '1') { 
                        await conn.sendMessage(fromReply, {
                            audio: { url: downloadUrl },
                            mimetype: "audio/mp4",
                            ptt: false,
                            contextInfo: {
                                externalAdReply: {
                                    title: data.title,
                                    body: data.videoId,
                                    mediaType: 1,
                                    sourceUrl: data.url,
                                    thumbnailUrl: "https://i.ibb.co/Mmt9MVS/SulaMd.jpg",
                                    renderLargerThumbnail: true,
                                    showAdAttribution: true
                                }
                            }
                        }, { quoted: mek });
                    } else if (messageType === '2') { 
                        await conn.sendMessage(fromReply, {
                            document: { url: downloadUrl },
                            mimetype: "audio/mp3",
                            fileName: `${data.title}.mp3`,
                            caption: "> ⚜️Powered By: 𝐌𝐑 𝐀𝐒𝐇𝐈𝐘𝐀_𝐌𝐃 🥷💗"
                        }, { quoted: mek });
                    } else if (messageType === '3') { 
                        await conn.sendMessage(fromReply, {
                            audio: { url: downloadUrl },
                            mimetype: "audio/mp4",
                            ptt: true,
                            contextInfo: {
                                externalAdReply: {
                                    title: data.title,
                                    body: data.videoId,
                                    mediaType: 1,
                                    sourceUrl: data.url,
                                    thumbnailUrl: "https://files.catbox.moe/3z7fvz.jpg",
                                    renderLargerThumbnail: true,
                                    showAdAttribution: true
                                }
                            }
                        }, { quoted: mek });
                    }

                    await conn.sendMessage(fromReply, { react: { text: '⬆️', key: mek.key } });
                }
            }
        });

    } catch (e) {
        console.log(e);
        reply("❌ An error occurred while processing your request.");
    }
});
