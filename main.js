let ism = prompt('Ismingizni kiriting')
let text = document.createElement('h1')
text.innerHTML = ism

document.body.style.background= 'blue'
document.body.style.color= 'yellow'
document.body.style.height = '90vh'
document.body.style.display = 'flex'
document.body.style.justifyContent = 'center'
document.body.style.alignItems = 'center'

text.style.fontSize = '200px'

document.body.append(text)