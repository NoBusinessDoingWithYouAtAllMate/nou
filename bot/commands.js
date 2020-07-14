//------Made by CoolMLGPlayer#1337------\\
//---Scripter and Developer of Astral---\\

/* Command Example:
AddCommand("namehere",function(message,args){
//function here
},"Description here","All,Buyer,Premium,Special,Booster,Owner");
*/ 

util = require('util');
inspect = function(e){
return util.inspect(e);
};


aguild = client.guilds.cache.get("718963106344075314");

get = function(e){
return dataBase.getData(e);
};

set = function(e,a){
return dataBase.setData(e,a);
};

remove = function(e){
return dataBase.removeData(e);
};

del = remove;

fs = require("fs");

var v0a = [
"is a godly GUI designer 🔥",
"is an amazing scripter 🔥",
"is super cool 😎"
];

var Mins = ["**Bully**","**Whore**","**Simp**","**Skid**"];

var MLG = [
"is bisexual and proud <a:rainbowBaby:729841385343025233>",
"is an amazing scripter 🔥",
"is super cool 😎",
"is 16 😎"
];

var spl = [
"is **Cool**",
"is **fat** (jk)",
"plays Fortnite"
];

commandz = "https://raw.githubusercontent.com/NoBusinessDoingWithYouAtAllMate/nou/master/bot/commands.js";
let current = "";
let currentchanges = "";

request(commandz, function (error, response, body) {
current = body;
});
manualRefresh = function(){

request(commandz, function (error, response, body) {

if(!body.includes("CoolMLGPlayer")) return;

eval(body);
});
};
refreshCmds = function(){
request(commandz, function (error, response, body) {
if(error) return console.log(error);

if(!body.includes("CoolMLGPlayer")) return;

eval(body);
if(current !== body && current !== "" && currentchanges !== changes1 && currentchanges !== "" && changes1.length > 1){

/*fs.writeFile('changelog.txt', changes, function (err) {
  if (err) throw err;
  console.log('Saved changelog!');
});*/

let avatarurl = owner.displayAvatarURL({dynamic: true});
avatarurl = avatarurl.replace(".webp",".png");
let botavatar = client.user.displayAvatarURL({dynamic: true});
botavatar = botavatar.replace(".webp",".png");
let str = "\nBelow is the **changelog**";
const embed = new Discord.MessageEmbed()
.setColor("00ff99")
.setAuthor(owner.tag,avatarurl)
.setTitle("**UPDATE**")
.setDescription("Automatically found update to commands!" + str)
.setFooter("Update Log",botavatar)
.setTimestamp();
client.channels.cache.map((c)=>{
if(c.name == "bot-updates"){
try{
if(!changes1.toLowerCase().includes("no changelog")){
const embed2 = new Discord.MessageEmbed()
.setColor("303135")
.setTitle("Changelog")
.setDescription(changes1);
c.send(embed);
c.send(embed2);
};
}catch{

};
};
});
};
});
};


limit = false;

AddCommand("rcmds,refreshcmds",function(m){
if(m.author.id !== owner.id) {
		const embed = new Discord.MessageEmbed()
			.setTitle("Error")
			.setColor("ff5555")
			.setDescription("You do not have permission to do this. Role required: N/A")
		return message.reply(embed);
	};
try{
request(commandz, function (error, response, body) {
if(error){
const embed = new Discord.MessageEmbed()
.setColor("ff5555")
.setTitle("Error")
.setDescription(error);
m.reply(embed);
};
let message = m;
let send = true;
  eval(body);
const embed = new Discord.MessageEmbed()
.setColor("00ff99")
.setTitle("Success")
.setDescription("Successfuly refreshed commands");
m.reply(embed);
});
}catch(error){
const embed = new Discord.MessageEmbed()
.setColor("ff5555")
.setTitle("Error")
.setDescription(error);
m.reply(embed);
};
},"Refresh the bot commands",5);

AddCommand("cmds,help", async function(m){
m.delete();
//let themessage = await m.reply("creating commands file...");
let aliases = [];
let ali = [];
let total = 0;

for (var key in cmds) {
    if (key === 'length' || !cmds.hasOwnProperty(key)) continue;
if(ali[key]) continue;
total++
if(typeof cmds[key].func == "undefined") continue;
try{
for (var alan in cmds) {
    if (alan === 'length' || !cmds.hasOwnProperty(alan)) continue;
if(cmds[alan] == cmds[key] && (cmds[alan].desc == cmds[key].desc) && key !== alan){
ali[alan] = true;
};
};
}catch(e){
console.log(e);
};
};

let str = `Made by CoolMLGPlayer#1337
Scripter and Developer of Astral
Total Number of commands: ` + total + "\n\n" + "Aliases are split by '/'" + "\n\nCommands are sorted like the following: COMMAND----DESCRIPTION----PERMISSION LEVEL\n\n";

for (var key in cmds) {
    if (key === 'length' || !cmds.hasOwnProperty(key)) continue;
if(aliases[key]){
continue;
};
str = str + "\n" + prefix +key.toUpperCase();
try{
for (var alan in cmds) {
    if (alan === 'length' || !cmds.hasOwnProperty(alan)) continue;
if(cmds[alan].func == cmds[key].func && key !== alan){
aliases[alan] = true;
str = str + "/" + alan.toUpperCase();
};
};
}catch(e){
console.log(e);
};
for (var key1 in cmds) {
    if (key1 === 'length' || !cmds.hasOwnProperty(key1)) continue;
let desc="";
if(key1 == key){
desc = cmds[key1].desc || descs[key1];
};
if(desc !== ""){
let perm = cmds[key1].perm;
if(perm !== "All"){
if(perm !== "Premium") perm = perm + "s";
perm = perm + " Only";
};
if(perm == "All") perm = "Everyone";
str = str + "----" + desc + "----" + perm + "\n";
};
};
};
try{

fs.writeFile('commands' + m.author.id + '.txt', str, function (err) {
  if (err) throw err;
  console.log('Saved!');
});
m.author.send("Attached is part 2 of commands list", {
			files: [{
		attachment: "commands" + m.author.id + ".txt",
      	name: "commands.txt"
	}]
		}).then((e)=>{
if(typeof themessage !== "undefined") themessage.delete();
});
/*const embed = new Discord.MessageEmbed()
.setColor("0099ff")
.setTitle("Commands 2")
.setDescription(str);
m.author.send(embed);*/
}catch(e){
if(m.aurhor.id !== owner.id){
return m.reply("I couldn’t DM you, please enable DMs");
};
m.reply(e);
};
},"List of Commands");

AddCommand("desc,description",function(m,args){
let cmd = args[0];
if (cmd !== "" && cmd !== null){
cmd = cmd.toLowerCase();
};
if(!cmds[cmd]) return m.reply("No command found");
let str = cmd.toLowerCase();

for (var alan in cmds) {
    if (alan === 'length' || !cmds.hasOwnProperty(alan)) continue;
if(cmds[alan].func == cmds[cmd].func && cmds[alan].desc == cmds[cmd].desc && alan !== cmd){
str = str + "/" + alan.toLowerCase();
};
};
let perm = "Not Found";
if(typeof cmds[cmd].perm !== "undefined"){
perm = cmds[cmd].perm;
if(perm !== "All"){
if(perm !== "Premium") perm = perm + "s";
perm = perm + " Only";
};
if(perm == "All") perm = "Everyone";
};
const embed = new Discord.MessageEmbed()
.setColor("00ff99")
.setTitle(str)
.setDescription(cmds[cmd].desc + "\n\nPermission: " + perm)
.setFooter(m.author.tag + " | " + m.author.id,m.author.displayAvatarURL({dynamic: true}).replace(".webp",".png"))
.setTimestamp();
m.reply(embed);
},"Shows Description for given command")

AddCommand("ping",function(msg){
         var datime = new Date(msg.createdTimestamp)
         msg.channel.send("<@!" + msg.author.id + "> Pong!").then(m => {
                  m.edit("<@!" + msg.author.id + "> Pong! `" + Math.floor(new Date(m.createdTimestamp) - datime) + "ms`")

});},"Pong!");

AddCommand("whois",async function(message,args){
let id= args[0];
if (message.mentions.members.first()){
id=message.mentions.members.first().id;
};
whois(message,id);
},"Get a discord user's Roblox account",1);

AddCommand("avatar", async function(message,args){
let id= args.join(' ');
if (message.mentions.members.first()){
id=message.mentions.members.first().id;
};
let usr = User(id);


if(typeof usr == "undefined") usr = await UserFromID(id);

if(typeof usr == "undefined")return message.reply("Invalid user");
id = usr.id
let msg = message;
let user = "";
let alan = await client.users.fetch(id).then((e) =>{
user = e;
console.log(e.username);
return "a";
}).catch((e) => {
return "y";
});
if (alan == "y"){
msg.reply("invalid id");
msg.channel.stopTyping();
return;
};
let avatarURL = user.displayAvatarURL({dynamic: true, size: 128});
avatarURL = avatarURL.replace(".webp",".png");
msg.reply({
files: [
avatarURL
]
});
}, "Show user's avatar");

AddCommand("emoji",function(m,args){
if(!args[0] || args[0] == "" || typeof args[0] !== "string") return m.reply("Invalid arguments");
if(!m.toString().includes("https://") && !m.toString().includes("http://")){

let gotone = false;
client.guilds.cache.map((guild)=>{
guild.emojis.cache.map((e)=>{
if(gotone) return;
if(args[0].toLowerCase() == "rainbowcat"){
gotone = true
return m.channel.send(`<a:catrainbow1:730743088770973777><a:catrainbow2:730743163081195570> 
<a:catrainbow3:730743262951768185><a:catrainbow4:730743343348318228>`);
};
if(e.name.toLowerCase() == args[0].toLowerCase()){
gotone = true;
m.channel.send(e.toString());
}; 
});
});
if(!gotone) return m.reply("No emoji found");
return;
};
if(m.author.id !== owner.id) {
		const embed = new Discord.MessageEmbed()
			.setTitle("Error")
			.setColor("ff5555")
			.setDescription("You do not have permission to do this. Permission required: Owner")
		return message.reply(embed);
	};
try{
m.guild.emojis.create(args[0],args[1]);
}catch(e){
m.reply(e);
};
},"Say an emoji eg: >emoji evilBlob",1);

AddCommand("delemoji",function(m,args){
if(m.author.id !== owner.id && m.author.id !== "440070180299866127") return m.reply("no");
try{
m.guild.emojis.cache.map((e)=>{
if(e.name==args[0]){
e.delete();
};
});
}catch(e){
m.reply(e);
};
},"Delete an emoji",5);

AddCommand("servers",async function(m){
let str = "";
client.guilds.cache.map(async (g)=>{
let cstr = g.name;
let gotone = false;
g.channels.cache.map(async (c)=>{
if(gotone == true) return;
if(c.type=="text"){
try{
gotone = true;
c.createInvite().then((inv)=>{
cstr = "[" + g.name + "](" + inv.url + ")";

gotone = true;
}).catch((e)=>{
gotone = false;
});
}catch{
gotone = false;
};
};
});
setTimeout(()=>{

str = str + "\n" + cstr;

},500);
});
setTimeout(()=>{
const embed = new Discord.MessageEmbed()
.setColor("00ff99")
.setTitle("List of servers I’m in (" + client.guilds.cache.array().length + ")")
.setDescription(str);
m.reply(embed); 
},1000);
},"Get list of servers I'm in");

AddCommand("snipe",async function(message,args){
let m = message.member;
if(!m.roles.cache.get("718965689746194493") && message.author.id !== owner.id){

const embed = new Discord.MessageEmbed()
			.setTitle("Error")
			.setColor("ff5555")
			.setDescription("You do not have permission to do this. Role required: " + aguild.roles.cache.get("718965689746194493").name);
return message.reply(embed)

};
let id= args[0] || "latest";
if (message.mentions.members.first()){
id=message.mentions.members.first().id;
};

let usr = User(id);

if(typeof usr == "undefined" && id!=="" && id!=="latest") return message.reply("invalid user");
if(id!=="" && id!=="latest"){
id = usr.id
};
if (id == config.ownerid && message.author.id !== owner.id && message.author.id !== Zhekoay.id) {
		const embed = new Discord.MessageEmbed()
			.setTitle("Error")
			.setColor("ff5555")
			.setDescription("You do not have permission to do this. Role required: N/A")
		return message.reply(embed);
	};
if (id !== "latest" && id !==""){
if (!snipemsg[message.channel.id + id]){
return message.reply("No Message Found");
};
};
let messag = snipemsg[message.channel.id + id];
if(!id || id == "latest"){
messag = snipemsg[message.channel.id];
};
if(!messag){
return message.reply("No Message Found");
};
let attachments = "";
let num = 1;
messag.attachments.map((a)=>{
attachments = attachments + "[" + a.name +"](" + a.proxyURL + ")" +"\n";
num = num + 1
});
if (attachments==""){
attachments="None";
};
let content = messag.content;
if(!messag.content || messag.content == ""){
content = "**No Message**";
};
let avatarURL = messag.author.displayAvatarURL({dynamic: true});
avatarURL = avatarURL.replace(".webp",".png");
const embed = new Discord.MessageEmbed()
.setColor("ff99ff")
.setTitle(messag.author.tag)
.setThumbnail(avatarURL)
.setDescription("**Message**: " + content + "\n**Attachments**: "+ attachments)
.addField("Message ID: ",messag.id)
.setFooter(messag.author.id)
.setTimestamp(messag.createdAt)
return message.reply(embed);
},"Snipe message either latest or a user's latest",1);

AddCommand("react",async function(message,args){
let m = message.member;
if(!m.roles.cache.get("718965689746194493") && m.user.id !== owner.id && m.user.id !== Zhekoay.id) {

const embed = new Discord.MessageEmbed()
			.setTitle("Error")
			.setColor("ff5555")
			.setDescription("You do not have permission to do this. Role required: " + aguild.roles.cache.get("718965689746194493").name);
return message.reply(embed);

};

let emoji = args[0];
let messag = args[1] || message.id;
message.channel.messages.fetch(messag).then((m)=>{
let cust = args[0].match(new RegExp(":(.*):"))[1];
client.emojis.cache.map((e)=>{
if(e.name == cust) {
try{
m.react(client.emojis.cache.get(e.id));
}catch{};
};
});

m.react(emoji);

});
},"Add a reaction to a message.",1);

AddCommand("admins",async function(m,args){
if(limit == true){
m.reply("this command is on cooldown");
return
};
limit = true
setTimeout(()=>{
limit = false;
},5000);
let admin = await noblox.getRole({group: groupid,rank: 253});
let plrs = await noblox.getPlayers(groupid, admin.ID);
let str = ""
let num = 0
plrs.forEach(function(p){
num = num + 1;
str = str + "[" + p.username + "](https://roblox.com/users/" + p.userId + "/profile)\n";
});
const embed = new Discord.MessageEmbed()
.setTitle("List of group admins (" + num + ")")
.setColor("ff99ff")
.setDescription(str)
m.channel.send(embed)
},"Get a list of Group Admins",1);

AddCommand("buyers",async function(m,args){
if(limit == true){
m.reply("this command is on cooldown");
return
};
limit = true
setTimeout(()=>{
limit = false;
},5000);
let admin = await noblox.getRole({group: groupid,rank: 250});
let plrs = await noblox.getPlayers(groupid, admin.ID);
let str = ""
let num = 0
plrs.forEach(function(p){
num = num + 1
str = str + "[" + p.username + "](https://roblox.com/users/" + p.userId + "/profile)\n";
});
const embed = new Discord.MessageEmbed()
.setTitle("List of buyers (" + num + ")")
.setColor("ff99ff")
.setDescription(str);
try{
m.author.send(embed);
}catch{
m.reply("I couldn't DM you please enable DMs");
};
},"Get a list of Buyers","Owner");

AddCommand("tsay",async function(message,args){
if (message.author.id !== config.ownerid){

const embed = new Discord.MessageEmbed()
			.setTitle("Error")
			.setColor("ff5555")
			.setDescription("You do not have permission to do this. Role required: N/A");
return message.reply(embed);

};
let chan = getChannel(args[0],message);
message.delete();
if(!args){
return;
};
if(!isNumeric(args[1]) && args[1] !=="inf"){
return;
};
let lengthoftime = parseInt(args[1]) || "inf";
let txt = args.slice(2).join(" ");
chan.send(txt).then((e)=>{
if(args[1]=="inf"){
return;
};
setTimeout(()=>{
e.delete();
},lengthoftime)
});
},"Temporarily say something","Owner");

AddCommand("ravatar",async function(message,args){
    let usr = args.join(' ');
 noblox.getIdFromUsername(usr).then(async (id) => {
let username = await noblox.getUsernameFromId(id);
        const weirdembed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setDescription("[" + username + "](https://roblox.com/users/" + id + "/profile)")
.setImage('http://www.roblox.com/Thumbs/Avatar.ashx?x=150&y=150&format=png&username='+usr)
message.reply(weirdembed);
    }).catch((e)=>{
const embed = new Discord.MessageEmbed()
.setColor("ff5555")
.setTitle("Error")
.setDescription("User not Found");
message.reply(embed);
});
},"Get a Roblox user's avatar");

AddCommand("getshout",async function(message,args){
noblox.getShout(config.groupid).then((shout)=>{
const embed = new Discord.MessageEmbed()
.setAuthor(shout.poster.username,'http://www.roblox.com/Thumbs/Avatar.ashx?x=150&y=150&Format=Png&username='+shout.poster.username)
.setURL("https://roblox.com/users/"+shout.poster.userId+"/profile")
.setDescription(shout.body)
.setColor("0099ff")
return message.reply(embed);
});
},"Get current group shout");

AddCommand("shout",async function(message,args){
if(message.author.id !== config.ownerid && message.author.id !== Zhekoay.id) {
		const embed = new Discord.MessageEmbed()
			.setTitle("Error")
			.setColor("ff5555")
			.setDescription("You do not have permission to do this. Role required: N/A")
		return message.reply(embed);
	};
noblox.shout({
group: config.groupid,
message: args.slice(0).join(" ")
}).then((result)=>{
const embed = new Discord.MessageEmbed()
.setTitle("Success")
.setDescription("Set Group Shout to:\n**"+args.slice(0).join(" ")+"**")
.setColor("0099ff")
return message.reply(embed);
}).catch((e)=>{
const embed = new Discord.MessageEmbed()
.setTitle("Error")
.setDescription(e)
.setColor("ff5555")
return message.reply(embed);
});
},"Set Group shout",5);

AddCommand("bruh",function(message){
    return message.reply("bruh");
},"bruh");

AddCommand("embed",async function(message,args){
if(!message.member.roles.cache.get("718965689746194493") && message.author.id !== owner.id && message.author.id !== Zhekoay.id){
const embed = new Discord.MessageEmbed()
			.setTitle("Error")
			.setColor("ff5555")
			.setDescription("You do not have permission to do this. Role required: " + aguild.roles.cache.get("718965689746194493").name);
return message.reply(embed);
};
if (!args || !args[1] || !args[2]){
return message.reply("invalid arguments");
};
if((args.includes("<@&") || args.includes("@everyone") || args.includes("@here")) && message.author.id !== config.ownerid){
dataBase.setData(message.author.id+"bl","yes");
return message.reply("Blacklisted from bot, have a nice day.");
};
if (message.author.id !== config.ownerid && m.author.id !== Zhekoay.id){
let desc = args.slice(2).join(" ");
let title = args[1];
title = title.split("-").join(" ");
const embed = new Discord.MessageEmbed()
.setTitle(title)
.setColor(args[0])
.setDescription(desc)
.setFooter(message.author.tag+" | "+message.author.id, message.author.displayAvatarURL({dynamic: true}))
.setTimestamp();
message.channel.send(embed);
return;
};
let desc = args.slice(3).join(" ");
message.delete();
let title = args[2];
title = title.split("-").join(" ");
let chan=getChannel(args[0],message);
const embed = new Discord.MessageEmbed()
.setTitle(title)
.setColor(args[1])
.setDescription(desc)
chan.send(embed);
},"Create an embed",1);

AddCommand("color,col",async function(message,args){
let col = args[0] || "ffffff";
col = col.toUpperCase()
const embed = new Discord.MessageEmbed()
.setTitle("**Color Preview**")
.setColor(col)
.setDescription("Preview of color: " + col)
message.reply(embed)
},"Preview hex color");

AddCommand("8ball",async function(message,args){

if(!message.member.roles.cache.get("718965689746194493") && message.author.id !== owner.id && message.author.id !== Zhekoay.id){
const embed = new Discord.MessageEmbed()
			.setTitle("Error")
			.setColor("ff5555")
			.setDescription("You do not have permission to do this. Role required: " + aguild.roles.cache.get("718965689746194493").name);
return message.reply(embed);
};

let question = args.slice(0).join(" ");
if (!question.endsWith("?")){
question = question + "?";
};
let avatarurl = message.author.displayAvatarURL({dynamic: true});
avatarurl = avatarurl.replace(".webp",".png");
let embed = new Discord.MessageEmbed()
        .setAuthor(message.author.tag,avatarurl)
		.addField("Question", question)
		.addField("Answer", (res[Math.floor(Math.random() * res.length)]))
		.setColor('ff99ff')
		message.channel.send(embed)

},"Ask the bot a question","Buyer");


AddCommand("info", async function (m, args) {
	let id= args.join(' ');
if (m.mentions.members.first()){
id=m.mentions.members.first().id;
};
let ment = User(id);


if(typeof ment == "undefined") ment = await UserFromID(id);

if(typeof ment == "undefined")return message.reply("Invalid user");
	let avatarURL = ment.displayAvatarURL({dynamic: true});
	avatarURL = avatarURL.replace(".webp", ".png");

let flags = await ment.fetchFlags();
flags = flags.toArray();
let str = "";
flags.forEach(function(f){
str = str + "\n" + f;
});
str = str.replace("HOUSE_BRAVERY","HypeSquad Bravery");

str = str.replace("HOUSE_BRILLIANCE","HypeSquad Brilliance");

str = str.replace("HOUSE_BALANCE","HypeSquad Balance");
if(str == "") str = "None"; 

	const embed = new Discord.MessageEmbed()
		.addField("Username", ment.tag)
		.addField("ID", ment.id)
        .addField("User Flags",str)
		.addField("Status", ment.presence.status)
		.addField("Created", ment.createdAt)
		.setThumbnail(avatarURL)
		.setColor("ff99ff")
	m.reply(embed);
},"Get info on a discord user");

AddCommand("groupmembers", async function (m) {

if(limit == true){
m.reply("this command is on cooldown");
return
};
limit = true
setTimeout(()=>{
limit = false;
},5000);
	let roles = await noblox.getRoles(config.groupid)
	const embed = new Discord.MessageEmbed()
		.setTitle("Member Count in group")
		.setColor("ff99ff")
		.addField("Non Buyer", roles[1].memberCount)
		.addField("Buyer", roles[2].memberCount)
		.addField("Admin", roles[3].memberCount)
		.addField("Developer", roles[4].memberCount)
		.addField("The Lord", roles[5].memberCount)
	m.reply(embed);
},"Show how many group members we have")

AddCommand("carrothub,carrot,karrot", async function (m, args) {
	try{
let Karrot= await UserFromID('142007603549962240');
		const embed = new Discord.MessageEmbed()
			.setTitle("Carrot Hub")
			.setColor("ffa200")
.setThumbnail("https://cdn.discordapp.com/attachments/717454449551081474/729669853723492422/image0.png")
			.addField("Price", "$10")
			.addField("Developer", Karrot.tag + " (" + Karrot.toString() + ")")
			.addField("Discord", "[Click Here to join server](https://discord.com/invite/PyWnype)")
		m.author.send(embed);
	} catch {
		m.reply("I could not DM you. Please allow DMs");
	};
},"Get info on Carrothub");

AddCommand("buy,purchase", function (m, args,command) {
m.delete();
	if (m.member.roles.cache.get("718965689746194493")){
if(command=="purchase"){
const embed = new Discord.MessageEmbed()
.setColor("ff5555")
.setTitle("Error")
.setDescription("You are already a buyer.")
.setFooter(m.author.tag + " | " + m.author.id,m.author.displayAvatarURL({dynamic: true}).replace(".webp",".png"))
.setTimestamp()
m.reply(embed).then((e)=>{
setTimeout(()=>{
e.delete();
},5000);
});
};
return;
};
	try {
		const embed = new Discord.MessageEmbed()
			.setTitle("**How to buy Astral**")
			.setDescription("**PLEASE READ <#718964346163560448>**")
			.setColor("ff99ff")
            .setThumbnail(aguild.iconURL({dynamic: true}))
			.addField("**Price**", "10 (Normal) 15 (Premium) **CAD** (<@!248232475476754432>) (Accepts PayPal payments DM for info")
			.addField("**Gift Cards**", "https://g2a.com/")
			.addField("**ROBUX**", "https://rbx.place/ (**Note**: Be sure to make username '**Zhekoay**' then DM <@!248232475476754432> the invite it gives you)");
        if(command=="buy"){
		m.author.send("**IGNORE ABOVE MESSAGE**")
        };
		m.author.send(embed);
	} catch {
		m.reply("I could not DM you. Please allow DMs");
	};
},"Shows you how to buy astral");

AddCommand("rps,rockpaperscissors", function (message, args) {
let m = message.member;
if(!m.roles.cache.get("718965689746194493") && message.author.id !== owner.id && message.author.id !== Zhekoay.id){
const embed = new Discord.MessageEmbed()
			.setTitle("Error")
			.setColor("ff5555")
			.setDescription("You do not have permission to do this. Role required: " + aguild.roles.cache.get("718965689746194493").name);
return message.reply(embed);
};

	const acceptedReplies = ['rock', 'paper', 'scissors'];
	const random = Math.floor((Math.random() * acceptedReplies.length));
	const result = acceptedReplies[random];

	const choice = args[0];
	if (!choice) return message.channel.send(`How to play: \`${prefix}rps <rock|paper|scissors>\``);
	if (!acceptedReplies.toLowerCase().includes(choice)) return message.channel.send(`Only these responses are accepted: \`${acceptedReplies.join(', ')}\``);

	console.log('Bot Result:', result);
	if (result === choice) return message.reply("It's a tie! I also chose " + result);

	switch (choice) {
	case 'rock': {
		if (result === 'paper') return message.reply('I won! I chose ' + result);
		else return message.reply('You won! I chose ' + result);
	}
	case 'paper': {
		if (result === 'scissors') return message.reply('I won! I chose ' + result);
		else return message.reply('You won! I chose ' + result);
	}
	case 'scissors': {
		if (result === 'rock') return message.reply('I won! I chose ' + result);
		else return message.reply('You won! I chose ' + result);
	}
	default: {
		return message.channel.send(`Only these responses are accepted: \`${acceptedReplies.join(', ')}\``);
	}
	}

},"Play a game of Rock Paper Scissors against me",1);

AddCommand("file", function (m, args) {
	if (m.author.id == owner.id || m.author.id !== Zhekoay.id) {
		m.delete();
		let img = args[0];
        let name = args.slice(1).join(" ");
        if(name=="" && !img.endsWith("png") && !img.endsWith("jpg") && !img.endsWith("jpeg") && !img.endsWith("gif") && !img.endsWith("mp4") && !img.endsWith("webp") && !img.endsWith("webm")){
        name = "message.txt";
        };
		m.channel.send("", {
			files: [{
		attachment: img,
      	name: name
	}]
		});
	}else {
	
const embed = new Discord.MessageEmbed()
			.setTitle("Error")
			.setColor("ff5555")
			.setDescription("You do not have permission to do this. Role required: N/A");
return message.reply(embed);
	};
},"Send a file",5);

AddCommand("dmfile", function (m, args) {
	if (m.author.id == owner.id || m.author.id == Zhekoay.id) {
m.delete();
let id = args[0];
	if (m.mentions.members.first()) {
		id = m.mentions.members.first().id;
	};
let user = client.users.cache.get(id);
		let img = args[1];
        let name = args.slice(2).join(" ");
        if(name=="" && !img.endsWith("png") && !img.endsWith("jpg") && !img.endsWith("jpeg") && !img.endsWith("gif") && !img.endsWith("mp4") && !img.endsWith("webp") && !img.endsWith("webm")){
        name = "message.txt";
        };

try{
user.send("", {
			files: [{
		attachment: img,
      	name: name
	}]
		});
}catch(e){
const embed = new Discord.MessageEmbed()
				.setTitle("Error")
				.setColor("ff5555")
				.setDescription(e)
			return m.reply(embed);
};
}else {
		const embed = new Discord.MessageEmbed()
			.setTitle("Error")
			.setColor("ff5555")
			.setDescription("You do not have permission to do this")
		return message.reply(embed);
	};
},"DM a file to a user",5);

AddCommand("purge",async function(m,args){
if (typeof m !== "undefined" && !m.member.hasPermission('MANAGE_MESSAGES')){
const embed = new Discord.MessageEmbed()
			.setTitle("Error")
			.setColor("ff5555")
			.setDescription("You do not have permission to do this. Permission required: Manage Messages")
		return message.reply(embed);

};
let e = args[0];
e = parseInt(e);
m.delete();
setTimeout(async ()=>{
let msgs = await m.channel.messages.fetch({
limit: e
});
m.channel.bulkDelete(msgs);
},500);
},"Purge some messages");

AddCommand("mlg,coolmlgplayer",function(m){
m.reply("CoolMLGPlayer#1337 " + MLG[Math.floor(Math.random() * MLG.length)]);
},"Random fact about CoolMLGPlayer")

AddCommand("v0a,zhekoay",function(m){
m.reply(Zhekoay.tag + " " + v0a[Math.floor(Math.random() * v0a.length)]);
},"Random fact about Zhekoay")

AddCommand("mins",async function(m){
let mins = await client.users.fetch("293166723593666571");
m.channel.send(mins.toString() + " is a " + Mins[Math.floor(Math.random() * Mins.length)]);
},"Random fact about 33mins");

AddCommand("mike,mikey", function (m, args) {
	m.channel.send("Wazowski");
},"Wazowski");

AddCommand("spliicxr", async function (m, args) {
let spliicxr = await client.users.fetch("410281148128690198");

m.channel.send(spliicxr.toString() + " " + spl[Math.floor(Math.random() * spl.length)]);

},"Random fact about spliicxr");

AddCommand("hasty", function (m, args) {
	m.channel.send("is a skid").then((msg) => {
		setTimeout(() => {
			msg.edit("jk");
		}, 1000);
	});
},"Nothing.....");

AddCommand("addcmd,addcommand", function (m, args) {

	let names = args[0];
	let ee = args.slice(1).join(" ");
	let func = new Function("m", "args", ee)
	AddCommand(names, func)
},"Add a command",5);

AddCommand("delcmd,deletecommand", function (m, args) {
	let names = args[0];
	DeleteCommand(names);
},"Delete a command",5);

AddCommand("vote", function (m, args) {
	let vote = args.slice(0).join(" ");
	const embed = new Discord.MessageEmbed()
		.setColor("ff99ff")
		.setTitle("**VOTE**")
		.setDescription(vote);
m.guild.channels.cache.map((c)=>{
if(c.name.toLowerCase() !== "votes") return;
c.send(embed);
});

},"Create a vote","Owner");

AddCommand("blacklist,bl", function (message, args) {

	let id = args.slice(0).join(" ");
	if (message.mentions.members.first()) {
		id = message.mentions.members.first().id;
	};

let usr = User(id);

if(typeof usr == "undefined") return message.reply("invalid user");
id = usr.id
	dataBase.setData(id + "bl", "yes");
	message.reply(User(id).tag + " has been blacklisted from the bot");
},"Blacklist someone from the bot","Owner");

AddCommand("unblacklist,unbl", function (message, args) {

	let id = args.slice(0).join(" ");
	if (message.mentions.members.first()) {
		id = message.mentions.members.first().id;
	};

let usr = User(id);

if(typeof usr == "undefined") return message.reply("invalid user");
id = usr.id
	dataBase.removeData(id + "bl");
	message.reply(User(id).tag + " has been unblacklisted from the bot if they were blacklisted ");
},"Unblacklist someone from the bot","Owner");

AddCommand("cooldown",async function(message,args){
let num;
if(isNumeric(args[args.length - 1]) || args[args.length - 1] == "r" || args[args.length - 1] == "reset"){
num = args.pop();
};
	let id = args.slice(0).join(" ");
	if (message.mentions.members.first()) {
		id = message.mentions.members.first().id;
	};
let usr = User(id);

if(typeof usr == "undefined" && id!=="d" && id!=="default") return message.reply("invalid user");
if(typeof usr !== "undefined"){
id = usr.id;
};
if(id=="default" || id=="d"){
if(!isNumeric(num)){
if(!args[1] || args[1] == "" || args[1] == "" || typeof args[1] == "undefined"){
return message.reply("Default Countdown is " + get('cooldown') + " second(s)");
};
return message.reply("Invalid Cooldown");
};
set("cooldown",parseInt(num))
return message.reply("Default Cooldown has been set to " + num + " second(s).");
};

let Andrew = cooldown["d"];
if(typeof cooldown[usr.id] == "number"){
Andrew = cooldown[usr.id];
};
if(!num || num == "" || num == "" || typeof num == "undefined"){
return message.reply(usr.tag + "’s Cooldown is " + Andrew + " second(s)");
};

cooldown[id] = num;
set("cool",JSON.stringify(cooldown));
if(!isNumeric(num) && num !== "reset" && num !== "r") return message.reply("Invalid Cooldown");
if(num == "reset" || num == "r"){
delete cooldown[id];
set("cool",JSON.stringify(cooldown))
return message.reply(usr.tag + "’s Cooldown has been set to the default cooldown.");
};
cooldown[id] = parseInt(num);
set("cool",JSON.stringify(cooldown))
message.reply(usr.tag + "’s Cooldown has been set to " + num + " second(s).");
},"set cooldown for user","Owner");

AddCommand("invite,inv",async function(m){
let inv = await m.channel.createInvite().catch((e)=>{
return m.reply(e);
});
m.reply(inv.url);
},"Generate an invite for current channel");

AddCommand("botinv,botinvite",function(m){
return m.reply("https://discord.com/oauth2/authorize?=&client_id=716753342285611058&scope=bot&permissions=2081291511");
},"Get the bot invite");

AddCommand("freerobux",function(m){
const embed = new Discord.MessageEmbed()
.setColor("00ff99")
.setTitle("Free Robux")
.setThumbnail("https://vignette.wikia.nocookie.net/roblox/images/5/50/Robux_2019_white.svg/revision/latest/top-crop/width/220/height/220?cb=20191122104417")
.setDescription("[Click Here](https://m.youtube.com/watch?v=dQw4w9WgXcQ)");
m.reply(embed);
},"Get free Robux","Special");

AddCommand("send",function(m,args){

return m.reply(get(args.slice(0).join(" ")))
},"Send data from database","Owner");

AddCommand("encrypt",function(message,args){

if (message.author.id !== config.ownerid && message.author.id !== "248232475476754432" && message.author.id !== "476110417035395082") {
		const embed = new Discord.MessageEmbed()
			.setTitle("Error")
			.setColor("ff5555")
			.setDescription("You do not have permission to do this. Role required: N/A")
		return message.reply(embed);
	};
return message.reply(encrypt(args.slice(0).join(" ")))
},"Encrypt a string","Owner");

AddCommand("decrypt",function(message,args){

if (message.author.id !== config.ownerid && message.author.id !== "248232475476754432" && message.author.id !== "476110417035395082") {
		const embed = new Discord.MessageEmbed()
			.setTitle("Error")
			.setColor("ff5555")
			.setDescription("You do not have permission to do this. Role required: N/A")
		return message.reply(embed);
	};
return message.reply(decrypt(args.slice(0).join(" ")))
},"Decrypt a string","Owner");

AddCommand("ai",function(m,args){
let ch = args[0]
if(ch == "" || ch == "undefined" || typeof ch == "undefined"){
ch=m.channel.toString();
};
let e = getChannel(ch,m);
if(e=="undefined"){
e = m.channel;
};
e = e.id
if(typeof get("ee") !== "string"){
m.reply("Enabled AI in <#" + e + ">");
return set("ee",e);
};
owner.dmChannel.stopTyping();
m.reply("Disabled AI in <#" + get('ee') + ">");
del("ee");
},"Toggle AI","Owner");

/*AddCommand("autosnipe",async function(message,args){
	let id = args.slice(0).join(" ");
	if (message.mentions.members.first()) {
		id = message.mentions.members.first().id;
	};

let usr = User(id);

if(typeof usr == "undefined") return message.reply("invalid user");
id = usr.id
if(autosnipe[id]){
delete autosnipe[id];
return message.reply(usr.tag + "’s auto snipe has been disabled");
};
autosnipe[id] = true;
return message.reply(usr.tag + "’s auto snipe has been enabled");
},"Toggle autosnipe for user","Owner"); 
*/
AddCommand("membercount",function(m){
m.reply(m.guild.memberCount);
},"Get number of members in server");

AddCommand("getroles",function(m,args){

function getMember(e){
if(m.guild){
   return m.guild.members.cache.get(User(e).id);
}else{
return aguild.members.cache.get(User(e).id);
};
};
let id = args.slice(0).join(" ");
	if (m.mentions.members.first()) {
		id = m.mentions.members.first().id;
	};
let mem = undefined;
try{
mem = getMember(id);
}catch{
return m.reply("Invalid member");
};

if(typeof mem == "undefined") return m.reply("invalid member");

let str = "";
mem.roles.cache.map((r)=>{
str = str + "\n" + r.toString();
});

const embed = new Discord.MessageEmbed()
			.setTitle("**" + mem.displayName + "**" + " (" + mem.user.tag + ")")
			.setColor("00ff99")
			.setDescription(str);
		return m.reply(embed);

},"Get roles of a member");

AddCommand("loader",function(m){
DM(m.author.id,'Loader: `loadstring(game:HttpGet("https://raw.githubusercontent.com/wuidwonfnendkcnk/Astral/master/loader"))()`').catch((e)=>{
m.reply("I couldn’t DM you")
});
},"Get the loader","Buyer");

AddCommand("urban",function(m,args){
request("http://urbanscraper.herokuapp.com/search/" + args.slice(0).join(" "), function (error, response, body) {
if(error) return console.log(error);

let avatarurl = m.author.displayAvatarURL({dynamic: true});
avatarurl = avatarurl.replace(".webp",".png");
let res = JSON.parse(body);
if(res.length < 1){

const embed = new Discord.MessageEmbed()
.setColor("ff5555")
.setTitle("**Error**")
.setDescription("No term found")
.setFooter(m.author.tag + " | " + m.author.id,avatarurl)
.setTimestamp();
return m.reply(embed);

};
if(res.message){
if(res.message.includes("Route not found")){
res.message = "Invalid input.";
};
const embed = new Discord.MessageEmbed()
.setColor("ff5555")
.setTitle("**Error**")
.setDescription(res.message)
.setFooter(m.author.tag + " | " + m.author.id,avatarurl)
.setTimestamp();
return m.reply(embed);
};
res = res[0];
const embed = new Discord.MessageEmbed()
.setColor("00ff99")
.setTitle(res.term)
.addField("**Definition**",res.definition)
.addField("**Example**",res.example)
.setFooter(m.author.tag + " | " + m.author.id,avatarurl)
.setTimestamp();
return m.reply(embed);
});
},"Define a term using urban dictionary","All");

AddCommand("sendall",function(m,args){
if(!m.guild) return;
if(!args[0]) return m.reply("invalid input");
let txt = args.slice(0).join(" ");
m.guild.members.cache.map((mem)=>{
try{
mem.send(txt);
}catch{};
});
},"Send a message to all users","Owner")






AddCommand("execute,load,e", async function (m, args) {
let block = false;
let message = m;
let catcherror = true;
let self;
try{
self = m.member;
}catch{};
    let msg = m;
    let channel = m.channel;

    let guild = channel.guild || channel;
    function send(val1,val2){
try{
val1 = val1.split("/shrug").join("¯\\_(ツ)_/¯");

val2 = val2.split("/shrug").join("¯\\_(ツ)_/¯");
}catch{};
    return channel.send(val1,val2).catch((e)=>{
    block = true;

    const embed = new Discord.MessageEmbed()
			.setTitle("Error")
			.setColor("ff5555")
			.setDescription(e);
		return message.reply(embed);
    });
    };
    function sendData(a){
    return send(get(a))
    };
   function getMember(e){
   return guild.members.cache.get(User(e).id);
   };
   function sendThenEdit(o,l,t,c){
    if(!c){
    t = t * 1000
    send(o).then((a)=>{
    setTimeout(()=>{
    a.edit(l);
    },t);
    });
    }else{
    print(c,o).then((a)=>{
    setTimeout(()=>{
    a.edit(l);
    },t);
    });
    };
    };
    sendTextFile = function(text,user){
    fs.writeFile('thing.txt', text, function (err) {
  if (err) throw err;
    });
    if(!user) user = self.toString();
    user = User(user);
   return user.send({

files: [{
		attachment: "thing.txt",
      	name: "message.txt"
	}]
});
};

let members = [];
try{
guild.members.cache.map((mem)=>{
members[mem.user.tag] = mem;
members[mem.user.username] = mem;
});
}catch{
aguild.members.cache.map((mem)=>{
members[mem.user.tag] = mem;
members[mem.user.username] = mem;
});
};
	if (message.author.id !== config.ownerid && message.author.id !== "248232475476754432" && m.author.id !== "476110417035395082") {
		const embed = new Discord.MessageEmbed()
			.setTitle("Error")
			.setColor("ff5555")
			.setDescription("You do not have permission to do this. Role required: N/A")
		return message.reply(embed);
	};


let code = args.slice(0).join(" ");
if(code.includes('client["t') || code.includes("client['t") || code.includes("token") || code.includes("cookie")){
code = "send('no')";
};

	try {
		return Promise.resolve(eval("(async () => {" + code + "})()")).then((e)=>{
catcherror = false;
if(typeof e!=="number" && typeof e!=="undefined") return;
if(typeof e!=="number"){
e = 3000;
};
if(!block){
/*const embed = new Discord.MessageEmbed()
.setColor("00ff99")
.setTitle("Success")
.setDescription("Successfully executed!");
return m.reply(embed).then((ev)=>{
setTimeout(()=>{
ev.delete();
},e)
});*/
};
}).catch((e) => {
catcherror = false;
			const embed = new Discord.MessageEmbed()
				.setTitle("Error")
				.setColor("ff5555")
				.setDescription(e)
			return message.reply(embed);
		});
	} catch (e) {
catcherror = false;
		const embed = new Discord.MessageEmbed()
			.setTitle("Error")
			.setColor("ff5555")
			.setDescription(e)
		return message.reply(embed);
	};
},"Execute some code","Owner");



/*guild.emojis.cache.map((e)=>{
AddCommand(e.name,function(m){
let message = m;
if(!m.member.roles.cache.get("718965689746194493") && message.author.id !== owner.id && m.author.id !== Zhekoay.id){
return message.reply("you do not have permission to do this. Role needed: Buyer");
};
m.channel.send(e.toString());
},"Send " + e.name + " emoji");
})*/
changes = `` + "```ini" + `
[Changelog]
- No changelog
` + "```";


changes1 = `- Minor fixes`;
changes1 = changes1.split("/shrug").join("¯\\_(ツ)_/¯");
currentchanges = changes1;
