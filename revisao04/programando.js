const form = document.getElementById('form-deposito')

function validaNome(NomeCompleto) {
  const NomeComoArray = NomeCompleto.split(' ')
  return NomeComoArray.length >= 2
}

form.addEventListener('submit', function(e) {
  e.preventDefault()

  const nomeDoBeneficiario = document.getElementById('nomeBeneficiario')
  const numeroDaConta = document.getElementById('numeroContaBeneficiario')
  const ValorDaConta = document.getElementById('numeroValorBeneficiario')
  const mensagemSucesso = `Montante de: <b>${ValorDaConta.value}</b> depositado para o cliente: <b>${nomeDoBeneficiario.value}</b> - conta: <b>${numeroDaConta.value}</b>` 

  if(!validaNome(nomeDoBeneficiario.value)) {
    alert('Nome Incompleto')
  } else {
    const mensagem = document.querySelector('.mensagem-sucesso')
    mensagem.style.display = 'block'
    mensagem.innerHTML = mensagemSucesso

    nomeDoBeneficiario.value = ''
    numeroDaConta.value = ''
    ValorDaConta.value = ''
  }
})