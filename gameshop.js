function mudouTela() {
  if (window.innerWidth >= 768) {
    items.style.display = 'block'
  } else {
    items.style.display = 'none'
  }
}

function Menu() {
  var itens = window.document.getElementById('items')
  if (itens.style.display == 'block') {
    itens.style.display = 'none'
  } else {
    itens.style.display = 'block'
  } 
}

const form = document.getElementById('fale-conosco')

function validaNome(NomeCompleto) {
  const NomeComoArray = NomeCompleto.split(' ')
  return NomeComoArray.length >= 2
}

form.addEventListener('submit', function(e){
  e.preventDefault()

  const nomeBeneficiario = document.getElementById('inomeCompleto')
  const numeroContaBeneficiario = document.getElementById('inumeroConta')
  const valorDeposito = document.getElementById('ivalorDeposito')
  const mensagemSucesso = `Montande de: <b>${valorDeposito.value}</b> depositado para o cliente <b>${nomeBeneficiario.value}</b> - conta: <b>${numeroContaBeneficiario.value}</b>`

  if (validaNome(nomeBeneficiario.value)) {
    const containerMensagemSucesso = document.querySelector('.msg-sucesso')
    containerMensagemSucesso.innerHTML = mensagemSucesso;
    containerMensagemSucesso.style.display = 'block'

    nomeBeneficiario.value = ''
    numeroContaBeneficiario.value = ''
    valorDeposito.value = ''
  } else {
    alert('O Nome está incompleto!')
  }
})