

function toogleMode() {
  const html = document.documentElement
  const img = document.querySelector("#image img")
  if (html.classList.contains('light')){
    html.classList.remove('light')
    img.setAttribute("src", "./luffydark.png")
  }else {
  html.classList.add('light')
  img.setAttribute("src", "./lightluffy.png")
  }
}
