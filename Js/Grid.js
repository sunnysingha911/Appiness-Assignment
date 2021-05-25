const dataGrid = [
  {
    img: "./assets/images/Group 2.png",
    text: "Failure to thrive – not gaining weight and height as per the age norms",
  },
  {
    img: "./assets/images/Group.png",
    text: "Infections warranting multiple hospitalizations",
  },
  {
    img: "./assets/images/Group (1).png",
    text: "Requirement of intravenous antibiotics to clear infections",
  },
  {
    img: "./assets/images/Group (2).png",
    text: "2 or more episodes of pneumonia",
  },
  {
    img: "./assets/images/Group (3).png",
    text: "Family history of death of children at young age due to immune deficiency",
  },
  {
    img: "./assets/images/Group (4).png",
    text: "Repeated episodes of diarrhea",
  },
  {
    img: "./assets/images/Group 2 (1).png",
    text: "2 or more episodes of sinus infections within a year",
  },
  {
    img: "./assets/images/Group 2 (2).png",
    text: "2 or more episodes of ear discharge",
  },
  {
    img: "./assets/images/Group 2 (3).png",
    text: "Repeated skin infections",
  },
  {
    img: "./assets/images/Group (5).png",
    text: "Repeated abscess formation (liver abscess, brain abscess)",
  },
]

var main = document.getElementById("grid")

dataGrid.forEach((item) => {
  var column = document.createElement("div")
  var div = document.createElement("div")
  var img = document.createElement("img")
  var p = document.createElement("p")

  column.classList.add("col")

  div.classList.add(...["p-3", "border", "bg-light"])
  img.src = item.img
  img.alt = "hand"
  img.style.height = "2.5rem"

  p.innerHTML = item.text
  p.style.height = "50px"
  p.style.fontSize = "14px"
  p.style.marginTop = "1rem"

  div.appendChild(img)
  div.appendChild(p)
  column.appendChild(div)
  main.appendChild(column)
})
