const btn = document.querySelector('#send')

btn.addEventListener('click', function (e) {
    e.preventDefault()
    limparCampos()
    validarCampos()
})

function validarCampos() {
    const materia = document.querySelector('#materia')
    const valorMateria = materia.value
    if (valorMateria == '') {
        document.querySelector('#matErro').innerHTML =
            'Insira o nome da matéria'
        return
    }
    limparCampos()
    //NOMES
    const nomeAluno = document.querySelector('#nomeAluno').value
    const firstName = nomeAluno.split(' ')
    if (nomeAluno == '') {
        document.querySelector('#nomeErro').innerHTML = 'Insira o nome do Aluno'
        return
    }

    //NOTAS
    const notaUm = parseInt(document.querySelector('#notaUm').value)
    const notaDois = parseInt(document.querySelector('#notaDois').value)
    const notaTres = parseInt(document.querySelector('#notaTres').value)
    const notaQuatro = parseInt(document.querySelector('#notaQuatro').value)

    if (isNaN(notaUm) | isNaN(notaDois) | isNaN(notaTres) | isNaN(notaQuatro)) {
        document.querySelector('#msgErro').innerHTML = 'Digite todas as notas'
        return
    } else {
        limparCampos()
        const mediaArray = [notaUm, notaDois, notaTres, notaQuatro]
        const media =
            (notaUm + notaDois + notaTres + notaQuatro) / mediaArray.length
        document.querySelector(
            '#resultado'
        ).innerHTML = `Olá ${firstName[0]}, a sua média em ${valorMateria} é ${media}`
    }
    limparCampos()
}

function limparCampos() {
    const matErro = (document.querySelector('#matErro').innerHTML = '')
    const nomeErro = (document.querySelector('#nomeErro').innerHTML = '')
    const notaErro = (document.querySelector('#msgErro').innerHTML = '')
}
