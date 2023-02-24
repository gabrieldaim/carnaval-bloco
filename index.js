const cards = document.querySelector('.cards')



let blocos = [
    {nome: "O Python do vovô não sobesa mais", local:"sao-paulo", image: "./assets/unsplash_b2jkMC95a_8.svg"},
    {nome: "Todo mundo null", local:"sao-paulo", image: "./assets/unsplash_b2jkMC95a_8 (1).svg"},
    {nome: "Hoje dou exception", local:"sao-paulo", image: "./assets/unsplash_b2jkMC95a_8 (2).svg"},
    {nome: "Manda Node", local:"sao-paulo", image: "./assets/unsplash_b2jkMC95a_8 (3).svg"},
    {nome: "Só no back-end", local:"sao-paulo", image: "./assets/unsplash_b2jkMC95a_8 (4).svg"},
    {nome: "Esse anel não é de Ruby", local:"sao-paulo", image: "./assets/unsplash_b2jkMC95a_8 (5).svg"},
    {nome: "Pimenta no C# dos outros é refresco", local:"sao-paulo", image: "./assets/unsplash_b2jkMC95a_8 (6).svg"},
    {nome: "EnCACHE aqui", local:"sao-paulo", image: "./assets/unsplash_b2jkMC95a_8 (7).svg"},
    {nome: "Não valho nada mas JAVA li", local:"sao-paulo", image: "./assets/unsplash_b2jkMC95a_8 (8).svg"},
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