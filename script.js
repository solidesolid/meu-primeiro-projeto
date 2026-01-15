function toggleMode() {
  const body = document.body
  body.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if (body.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }

  const imgAlt = document.querySelector("#profile img")
  if (body.classList.contains("light")) {
    imgAlt.setAttribute("alt", "Foto na praia")
  } else {
    imgAlt.setAttribute("alt", "Jogando Forza")
  }
}
