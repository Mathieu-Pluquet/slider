var imgall = document.getElementsByTagName("img")
var compt = 0

document.getElementById("apres").addEventListener("click", function () {
  slider()
} );

function slider () {
  for (let i=0; i<imgall.length;i++) {
    imgall[i].style.display = "none"
  }
  imgall[compt].style.display = "block"
  compt++
  if(compt>imgall.length-1) {
    compt = 0
  }
}
setInterval(slider,5000)
slider ()
