const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "254740276478" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254740276478";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_54_07_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDI4LFxuICAgICAgICA0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyLFxuICAgICAgICA2MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDM1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDkzLFxuICAgICAgICA2NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDU1LFxuICAgICAgICA0MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTMsXG4gICAgICAgIDY5LFxuICAgICAgICA2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDgzLFxuICAgICAgICA3MixcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDcyLFxuICAgICAgICAzMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxODQsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDczLFxuICAgICAgICA4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAzNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTc4LFxuICAgICAgICA0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDk5LFxuICAgICAgICA3MixcbiAgICAgICAgMTAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDc3LFxuICAgICAgICA5MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTcsXG4gICAgICAgIDEwMixcbiAgICAgICAgNjYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTk0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTksXG4gICAgICAgIDgxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDY2LFxuICAgICAgICA4NSxcbiAgICAgICAgMjE1LFxuICAgICAgICA4MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMCxcbiAgICAgICAgMjMzLFxuICAgICAgICA0NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDksXG4gICAgICAgIDE4MixcbiAgICAgICAgOTksXG4gICAgICAgIDcyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTc4LFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDEyLFxuICAgICAgICA5NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5LFxuICAgICAgICA4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDc2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTc4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDAsXG4gICAgICAgIDk5LFxuICAgICAgICAxODcsXG4gICAgICAgIDExMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDUxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTY1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMyxcbiAgICAgICAgMTM1LFxuICAgICAgICA1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA3MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNSxcbiAgICAgICAgODQsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDk3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDc3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNixcbiAgICAgICAgNTAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjA0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNixcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDExOSxcbiAgICAgICAgODQsXG4gICAgICAgIDUwLFxuICAgICAgICAxNyxcbiAgICAgICAgMzksXG4gICAgICAgIDE3MixcbiAgICAgICAgODIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMCxcbiAgICAgICAgODEsXG4gICAgICAgIDIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjMwUVN5b1R4ZVo3V1YvOEhyVkVjZlBDM0d6UGZxMmloaXd2Y2RDa3JOV2c9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjBMQmRMaC12UTdhM3hoXzFsRl9QMGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiY2JiMmJmNWEtZmRhOS00MWZlLTg5MmEtMjZhOWU4ZDAzZGEyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxOSxcbiAgICAgIDIwOSxcbiAgICAgIDEyNSxcbiAgICAgIDIzOSxcbiAgICAgIDMzLFxuICAgICAgMTIzLFxuICAgICAgMTUxLFxuICAgICAgNDcsXG4gICAgICAyNDgsXG4gICAgICA2NixcbiAgICAgIDI0NSxcbiAgICAgIDI0OSxcbiAgICAgIDEzMixcbiAgICAgIDE0OCxcbiAgICAgIDI0MSxcbiAgICAgIDIzOSxcbiAgICAgIDkyLFxuICAgICAgMTg1LFxuICAgICAgMTg5LFxuICAgICAgMTAxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyOCxcbiAgICAgIDE1NCxcbiAgICAgIDIzOSxcbiAgICAgIDI0OCxcbiAgICAgIDIzNCxcbiAgICAgIDQ1LFxuICAgICAgMjIyLFxuICAgICAgMTYyLFxuICAgICAgNTEsXG4gICAgICAyMzYsXG4gICAgICAyMDMsXG4gICAgICAxNjcsXG4gICAgICA5NCxcbiAgICAgIDEzOSxcbiAgICAgIDQ0LFxuICAgICAgMTU5LFxuICAgICAgMSxcbiAgICAgIDE0NSxcbiAgICAgIDUwLFxuICAgICAgMTg4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkNSWExYQTkzXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3NDAyNzY0Nzg6ODBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE5MDE2MDAyOTM2ODQ2MTo4MEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQYnMzZkFERUlXUmw3UUdHQWtnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkFvWU9tU2N4MXg0RDRjdjgvZGJ0TWlsaERneW5zbm55U1RiVTBKRXJMZ3c9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiaEZJSFBYM1lzcnVudTU4cnlSN2VwdE1teHdnSVNjSnRrYjZPbE1lVkU5eVpoSG5yUG04REZUK0V4UmtmNG1KNkcrUUNNZ0xpcWVrMTBrRjVoMmhhQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidTZINlAyaEZVckpqNUxxYXZKOEVrQ1VVN0R3WHkxdVJtNVczRDNWc0pQcWpqTFgvRm5HYWJuTGI1d3RieVRYTVN3bkdlMG9wMWtHemFZVVJrSjNSQ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzQwMjc2NDc4OjgwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMDQzNjU4XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Sparta",
  packname: process.env.PACK_NAME || "Jumbo",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
