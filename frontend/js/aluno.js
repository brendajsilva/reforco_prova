let cadastrarAluno = document.getElementById("cadastrarAluno")
let res = document.getElementById("res")

cadastrarAluno.addEventListener('click', (e) => {
    e.preventDefault()

        nome = document.getElementById('nome').value
        matricula = document.getElementById('matricula').value
        email = document.getElementById('email').value

        valores = {
            nome: nome,
            matricula: matricula,
            email: email
        }
        fetch('http://localhost:3000/aluno',{

            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(valores)
        })
        .then(resp=> resp.json())
        .then((resposta)=>{
            res.innerHTML += 'Os dados foram cadastrados com sucesso!<br>'
            console.log('Cadastro realizado com sucesso!',resposta)
        })
        .catch((err)=>{
            res.innerHTML += 'Erro ao cadastrar aluno!<br>'
            console.error('Erro ao cadastrar aluno!',err)
        })
})
