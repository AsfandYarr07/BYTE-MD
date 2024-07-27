
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "TalkDrove@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "923072380380@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/HyHamza/BYTE-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/logo.jpg";
global.devs = "923072380380";
global.sudo = process.env.SUDO || "923072380380";
global.owner = process.env.OWNER_NUMBER || "923072380380";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "all";
global.read_status_from = process.env.READ_STATUS_FROM || "all";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";




global.SESSION_ID =
  process.env.SESSION_ID ||





  


//___________________________________________________________________________________________________


  
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUVGdkIwSy8wNXc4VWZkSkpqMnB2RGpmRUJXSWl4UW9iN2VUaktGalVXQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRGtVNHA5T08yMHI2a3ZQTjMvTTBrWmIvSDh2UzZVbEozVXRnalBMVCtsOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNR0ZkczczTkpTNVRPYzN2dm42L292TzBZSldkTUNycHQ4ZEUwamNoalYwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQUzVqdnNPK21Ra0ZRRTlXYmJsaVhzOCtxUWdIdnNic29uYUYwVE9INm13PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9HUU80ZkFnNjFwVkJmQ3V0TEdBQXNRbTJ2YXNGblpSNjI2dHl1ak1yMmc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imp1WUs2YUxta1FJbmlBbGJ1SVdGWnlMWUt2R3MxSXdzTjk3NEJqR2RCMlE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNk9QUlZ1TkJZZWZKTFp4WWRLNU9EWjZHZ1pFcUp0UTBMZFlWQTFtWHFHUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibFBjL2t0djQyYUVNS0I1cHdEdUZyYkdDbUdMTFRieEsveWdiV2l4SU9Fdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5DOVU3UkF6SjNKM0Q1QWFPSi90c2NBZlR6eElkQUVVSVlQQUhRU1poeExIZmJnMHlEQWZVb1h5RlRjOVNaOE9jU1ZJdmwwMlZCSzhRMUlaUmJXSGl3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzMsImFkdlNlY3JldEtleSI6IkNnenJHdmJIZXVPRm51WVlRYjM2RFdFQTVGVE9FRHlzMWQxNXp2d3BEcWM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMzU4NDU3Mzk4NzcwMEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIxOTYyQkJGREY1QjdGRkQwREZCQ0FCMERGQkNBNDEyQiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyMDU5NzU3fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIzNTg0NTczOTg3NzAwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkY2OTQ2NjM3MDcyQTJERENFNUE3OEI3RTlBODZGMkFBIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjIwNTk3NTd9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjkwTEtNWElWUjFtSjJsLWlybGZ6TmciLCJwaG9uZUlkIjoiODgxMWU3NDItNDUwNC00OWY0LWE0MjMtNDA0NTUyOWM4MWM5IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRVNFllWTdPcmpscEQ4QUlqVGFia2RyYXlyVT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjTFRzelN5UTVIY0VjUTYrUkMwUXc4V3pMSXM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiN1hSM1g1RVciLCJtZSI6eyJpZCI6IjM1ODQ1NzM5ODc3MDA6MUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLigIvigIvigIvigIvigIvigIvigIvigIvigIvigIvigIvigIvigIvigIvigIvigIvigIvigIvigIvigIvigIvigIvigIvigIvigIsifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09xODZzc0VFTldYa3JVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IllzYmV4R1dZNER2TzgvT25peWlNcjRKZW5vWGxoUVZFOFlyYkxiUndFRW89IiwiYWNjb3VudFNpZ25hdHVyZSI6IkdaSzFsZnFycVR3M1N4d1F1bDlTR3BlcUVFQmNCWE5EU1pUa2JyRWZIbkgwVktwZzY0ZWNSaTYrZkVHb21QNndacDU5TnZ3OGlja1FDM0drVlppQkRnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJEVVVRcld0K0FoeHdOOTlWQ0c4M2hXWU0wV1NaQnZBMW5vaXVsdkFTNExrSDVTMHp3N0lDOThCUisvR1d3eWtLOWVPVzZSVVVLTTN4ZzF1Tm54cThqZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjM1ODQ1NzM5ODc3MDA6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXTEczc1JsbU9BN3p2UHpwNHNvaksrQ1hwNkY1WVVGUlBHSzJ5MjBjQkJLIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyMDU5NzU0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUsweSJ9" //Make sure session id starts with Byte;;;



//________________________________________________________________________









module.exports = {
  menu: process.env.MENU || "",

  //Prefix variable
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By TalkDrove*",
  author: process.env.PACK_AUTHER || "TalkDrove",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "BYTE-MD",
  ownername: process.env.OWNER_NAME || "TalkDrove",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "BYTE").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
