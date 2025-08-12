let cad = document.getElementById('cad')
let res = document.getElementById('res')

cad.addEventListener('click',(e)=>{
    e.preventDefault()

    codAluno = document.getElementById('codAluno1').value
    codLivro = Number(document.getElementById('codLivro1').value)
    data = document.getElementById('date1').value

    valores = {
        codAluno:codAluno,
        codLivro:codLivro,
        dataEmprestimo:data

    }
    fetch('http://localhost:3000/emprestimo',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(valores)
    })
    .then(resp => resp.json())
    .then((data)=>{
        res.innerHTML += "os dados foram Cadastrados "
        console.log('funcionou', data)
    })
    .catch((err)=>{
        console.error('deu errado', err)
    })
})

var list = document.getElementById('list')
var tabela = document.getElementById('tabela')
list.addEventListener('click', (e)=>{
    e.preventDefault()

    fetch('http://localhost:3000/emprestimo')
    .then(resp => resp.json())
    .then(dado =>{
        while(tabela.lastChild){
            tabela.removeChild(tabela.lastChild)
        }
        const lista = document.createElement('tr')
        lista.innerHTML = `
            <thead>
                  <tr>
                    <th>ID</th>
                    <th>codAluno</th>
                    <th>codLivro</th>
                    <th>data</th>
                  </tr>
                </thead>
            `
            tabela.appendChild(lista)

        
        dado.forEach(emprestimo => {
            const lista = document.createElement('tr')
            lista.innerHTML = `
            <th>${emprestimo.codEmprestimo}</th>
            <th>${emprestimo.codAluno}</th>
            <th>${emprestimo.codLivro}</th>
            <th>${emprestimo.dataEmprestimo}</th>
            `
            tabela.appendChild(lista)
        });
    })
    .catch(err =>{
        console.error('deu um erro ' + err)
    })
})



let apagar = document.getElementById('apagar')
let res2 = document.getElementById('res2')

apagar.addEventListener('click', (e)=>{
    e.preventDefault()

    let id = Number(document.getElementById('id1').value)
    fetch(`http://localhost:3000/emprestimo/${id}`,{
        method: 'DELETE',
        headers:{
            'Content-Type': 'application/json'
        }

    })
    .then(resp => resp.json())
    .then((data)=>{
        res2.innerHTML += "os dados foram Apagados "
        console.log('funcionou', data)
    })
    .catch((err)=>{
        console.error('deu errado', err)
    })
})


let atualizar = document.getElementById('atualizar')

atualizar.addEventListener('click',(e)=>{
    e.preventDefault()

    codAluno = document.getElementById('codAluno2').value
    codLivro = Number(document.getElementById('codLivro2').value)
    data = document.getElementById('date2').value

    valores = {
        codAluno:codAluno,
        codLivro:codLivro,
        dataEmprestimo:data

    }

    let id = Number(document.getElementById('id2').value)

    fetch(`http://localhost:3000/emprestimo/${id}`,{
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(valores)
    })
    .then(resp => resp.json())
    .then((data)=>{
        res.innerHTML += "os dados foram Atualizados "
        console.log('funcionou', data)
    })
    .catch((err)=>{
        console.error('deu errado', err)
    })
})