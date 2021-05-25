var testimonial = document.getElementById("testimonials")
var heading3 = document.createElement("h3")
var p = document.createElement("p")
var cards = document.createElement("div")

heading3.classList.add("heading")
heading3.innerHTML = "Testimonials"

p.innerHTML =
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."

testimonial.appendChild(heading3)
testimonial.appendChild(p)

cards.style.display = "flex"
cards.style.justifyContent = "space-evenly"

Array(2)
  .fill(0)
  .forEach(() => {
    var testimonialCard = document.createElement("div")
    var topDiv = document.createElement("div")
    var p1 = document.createElement("p")
    var profilePicture = document.createElement("img")
    var testDesc = document.createElement("div")
    var userName = document.createElement("h4")
    var p2 = document.createElement("p")
    var quoteImage = document.createElement("img")

    var p3 = document.createElement("p")
    testimonialCard.classList.add("card", "testimonial")

    topDiv.style.display = "flex"
    topDiv.style.justifyContent = "space-between"

    profilePicture.src = "./assets/images/Bitmap.png"
    profilePicture.alt = "Profile"
    profilePicture.classList.add("imgThumbnail")

    userName.innerHTML = "John Doe"
    p2.innerHTML = "Software Engineer"
    p2.classList.add("fw-lighter")

    quoteImage.src = "./assets/images/”.png"
    quoteImage.alt = "Quotes"
    quoteImage.style.height = "height: 3rem;"

    p3.innerHTML =
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
    p3.classList.add("fst-italic", "fw-lighter")

    testDesc.appendChild(userName)
    testDesc.appendChild(p2)

    testDesc.classList.add("testDesc")

    topDiv.appendChild(profilePicture)
    topDiv.appendChild(testDesc)
    topDiv.appendChild(quoteImage)

    testimonialCard.appendChild(topDiv)
    testimonialCard.appendChild(p3)

    // testimonial.appendChild()
    cards.appendChild(testimonialCard)
  })

testimonial.appendChild(cards)
