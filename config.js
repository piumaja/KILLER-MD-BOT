const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/piumaja/KILLER-MD-BOT/blob/main/images/original-113711923c7724869bb42a58fa25df81.webp?raw=true",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 KILLER_MD Is Alive Now😍*",
BOT_OWNER: '94776121326',  // Replace with the owner's phone number



};
