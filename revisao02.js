function dentro() {
  var botao = document.getElementById('depositar')
  botao.style.background = 'black'
  botao.style.color = 'white'
}

function fora() {
  var botao1 = document.getElementById('depositar')
  botao1.style.background = 'gray'
}

function clicou() {
  var botao2 = document.getElementById('depositar')
  botao2.style.background = 'white'
  botao2.style.color = 'black'
}

var form = document.getElementById('formulario')

form.addEventListener('submit', function(e) {
  e.preventDefault()
})