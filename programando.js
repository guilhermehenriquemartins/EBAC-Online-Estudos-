var botao = document.getElementsByTagName('form')[0].querySelector('input[type=submit]')

botao.style.background = 'blue'
botao.style.color = 'white'

var botao2 = document.getElementsByTagName('form')[1].querySelector('input[type=submit]')

botao2.style.background = 'red'
botao2.style.color = 'white'

var nome1 = document.getElementsByTagName('form')[0].querySelector('input[type=text]')

nome1.style.background = '#cadaff'
nome1.style.border = 'none'
nome1.style.outline = '1px dashed blue'

var numeros1 = document.getElementsByTagName('form')[0].querySelector('input[type=number]')

numeros1.style.background = '#cadaff'

nome_beneficiario = document.getElementById('inome')

document.getElementById('botao1').disabled = nome_beneficiario.value.split(' ').length < 2