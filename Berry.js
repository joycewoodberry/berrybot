const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

let prefix = config.prefix;

//Esto es lo que dice Berry cuando se acitva :D

client.on('ready', () => {
   console.log("Estoy lista Ama!");

   //estado de Berry


client.user.setStatus('Online')

//juego que está jugando (valga la redundancia) Berry

client.user.setGame('Prefix b! | b!ayuda (Están trabajando en mi, ten paciencia conmigo porfa)')

client.on("guildMemberAdd", (member) => {
  let canal = client.channels.get('505685244968697868'); 
  canal.send(`Hola ${member.user}!, Bienvenido a ${member.guild.name}, Esperamos que disfrute su estadía, recuerde leer las #reglas 🎉🤗! 

Hello ${member.user}!, Welcome to ${member.guild.name}, We hope you enjoy your stay, remember to read the rules :tada::hugging:!.`);
 
});
});

client.on("message", (message) => { //comienzo de los mensajes que dice la querida berry

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if (!message.content.startsWith(prefix)) return; 
    if (message.author.bot) return;
    
//Redes de tpp :3

    if(command === 'twitter') {
      message.channel.send({embed: {
        color: 0xFDB0AD,
        description: "Este es: https://twitter.com/TPP2k18"
      }

      
  });

  }

  if(command === 'tumblr') { 
   message.channel.send({embed: {
      color: 0xFDB0AD,
      description: "Aqui puedes ver todos lo capitulos completos y en español (mas idiomas pronto) de The Penguin Paradise https://thepenguinparadise.tumblr.com/ , recuerda compartirlos si tienes cuenta en tumblr y darle like... Gracias por todo el apoyo <3"
    }
});

  }

  if(command === 'imgur') { 
    message.channel.send({embed: {
      color: 0xFDB0AD,
      description: "Este es: https://tpp2k18.imgbb.com/"
    }
});

  }
  if(command === 'logo') { 
    message.channel.send({embed: {
      color: 0xFDB0AD,
      description: "Este es: https://cdn.discordapp.com/attachments/491963263681167360/492152650763206666/Tpp_logo.png"
    }
});

}

if(command === 'marcadeagua') { 
  message.channel.send({embed: {
    color: 0xFDB0AD,
    description: "Esta es -3-/ https://media.discordapp.net/attachments/491963263681167360/506951530197286923/Marca_de_agua_tpp.png?width=995&height=76"
  }
});

  }
    if(command === 'redes') {
        const embed = new Discord.RichEmbed() 
    .setTitle("Redes Sociales de TPP")
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor(0xFDB0AD)
    .setDescription("A continuación se encuentran el tumblr, el twitter y el imgur de nuestro cómic, disfruten!")
    .setFooter("Gracias por leer!", client.user.avatarURL)
    .setImage("https://cdn.discordapp.com/attachments/491963263681167360/492152650763206666/Tpp_logo.png")
    .setThumbnail(message.author.avatarURL)
    .setTimestamp()
    .setURL()
    .addField("Tumblr:", "https://thepenguinparadise.tumblr.com/")
    .addField("Twitter:", "https://twitter.com/TPP2k18", true)
    .addField("Imgur:", "https://tpp2k18.imgbb.com/", true)
    .addBlankField(true);
    message.channel.send({embed});
   
}

    if(command === 'invitacion') {
      message.channel.send({embed: {
        color: 0xFDB0AD,
        description: "Esta es :D/ https://discord.gg/sjsf3qY"
      }
  });

//Cosas de prueba/Estúpidas :v
  
}
  if(command === 'ping') { 
    let ping = Math.floor(message.client.ping);
message.channel.send(":ping_pong: Pong! jsjsjs, "+ ping + "ms");

//avatar :u
}

if (command === 'avatar') {
  let user = message.mentions.users.first() || message.author;
  let embed = new Discord.RichEmbed()
  .setAuthor(`${user.username}`) 
  .setImage(user.displayAvatarURL)
  .setColor('#FDB0AD')

  message.channel.send(embed)

}
//server info v:
if(command === 'serverinfo') {
var server = message.guild;
  
const embed = new Discord.RichEmbed()
    .setThumbnail(server.iconURL)
    .setAuthor(server.name, server.iconURL)
    .addField('ID', server.id, true)
    .addField('Region', server.region, true)
    .addField('Creado el', server.joinedAt.toDateString(), true)
    .addField('Dueño del Servidor', server.owner.user.tag +'('+server.owner.user.id +')', true)
    .addField('Miembros', server.memberCount, true)
    .addField('Roles', server.roles.size, true)
    .setColor(0xFDB0AD)
    
message.channel.send({ embed });

}
//BORRADOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOR :3
if(command === 'borrar') {
let cantidad = parseInt(args[0]);
message.channel.bulkDelete(cantidad);

}

if(command === "di") {

  let say = args.join(' '); 
  message.delete();
  message.channel.send(say);

}

if(command === 'ayuda') {
message.channel.send('**'+message.author.username+'**, Revisa tus mensajes privados!!');

const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setTitle(":sparkles: __Comandos:__")
    .addField('Comandos relacionados con TPP:', '`twitter` | `tumblr` | `imgur` | `redes`', true)
    .addBlankField(true)
    .addField('Comandos extras :D!', '`ping` |  `avatar` | `serverinfo`', true)
    .addBlankField(true)
    .addField('Invitacion para TPP:', '[Link de invitacion](https://discord.gg/sjsf3qY)', true)
    .addBlankField(true)
    .setFooter("Gracias por leer! ^^", client.user.avatarURL)
    .setThumbnail(message.author.avatarURL)
    .setColor(0xFDB0AD)
    
message.author.send({ embed });

}

if(command === 'ayudastaff') {
  message.channel.send('**'+message.author.username+'**, Revisa tus mensajes privados!!');

  const embed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setTitle(":sparkles: __Comandos:__")
  .addField('Para el Staff jsjs :', '`borrar <cantidad + 1>` | `di <frase>` | `marcadeagua` | `logotpp` ', true)
  .addBlankField(true)
  .setFooter("Gracias por leer! ^^", client.user.avatarURL)
  .setThumbnail(message.author.avatarURL)
  .setColor(0xFDB0AD)
  
message.author.send({ embed });

}
});

client.login(config.token);