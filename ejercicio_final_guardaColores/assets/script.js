var tecla = addEventListener('keydown', function (event) {
  if (event.key === 'a' || event.key === 'A') {
    var contenedor = document.getElementById('key')
    contenedor.style.backgroundColor = 'pink'
  } else if (event.key === 's' || event.key === 'S') {
    var contenedor = document.getElementById('key')
    contenedor.style.backgroundColor = 'orange'
  } else if (event.key === 'd' || event.key === 'D') {
    var contenedor = document.getElementById('key')
    contenedor.style.backgroundColor = 'skyblue'
  } else if (event.key === 'q' || event.key === 'Q') {
    var cuerpo = document.querySelector('body')
    nuevoElemento = document.createElement('div')
    nuevoElemento.style =
      'height: 200px; width: 200px; background-color: purple ; border: 2px solid black;'

    cuerpo.appendChild(nuevoElemento)
  } else if (event.key === 'w' || event.key === 'W') {
    var cuerpo = document.querySelector('body')
    nuevoElemento = document.createElement('div')
    nuevoElemento.style =
      'height: 200px; width: 200px; background-color: gray ; border: 2px solid black;'

    cuerpo.appendChild(nuevoElemento)
  } else if (event.key === 'e' || event.key === 'E') {
    var cuerpo = document.querySelector('body')
    nuevoElemento = document.createElement('div')
    nuevoElemento.style =
      'height: 200px; width: 200px; background-color: brown ; border: 2px solid black;'

    cuerpo.appendChild(nuevoElemento)
  } else {
    alert('tecla presionada errónea')
  }
})
