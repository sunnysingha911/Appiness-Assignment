var element = document.getElementById("bonemarrowIntro")

var div1 = document.createElement("div")
var div2 = document.createElement("div")

var heading = document.createElement("div")

var image = document.createElement("img")

const boneMarrowData = [
  "Replacement of diseased or defective marrow with marrow from a healthy donor",
  "Medicines in certain situation radiotherapy as well as is giveen to get rid of diseased marrow and bone marrow cells from healthy donor is given to replace it",
  "IN autologus bone marrow Transplant high dose chemotherapy is given to kill cancer cells and child own marrow cells are given back",
]

div1.classList.add("col-md-6", "col-sm-12")
div2.classList.add(
  "col-md-6",
  "col-sm-12",
  "d-flex",
  "justify-content-between",
  "flex-column"
)

image.src = "./assets/images/BoneMarrow.png"
image.alt = "Bonemarrow Image"

div1.appendChild(image)

heading.innerHTML =
  "Bone Marrow Transplant (BMT) better known as haematopoietic stem cells transplant(HSCTC) and bone marrow cells are transplanted"

heading.classList.add("p-3", "boneHeader")
div2.appendChild(heading)

boneMarrowData.forEach((data) => {
  var para = document.createElement("p")
  para.innerHTML = data
  div2.appendChild(para)
})

element.appendChild(div1)
element.appendChild(div2)
