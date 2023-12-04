cambiarColor = function (elementId) {
  var div = document.getElementById(elementId)
  div.addEventListener('click', function () {
    div.style.backgroundColor = 'black'
  })
}

cambiarColor('div1')
cambiarColor('div2')
cambiarColor('div3')
cambiarColor('div4')
