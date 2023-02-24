const cards = document.querySelector('.cards')
const search = document.querySelector('#search') 


let blocos = [
    {nome: "O Python do vovô não sobe mais", local:"São Paulo - SP", image: "./assets/unsplash_b2jkMC95a_8.svg"},
    {nome: "Todo mundo null", local:"Salvador - BA", image: "./assets/unsplash_b2jkMC95a_8 (1).svg"},
    {nome: "Hoje dou exception", local:"Rio de Janeiro - RJ", image: "./assets/unsplash_b2jkMC95a_8 (2).svg"},
    {nome: "Manda Node", local:"São Paulo - SP", image: "./assets/unsplash_b2jkMC95a_8 (3).svg"},
    {nome: "Só no back-end", local:"Rio de Janeiro - RJ", image: "./assets/unsplash_b2jkMC95a_8 (4).svg"},
    {nome: "Esse anel não é de Ruby", local:"Salvador - BA", image: "./assets/unsplash_b2jkMC95a_8 (5).svg"},
    {nome: "Pimenta no C# dos outros é refresco", local:"São Paulo - SP", image: "./assets/unsplash_b2jkMC95a_8 (6).svg"},
    {nome: "EnCACHE aqui", local:"Rio de Janeiro - RJ", image: "./assets/unsplash_b2jkMC95a_8 (7).svg"},
    {nome: "Não valho nada mas JAVA li", local:"Salvador - BA", image: "./assets/unsplash_b2jkMC95a_8 (8).svg"},
]

function pesquisar(filterBlocks){

    filterBlocks.forEach( (e)=>{
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
    })
}


search.addEventListener('click', function(e){
e.preventDefault()
cards.innerHTML = ''
const searchName = document.querySelector('#name').value.toLowerCase()
const searchCity = document.querySelector('#city').value

let searchBlocksByName = blocos.filter((bloco)=>{
    let nameBlock = bloco.nome.toLowerCase()
    return nameBlock.includes(searchName)
   
})

let searchBlocksByCity = searchBlocksByName.filter((bloco)=>{
    return bloco.local == searchCity
})


if(searchCity !== "0"){
    console.log("parou no primeiro if")
    if(searchBlocksByCity.length ==0){
        
        const h3 = document.createElement('h3')
        h3.innerText = "Nenhum Bloco Encontrado"
        cards.appendChild(h3)



    }else{
        pesquisar(searchBlocksByCity)
    }
     
 }else if(searchBlocksByName !== ""){

    if(searchBlocksByName.length == 0){
        
        const h3 = document.createElement('h3')
        h3.innerText = "Nenhum Bloco Encontrado"
        cards.appendChild(h3)

    }else{
        
    }
    pesquisar(searchBlocksByName)
 }else{
    pesquisar(blocos)
 }
 })



pesquisar(blocos)