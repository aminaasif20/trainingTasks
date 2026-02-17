const textEle = document.getElementById("text")
const text = textEle.innerText.split("")
textEle.innerHTML = ""

text.forEach(letter => {
  const span = document.createElement("span")
span.textContent = letter === " " ? "\u00A0" : letter
  textEle.appendChild(span)
})

const colors = [
  "text-red-500",
  "text-blue-500",
  "text-yellow-400",
  "text-pink-500",
  "text-purple-500",
  "text-green-400",
  "text-indigo-500",
  "text-orange-500"
]

const spans = document.querySelectorAll("#text span")

setInterval(() => {
  spans.forEach(span => {
    span.classList.remove(...colors)
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    span.classList.add(randomColor)
  })
}, 800)