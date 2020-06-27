let nome = document.getElementById('inputNome')
let email = document.getElementById('inputEmail')
let idade = document.getElementById('inputIdade')
let pais = document.getElementById('inputPais')
    // let lixo = document.getElementById('lixo')
    // let trash = document.createElement('span')
    // trash.appendChild(lixo)
let table = document.getElementById('tbody02')

function addPessoa() {
    let td = document.getElementsByTagName('td').length
    if (nome.value != '' && email.value != '' && idade.value != '' && pais.value != '') {
        if (td = 4) {
            let linha = document.createElement('tr')
            let tabelaNome = document.createElement('td')
            let tabelaEmail = document.createElement('td')
            let tabelaIdade = document.createElement('td')
            let tabelaPais = document.createElement('td')

            let botao1 = document.createElement('button')
            botao1.setAttribute('class', 'btn btn-primary')
            botao1.innerText = 'Detalhes'

            let botao2 = document.createElement('button')
            botao2.setAttribute('class', 'btn btn-success')
            botao2.innerText = 'Editar'

            let botao3 = document.createElement('button')
            botao3.setAttribute('class', 'btn btn-danger')
                // botao3.appendChild(trash)
            botao3.innerText = 'Deletar'

            tabelaNome.innerText = nome.value
            tabelaEmail.innerText = email.value
            tabelaIdade.innerText = idade.value
            tabelaPais.innerText = pais.value

            linha.appendChild(tabelaNome)
            linha.appendChild(tabelaEmail)
            linha.appendChild(tabelaIdade)
            linha.appendChild(tabelaPais)

            linha.appendChild(botao1)
            linha.appendChild(botao2)
            linha.appendChild(botao3)

            table.appendChild(linha)

            nome.value = ''
            email.value = ''
            idade.value = ''
            pais.value = ''
        } else {
            return addPessoa()
        }
    } else {
        alert('Preencha os campos corretamente!')
    }

}