let usuarios = ["Adriano", "Maria", "Pedro"];

function inserirUsuario(nome) {
    let promise = new Promise(function (resolver, reject) {
        setTimeout(() => {
            usuarios.push(nome);
            let error = false;

            if (!error) {
                resolver();
            } else {
                reject({ msg: "Error de qualquer coisa"})
            }
        }, 2000);
    }) 
    return promise  
}

function listarUsuarios() {
    console.log(usuarios);
}

async function executar() {
    await inserirUsuario("Wallace");
    listarUsuarios();
}

executar()