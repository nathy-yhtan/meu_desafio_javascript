
//class contato

class contato {

}

function Post(form) {

    let data = new contato(form.elements.namedItem("nome").value,
        form.elements.namedItem("sobrenome").value,
        form.elements.namedItem("cpf").value,
        form.elements.namedItem("email").value,
        form.elements.namedItem("telefone").value,
        form.elements.namedItem("mensagem").value,
        form.elements.namedItem("contato").value);

}

function Enviar() {

    var nome = document.getElementById("nomeid");

    if (nome.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }

}

function capturarDados(event) {
    // Impede o formulário de recarregar a página
    event.preventDefault();

    // Seleciona todos os elementos com a classe .fordform
    const inputs = document.querySelectorAll('.fordform');

    // Passa por cada input e mostra o valor no console
    inputs.forEach(input => {
        console.log(`${input.name}: ${input.value}`);
    });
}