function formIncompleto(tarefa) {
    if (tarefa.nome.length === undefined || tarefa.data === "") {
        console.log("Incompleto")
        return true
    } else if (existe(tarefa)) {
        console.log("Tarefa já existe")
        return true
    } else {
        return false
    }
}

function existe(itemAtual) {
    const existe = lista.find(elemento => elemento.nome == itemAtual.nome && elemento.data == itemAtual.data)
    return existe
}