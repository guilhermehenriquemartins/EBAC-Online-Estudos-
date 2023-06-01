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

  const NomeBeneficiario = document.getElementById('inomeCompleto')
  if (!validaNome(NomeBeneficiario.value)) {
    alert('O Nome está incompleto!')
  } else {
    alert('Tudo OK!')
  }
})