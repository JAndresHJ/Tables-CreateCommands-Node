//REQUIRES
// - Proyectos propios de Node
// - No nativos de node (Express, etc.)
// - Archivos 


const {crearArchivo, listar}  = require('./multiplicar/multiplicar'); // Destructuración e importacion de función
const argv = require('./config/yargs').argv;

//let argv2 = process.argv;

console.log('Limite', argv.limite);


let comando = argv._[0]; // Del arreglo de argv, el primer elemento es el comando
switch (comando) {
  case 'listar':
        listar(argv.base, argv.limite);
    break;

  case 'crear':
      crearArchivo(argv.base, argv.limite)
      .then( archivo => console.log(`Archivo creado: ${ archivo }`))
      .catch( e => console.log(e));
    break;

  default:
      console.log('Comando inexistente');
    break;
}

 
