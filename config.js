/* Copyright (C) 2020 Yusuf Usta.      

WhatsAsena - Yusuf Usta 
*/

const { Sequelize } = require('sequelize'); 
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

// Özel Fonksiyonlarımız
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

DATABASE_URL = process.env.DATABASE_URL === undefined ? './whatsasena.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);

module.exports = {
    VERSION: 'v7.3.6',
    CHANNEL: 'https://t.me/remasterplugin',
    SESSION: process.env.KAZTROSER_CODE === undefined ? '' : process.env.KAZTROSER_CODE,
    ANTİLİNK: process.env.ANTİ_LİNK === undefined ? 'false' : process.env.ANTİ_LİNK,
    AUTOBİO: process.env.AUTO_BİO === undefined ? 'false' : process.env.AUTO_BİO,
    STANDPLK: process.env.STANDBY_MODE === undefined ? 'off' : process.env.STANDBY_MODE,
    FAKE: process.env.FAKE_REMOVE === undefined ? 'false' : process.env.FAKE_REMOVE,
    GANSTYLE: process.env.GAN_IMAGE === undefined ? 'https://i.hizliresim.com/loUtAb.jpg' : process.env.GAN_IMAGE,
    LANG: process.env.LANGUAGE === undefined ? 'TR' : process.env.LANGUAGE.toUpperCase(),
    ALIVEMSG: process.env.ALIVE_MESSAGE === undefined ? 'default' : process.env.ALIVE_MESSAGE,
    AFN: process.env.ALL_CAPTION === undefined ? '*ᴍᴀᴅᴇ ʙʏ 𝙍𝘼𝙃𝙀𝙀𝙎*' : process.env.ALL_CAPTION,
    KICKMEMSG: process.env.KICKME_MESSAGE === undefined ? 'default' : process.env.KICKME_MESSAGE,
    BLOCKCHAT: process.env.BLOCK_CHAT === undefined ? false : process.env.BLOCK_CHAT,
    WELCOME: process.env.WELCOME === undefined ? 'pp' : process.env.WELCOME,
    OWNER: process.env.OWNER_NAME === undefined ? 'default' : process.env.OWNER_NAME,
    PHONE: process.env.NUMBER === undefined ? '+917994206751' : process.env.NUMBER,   
    OA_NAME: process.env.DEPLOYER === undefined ? 'ᴀᴊғx' : process.env.DEPLOYER,
    ALL: process.env.ALL_CAPTION === undefined ? '*ᴍᴀᴅᴇ ʙʏ 𝙍𝘼𝙃𝙀𝙀𝙎*' : process.env.ALL_CAPTION,
    LG_LOGO: process.env.LG_LOGO === undefined ? 'https://i.imgur.com/KUaX2XT.jpeg' : process.env.LG_LOGO,
    LOGO_NAME: process.env.LOGO_NAME === undefined ? '𝙍𝘼𝙃𝙀𝙀𝙎' : process.env.LOGO_NAME,
    CODE: process.env.C_CODE === undefined ? '91' : process.env.C_CODE,
    MENTION: process.env.TAG_REPLY === undefined ? '917994206751@s.whatsapp.net' : process.env.TAG_REPLY,
    ADDMSG: process.env.ADD_MESSAGE === undefined ? 'default' : process.env.ADD_MESSAGE,
    PLKS: process.env.THERI_LIST === undefined ? false : process.env.THERI_LIST,
    AFPLK: process.env.INSTA_PASSWORD === undefined ? false : process.env.INSTA_PASSWORD,
    MUTEMSG: process.env.MUTE_MESSAGE === undefined ? 'default' : process.env.MUTE_MESSAGE,
    BGMFILTER: process.env.BGM_FILTER === undefined ? false : convertToBool(process.env.BGM_FILTER),
    INBO: process.env.INBO_BLOCK === undefined ? 'false' : process.env.INBO_BLOCK,
    INBO1: process.env.INBO_BLOCK === undefined ? 'true' : process.env.INBO_BLOCK,
    DISBGM: process.env.DISABLE_JID_BGM_FILTER === undefined ? false : process.env.DISABLE_JID_BGM_FILTER,
    STICKERP: process.env.AUTO_STICKER === undefined ? true : convertToBool(process.env.AUTO_STICKER),
    DISSTICKER: process.env.DISABLE_STICKER === undefined ? false : process.env.DISABLE_STICKER,
    BOT: process.env.BOT_NAME === undefined ? '⊢‒‒‒ ⋈ ࿑𝐌𝐀𝐆𝐈𝐂𝐈𝐀𝐍❥࿑⁩⋈ ‒‒‒⊣' : process.env.BOT_NAME,
    KAZTRO_SER: process.env.ALIVE_BUTTON === undefined ? 'sᴇᴅ/ʜᴀᴘᴘʏ' : process.env.ALIVE_BUTTON,   
    NOLOG: process.env.NO_LOG === undefined ? 'true' : process.env.NO_LOG,
    THERI_KICK: process.env.THERI_KICK === undefined ? 'false' : process.env.THERI_KICK,
    SONGD: process.env.SONGD === undefined ? '➠ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ ꜱᴏɴɢ..♬ ' : process.env.SONGD,
    SONGU: process.env.SONGU === undefined ? '➠ᴜsᴇ ʜᴇᴀᴅᴘʜᴏɴᴇs..☊' : process.env.SONGU,
    CHATBOT: process.env.CHAT_BOT === undefined ? 'false' : process.env.CHAT_BOT,
    AJ_FX: process.env.GIT_BUTTON === undefined ? 'ʏᴇs/ɴᴏ' : process.env.GIT_BUTTON,   
    SAID: process.env.BGM_DURATION === undefined ? '39999600' : process.env.BGM_DURATION,
    BLOCKMSG: process.env.BLOCK_MESSAGE === undefined ? 'default' : process.env.BLOCK_MESSAGE,
    UNBLOCKMSG: process.env.UNBLOCK_MESSAGE === undefined ? 'default' : process.env.UNBLOCK_MESSAGE,
    SED: process.env.SED_CAPTION === undefined ? '*ᴍᴀᴅᴇ ʙʏ 𝙍𝘼𝙃𝙀𝙀𝙎*' : process.env.SED_CAPTION,
    UNMUTEMSG: process.env.UNMUTE_MESSAGE === undefined ? 'default' : process.env.UNMUTE_MESSAGE,
    GEAR: process.env.CHANGE_BGM_TO === undefined ? 'one' : process.env.CHANGE_BGM_TO,
    WORKTYPE: process.env.WORK_TYPE === undefined ? 'public' : process.env.WORK_TYPE,
    PROMOTEMSG: process.env.PROMOTE_MESSAGE === undefined ? 'default' : process.env.PROMOTE_MESSAGE,
    DEMOTEMSG: process.env.DEMOTE_MESSAGE === undefined ? 'default' : process.env.DEMOTE_MESSAGE,
    PLK: process.env.OWNER_NAME === undefined ? 'default' : process.env.OWNER_NAME,
    BOTSK: process.env.BOT_NAME === undefined ? '𝙍𝘼𝙃𝙀𝙀𝙎' : process.env.BOT_NAME,
    LOGOSK: process.env.ALL_IMG === undefined ? 'https://te.legra.ph/file/a9e518393144caf1ac505.jpg' : process.env.ALL_IMG,
    SKDL: process.env.DIALOGUE === undefined ? '🤩 All The Dreams Like Twinkle Stars 🤩' : process.env.DIALOGUE,
    JID: process.env.VERIFIED === undefined ? '0@s.whatsapp.net' : process.env.VERIFIED,
    SKV: process.env.V_HEADER === undefined ? '*YOUR HEADER HERE*' : process.env.V_HEADER,
    BANMSG: process.env.BAN_MESSAGE === undefined ? 'default' : process.env.BAN_MESSAGE,
    NOLOG: process.env.FIX_ERROR === undefined ? 'on' : process.env.FIX_ERROR,
    AFKMSG: process.env.AFK_MESSAGE === undefined ? 'default' : process.env.AFK_MESSAGE,
    ALLEMOJI: process.env.CMD_LIST === undefined ? 'siya/💙/🌟/🥀/🐾' : process.env.CMD_LIST,
    WEL_GIF: process.env.WEL_GIF === undefined ? 'https://i.imgur.com/nErXUGj.mp4' : process.env.WEL_GIF,
    GIF_BYE: process.env.GIF_BYE === undefined ? 'https://i.imgur.com/Z1jCYGN.mp4' : process.env.GIF_BYE,
    BC: process.env.AUDIO_CAPTION === undefined ? '❀ꪶ͢ɪͥᴛͭsᷤ ͢ᴍͫᴇͤᡃ⃝𝙍𝘼𝙃𝙀𝙀𝙎࿐' : process.env.AUDIO_CAPTION,
    HANDLERS: process.env.HANDLERS === undefined ? '^[.!;]' : process.env.HANDLERS,
    TAGPLK: process.env.TAG_HEADER === undefined ? 'Note this' : process.env.TAG_HEADER,
    SEND_READ: process.env.SEND_READ === undefined ? false : convertToBool(process.env.SEND_READ),
    YAK: process.env.YAK === undefined ? '917994206751,0' : process.env.YAK,
    BRANCH: 'master',
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
        APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
    },
    DATABASE_URL: DATABASE_URL,
    DATABASE: DATABASE_URL === './whatsasena.db' ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: DEBUG }) : new Sequelize(DATABASE_URL, { dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }, logging: DEBUG }),
    RBG_API_KEY: process.env.REMOVE_BG_API_KEY === undefined ? false : process.env.REMOVE_BG_API_KEY,
    NO_ONLINE: process.env.NO_ONLINE === undefined ? true : convertToBool(process.env.NO_ONLINE),
    SUDO: process.env.SUDO === undefined ? '917994206751,0' : process.env.SUDO,
    DEBUG: DEBUG,
    WITAI_API: "TEYMELA6DMC4XB5YM3SPTTQWUUIBKURG",
    BOTCREATOR: "rahees",
    MAHN: "917994206751,0",
    SUPPORT: "917994206751-1635775355",
    SUPPORT2: "917994206751-1617736751",
    SUPPORT3: "917994206751-1621015274"
};
