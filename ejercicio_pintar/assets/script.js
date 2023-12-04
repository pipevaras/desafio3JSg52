//---------CODIGO INICIAL EJERCICIO------------

{
  /* <div id="ele1"> hello </div>
<script>
function pintar(){
ele.style.backgroundColor = 'yellow'
}
const ele = document.getElementById("ele1")
ele.addEventListener("click", pintar);
</script> */
}

//-------------------------------------------

// EJERCICIO ITEM 2.2

// const ele = document.getElementById('ele1')
// ele.addEventListener('click', function () {
//   ele.style.backgroundColor = 'yellow'
// })

//-------------------------------------------

// EJERCICIO ITEM 2.3

function pintar(color = 'green') {
  ele.style.backgroundColor = color
}
const ele = document.getElementById('ele1')
ele.addEventListener('click', function () {
  pintar('yellow')
})
