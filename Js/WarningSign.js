var element = document.getElementById("warningsign")

var heading3 = document.createElement("h3")
var div = document.createElement("div")
var innerDiv = document.createElement("div")
var div2 = document.createElement("div")
var img = document.createElement("img")
var ul = document.createElement("ul")
var faq = document.createElement("div")
var heading5 = document.createElement("h5")

heading3.classList.add("heading")
heading3.innerHTML = "The warning signs of Immune deficiency"

innerDiv.setAttribute("id", "grid")
innerDiv.classList.add(
  "row",
  "row-cols-xs-1",
  "row-cols-sm-2",
  "row-cols-md-3",
  "row-cols-lg-4",
  "g-4",
  "g-lg-3",
  "mt-5"
)

div2.classList.add("mt-5")
heading5.appendChild(img)

heading5.classList.add("heading2", "card")
heading5.innerHTML =
  "What are the conditions that require bone Marrow Transplant?"

img.src = "./assets/images/Path Copy 5.png"
img.alt = "down Arrow"

faq.setAttribute("id", "faq")
ul.setAttribute("id", "conditions")

div2.appendChild(heading5)
div2.appendChild(ul)
div2.appendChild(faq)

element.appendChild(heading3)
div.appendChild(innerDiv)
element.appendChild(div)
element.appendChild(div2)
