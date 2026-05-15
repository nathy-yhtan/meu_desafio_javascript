
//class contato ! TEM QUE TER
//class pq ela simula um objeto
class contato {

    constructor(nome, sobrenome, cpf, email, telefone, mensagem, contato) {
        this.nome = nome
        this.sobrenome = sobrenome
        this.cpf = cpf
        this.email = email
        this.telefone = telefone
        this.mensagem = mensagem
        this.contato = contato

    }
}

function Post(form) {

    let data = new contato(form.elements.namedItem("nome").value,
        form.elements.namedItem("sobrenome").value,
        form.elements.namedItem("cpf").value,
        form.elements.namedItem("email").value,
        form.elements.namedItem("telefone").value,
        form.elements.namedItem("mensagem").value,
        form.elements.namedItem("contato").value);

    Enviar(data);

}

function Enviar(valor) {

    document.addEventListener("submit", (e) => {
        e.preventDefault()
        var nome = document.getElementById("nomeid");

        if (nome.value != "") {
            alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
        }
        console.log(valor)
    }, { once: true })

};