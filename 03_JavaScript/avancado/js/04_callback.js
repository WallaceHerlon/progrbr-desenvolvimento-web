let usuarios = ["Adriano", "Maria", "Pedro"];

function inserirUsuario(nome, callback) {
    setTimeout(() => {
        usuarios.push(nome);
        callback();
    }, 2000);
}

function listarUsuarios() {
    console.log(usuarios);
}

inserirUsuario("Wallace", listarUsuarios);