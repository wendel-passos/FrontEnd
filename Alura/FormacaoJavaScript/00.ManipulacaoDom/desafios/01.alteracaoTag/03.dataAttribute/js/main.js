const lista = document.querySelector('.lista')

document.querySelector('#mostrar').addEventListener('click', () => { lista.hidden = false })

document.querySelector('#ocultar').addEventListener('click', () => { lista.hidden = true })