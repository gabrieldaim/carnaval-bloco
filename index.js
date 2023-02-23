const cards = document.querySelector('.cards')
const card = document.createElement('div')
const img = document.createElement('img')
const content = document.createElement('div')
const h3 = document.createElement('h3')
const p = document.createElement('p')
const locationDOM = document.createElement('div')
const i = document.createElement('i')


//classes
card.className= 'card'
content.className= 'content'
locationDOM.className = 'location'
i.className= 'ph-map-pin-light'

//texto padrão
p.innerText = "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."

//estrutuando
locationDOM.appendChild(i)
content.append(h3,p,locationDOM)
card.append(img,content)



let blocos = [
    {}, 
    {nome: "O Python do vovô não sobesa mais", local:"sao-paulo", image: "./assets/unsplash_b2jkMC95a_8.svg"},
    {nome: "O Python do vovô não sobe tesstteee", local:"sao-paulo", image: "./assets/unsplash_b2jkMC95a_8 (1).svg"}
]

blocos.forEach( (e)=>{
    const card = document.createElement('div')
const img = document.createElement('img')
const content = document.createElement('div')
const h3 = document.createElement('h3')
const p = document.createElement('p')
const locationDOM = document.createElement('div')
const i = document.createElement('i')


//classes
card.className= 'card'
content.className= 'content'
locationDOM.className = 'location'
i.className= 'ph-map-pin-light'

//texto padrão
p.innerText = "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."

//estrutuando
locationDOM.appendChild(i)
content.append(h3,p,locationDOM)
card.append(img,content)
    h3.innerText = e.nome
    locationDOM.innerHTML += e.local
    img.setAttribute('src', e.image)
    cards.appendChild(card)
    console.log(e.nome)
})