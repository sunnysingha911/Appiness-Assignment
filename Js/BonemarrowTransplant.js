const marrowTransplantTypes = [
  "Autologous Bone Marrow Transplant - Marrow cells are collected from the patient’s own body and transfused back after high dose chemotherapy.",
  "Allogenic Bone Marrow Transplant (Matched Sibling Donor) – Replacement of diseased or defective marrow with marrow from a genetically (HLA) matched sibling donor.",
  "Allogenic Bone Marrow Transplant (Matched Unrelated Donor) – Replacement of diseased or defective marrow with marrow from a genetically (HLA) matched donor obtained from bone marrow registries in India and abroad.",
  "Haplo-Identical Bone Marrow Transplant - Replacement of diseased or defective marrow with marrow from the parent. ",
  "Umbilical cord Bone Marrow Transplant - Replacement of diseased or defective marrow with marrow from a genetically (HLA) matched umbilical cord donor obtained from umbilical cord registries in India and abroad.",
]
var element = document.getElementById("typresofbonemarrowTransplant")

var heading3 = document.createElement("h3")
heading3.classList.add("heading")
heading3.innerHTML = "What are the types of Bone Marrow Transplant?"

var list = document.createElement("ul")

marrowTransplantTypes.forEach((str) => {
  var li = document.createElement("li")
  li.innerHTML = str
  list.appendChild(li)
})

element.appendChild(heading3)
element.appendChild(list)
