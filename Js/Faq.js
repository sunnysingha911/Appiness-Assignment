const data = [
  "Which are the hematological diseases that may benefit from bone marrow transplants?",
  "Which are the Cancers that may benefit from bone marrow transplants?",
  "Do bone marrow failure syndromes require BMT?",
  "What are Primary Immune Deficiency diseases?",
  "Which are the immune deficiencies that warrant BMT?",
  "What makes transplants at Aster CMI unique?",
]

const dataFaqAnswer = [
  "BMT is the treatment of choice for blood disorders like Thalassemia, Sickle Cell anemia, bone marrow failure syndromes like Aplastic anemia, serious immune deficiencies and certain genetic metabolic disorders. ",
  "It is also used to treat high risk cancers like some cases of Acute Lymphoblastic Leukemia, Acute Myeloid Leukemia, Multiple Myeloma and solid tumours like Neuroblastoma, Ewings Sarcoma and certain relapsed cancers like Lymphomas",
]

dataFaqAnswer.forEach((val) => {
  var element = document.getElementById("conditions")
  var li = document.createElement("li")

  li.innerHTML = val

  element.appendChild(li)
})

var element = document.getElementById("faq")

data.forEach((str) => {
  var img = document.createElement("img")
  img.src = "./assets/images/Path Copy 5.png"
  img.style.height = "10px"
  var e = document.createElement("h5")
  e.innerHTML = str
  e.classList.add("card", "heading2")
  e.appendChild(img)
  element.appendChild(e)
})
