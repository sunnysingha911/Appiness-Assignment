doc("pediatric")
doc("pediatric", "off")
doc("AdultBTM")
doc("AdultBTM", "off")

function doc(id, val) {
  var main = document.getElementById(id)
  var card = document.createElement("div")
  card.classList.add("docCard", "border-bottom", "m-2", "p-3")

  var heading1 = document.createElement("h5")
  var heading2 = document.createElement("h5")

  var image = document.createElement("img")

  var desig1 = document.createElement("div")
  var desig2 = document.createElement("div")

  var desc = document.createElement("p")

  var button = document.createElement("button")

  heading1.innerHTML = id == "AdultBTM" ? "Adult BTM" : "Pediatric BMT"
  heading1.style.color = "#22b78e"
  heading1.style.fontWeight = 700
  heading1.classList.add("mb-4")

  image.src = "./assets/images/Profile.png"
  image.height = "150"
  image.width = "242"

  heading2.innerHTML = "Dr Vijay Agarwal"
  heading2.style.color = "#6a92c6"
  heading2.style.fontWeight = 700
  heading2.classList.add(...["mt-2", "mb-2"])

  desig1.innerHTML = "MD, MRCP, PhD.CCT"
  desig2.innerHTML = "Lead & Sr. Consultant - Medical Oncology & Haematology"

  desig1.classList.add("desig", "text-center")
  desig2.classList.add("desig", "text-center")

  desc.innerHTML =
    "Dr. Vijay Agarwal is a Senior Consultant Medical Oncologist with over 12 years of experience in Oncology. Dr. Agarwal has been practising Medical Oncology since 2004."

  desc.classList.add("text-center", "mt-3", "mb-3")

  button.innerHTML = "Know More"

  if (!val) card.appendChild(heading1)
  card.appendChild(image)
  card.appendChild(heading2)
  card.appendChild(desig1)
  card.appendChild(desig2)
  card.appendChild(desc)
  card.appendChild(button)

  main.appendChild(card)
}
