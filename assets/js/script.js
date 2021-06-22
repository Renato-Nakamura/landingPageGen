let nome = document.querySelector("#nome")
let email = document.querySelector("#email")
let msg = document.querySelector("#msg")

function validar(){
  if(nome.value.length>2){
    if(email.value.indexOf('@')==-1){
      alert("Insira um email valido")
    }else{
      if(msg.value.length>0){
        alert("Mensagem enviada com sucesso para a equipe! Agradecemos o apoio")
      }else{
        alert("A mensagem deve possuir conteúdo")
      }
    }
  }else{
    alert("O nome precisa conter pelo menos 3 caracteres")
  }
}