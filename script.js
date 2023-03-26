/*||*/


let area1 = document.querySelector(".area1")  
let area2 = document.querySelector(".area2")  
let btnRandom = document.querySelector(".btnRandom")

let arrayFotos = ["sanji", "zoro", "law", "kid","luffy","shanks",
"kaidou", "big mom","katakuri","king","nami","robin","brook","yamato","akainu","aokiji","kizaru",
"doflamingo","crocodile","enel"
]

let numeroRandom1 = Math.floor(Math.random()* arrayFotos.length)
let numeroRandom2 = Math.floor(Math.random()* arrayFotos.length)

btnRandom.addEventListener("click", ()=>{
location.reload()
})

function numeroAleatorios(){


if(numeroRandom1 === numeroRandom2){
if(numeroRandom1 == arrayFotos.length){
        area1.innerHTML = arrayFotos[numeroRandom1 - 1]            
}
else{
    area1.innerHTML = arrayFotos[numeroRandom1 + 1]
    area2.innerHTML = arrayFotos[numeroRandom2]
        
}
}
else{
    area1.innerHTML = arrayFotos[numeroRandom1]
    area2.innerHTML = arrayFotos[numeroRandom2]     
}
arrayFotos.splice(numeroRandom1,1)  
arrayFotos.splice(numeroRandom2,1)  

}
numeroAleatorios()


area1.addEventListener("click", ()=>{


let novoPersonagem = Math.floor(Math.random()* arrayFotos.length)

area2.innerHTML = arrayFotos[novoPersonagem]  
arrayFotos.splice(novoPersonagem,1)  
  

if(area2.innerHTML === "undefined"){
    location.reload()
    alert(`Vencedor ${area1.innerHTML}`)
    area1.innerHTML = ""
    area2.innerHTML = ""
}

})



area2.addEventListener("click", ()=>{
   
let novoPersonagem = Math.floor(Math.random()* arrayFotos.length)
        
area1.innerHTML = arrayFotos[novoPersonagem]  
arrayFotos.splice(novoPersonagem,1)  

        
if(area1.innerHTML === "undefined"){
location.reload()
alert(`Vencedor ${area2.innerHTML}`)
}

})









