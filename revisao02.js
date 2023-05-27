var form = window.document.getElementById('formulario')

function validaNome (NomeCompleto) {
  const NomeComoArray = NomeCompleto.split(' ')
  return NomeComoArray.length >= 2
}

form.addEventListener('submit', function(e) {
  e.preventDefault()

  var NomeBeneficiario = window.document.getElementById('ibeneficiario')

  if (!validaNome(NomeBeneficiario.value)) {
    alert('Nome Incompleto')
  } else {
    alert('Nome está tudo certo!')
  }
})