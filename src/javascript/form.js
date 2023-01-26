const camposDeInformacoes = document.querySelectorAll('.inputs-itens');

const botaoValidar = document.querySelector('.botao');

botaoValidar.addEventListener('click', (event) => {
    event.preventDefault()

    const caixasFormulario = document.querySelectorAll('.inputs');

    let campoAtual = 0

    camposDeInformacoes.forEach(item => {

        if (item.value == "") {

            verificarItem();

            invalidarItem();

        } else {

            verificarItem();

            validarItem();
        }

        function verificarItem() {

            const itemValido = document.querySelector('.valido');

            if (itemValido) {
                caixasFormulario[campoAtual].classList.remove('valido')
            }

            const itemInvalido = document.querySelector('.invalido');

            if (itemInvalido) {
                caixasFormulario[campoAtual].classList.remove('invalido')
            }
        }

        function invalidarItem() {
            caixasFormulario[campoAtual].classList.add('invalido');
        }

        function validarItem() {
            caixasFormulario[campoAtual].classList.add('valido');
        }

        campoAtual++
    })
})