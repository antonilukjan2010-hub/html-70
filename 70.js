const sizeUp = document.querySelector(".sizeUp")
const sizeDown = document.querySelector(".sizeDown")
const colorBtn = document.querySelector(".color")
const p = document.querySelector("p")

const increase = (params) => {
  fontSize += 5
  p.style.fontSize = fontSize + "px"
}
sizeUp.addEventListener("click", increase)
let fontSize = 36
const decrease = (params) => {
    if(fontSize <= 21){
        return
    }
  fontSize -= 5
  p.style.fontSize = fontSize + "px"
}
sizeDown.addEventListener("click", decrease)

const colorchanger = (params) => {
  const r = Math.floor(Math.random() * 255)
  const g = Math.floor(Math.random() * 255)
  const b = Math.floor(Math.random() * 255)
  p.style.color = `rgb(${r},${g},${b})`
}
colorBtn.addEventListener("click", colorchanger)