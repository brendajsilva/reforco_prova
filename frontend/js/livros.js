let cadastrarLivro = document.getElementById("cadastrarLivro")
let res = document.getElementById("res")

cadastrarLivro.addEventListener("click", (e) => {
    e.preventDefault()

    let titulo = document.getElementById('titulo').value
    let quantidade = Number(document.getElementById('quantidade').value) 
    let autor = document.getElementById('autor').value

    let dados = {
        titulo: titulo,
        quantidade: quantidade,
        autor: autor
    }
    fetch('http://localhost:3000/livro',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
    .then(resp=> resp.json())
    .then((resposta)=>{
        res.innerHTML += 'Os dados foram cadastrados com sucesso!<br>'
        console.log('Cadastro realizado com sucesso!',resposta)
    })
    .catch((err)=>{
        res.innerHTML += 'Erro ao cadastrar livro!<br>'
        console.error('Erro ao cadastrar livro!',err)
    })
})