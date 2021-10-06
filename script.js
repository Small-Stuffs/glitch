let container = document.querySelector('.container')
let count = 5
const button = document.querySelector('.btn')


for(let i = 0; i < count; i++) {
  let glitchBox = document.createElement('div')
  glitchBox.className = 'box'
  container.appendChild(glitchBox)
}

// function glitchOnClick() {


button.addEventListener('click', ()=> {
// setInterval(function(){
    let glitch = document.querySelectorAll('.box')
for(let i = 0 ;i < glitch.length; i++) {
  glitch[i].style.left = Math.floor(Math.random()*100) + 'vw'
  glitch[i].style.top = Math.floor(Math.random()*100) + 'vh'
  glitch[i].style.width = Math.floor(Math.random()*400) + 'px'
  glitch[i].style.height = Math.floor(Math.random()*100) + 'px'
// }}, 200 
}
})
// }

// button.addEventListener('click', glitchOnClick)
// document.addEventListener('')