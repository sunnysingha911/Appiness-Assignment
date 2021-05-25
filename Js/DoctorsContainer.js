var element = document.getElementById("doctor")
var heading3 = document.createElement("h3")
var outerDiv = document.createElement("div")
var innerDiv1 = document.createElement("div")
var innerDiv2 = document.createElement("div")

heading3.classList.add("heading")
heading3.innerHTML = "Doctors"

innerDiv1.setAttribute("id", "pediatric")
innerDiv2.setAttribute("id", "AdultBTM")

outerDiv.classList.add("row", "justify-content-md-center")

innerDiv1.classList.add(
  "col-md-6",
  "col-sm-12",
  "d-flex",
  "align-items-center",
  "flex-column"
)

innerDiv2.classList.add(
  "col-md-6",
  "col-sm-12",
  "d-flex",
  "align-items-center",
  "flex-column"
)

outerDiv.appendChild(innerDiv1)
outerDiv.appendChild(innerDiv2)

element.appendChild(heading3)
element.appendChild(outerDiv)
