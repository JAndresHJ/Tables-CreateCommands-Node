const fs = require('fs'); // File System import from Node


// Función crear archivo
let crearArchivo = (base, limite) => {

    return new Promise( (resolve, reject) => {
        let data = '';

        if(!Number(base)){
            reject('No es un numero');
            return;
        }

        for(let i = 1; i <= limite; i++)
        {   
            console.log(`${base} * ${i} = ${2*i}`);
            data += `${base} * ${i} = ${2*i}\n`;
        }

        fs.writeFile(`tabla-${base}.txt`, data, (err) => {
            if (err) 
                reject(err);
            else
                resolve(`table-${base}.txt`);
         
        });
    });
}


// Función listar tabla de multiplicar

let listar = (base, limite) => {
        for(let i = 1; i <= limite; i++){
            console.log(`${base} * ${i} = ${base*i}`);
        }
}


module.exports = {
    crearArchivo,
    listar
} // Modulos a exportar

