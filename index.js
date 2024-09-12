const mineflayer = require('mineflayer')

const adminList = [
    //config
]

const staffList = [
  //config
]

const bot = mineflayer.createBot({
  host: '', // minecraft server ip
  username: 'REPLACE WITH MICROSOFT EMAIL', // minecraft username
  password: 'REPLACE WITH MICROSOFT PASSWORD', // minecraft password, comment out if you want to log into online-mode=false servers
  version: "1.19",             // only set if you need a specific version or snapshot (ie: "1.8.9" or "1.16.5"), otherwise it's set automatically
  auth: 'microsoft'              // only set if you need microsoft auth, then set this to 'microsoft'  
})


bot.on('spawn', () => {
    console.log("[SPAWN]");
  });

function actualTrial(goTest) {
  const blockX = bot.findBlocks({
    matching: [goTest],
    point: bot.entity.position,
    maxDistance: 500,
    count: 50,          
  })
  blockX.forEach(a => console.log(bot.blockAt(a).position));
}

bot.on("message", async function (jsonMsg, position, sender, verified) {
    const jsonString = JSON.stringify(jsonMsg);
    const data = JSON.parse(jsonString);
    if(data.json.extra != undefined) {
        if(data.json.extra[0].extra != undefined) {
            if(adminList.includes(data.json.extra[0].extra[0].extra[7].text)) {
              const w = (data.json.extra[2].text).replace(/^\s/, '');
                console.log(w);
                if(w == "1") {
                  actualTrial(149);
                  return;
              }  if(w == "2") {
                  actualTrial(166);
                  return;
              }  if(w == "3")  {
                  actualTrial(160);
                  return;
              }
            }
        }
    }
  });


bot.on("playerJoined", function (player) {
    if(staffList.includes(player.username)) {
        console.log("[STAFF]: " + player.username);
    }
})


bot.on('kicked', console.log)
bot.on('error', console.log)
