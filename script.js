/*||*/

let img1 = document.querySelector(".img1")  
let img2 = document.querySelector(".img2") 
let areaNome1 = document.querySelector(".areaNome1") 
let areaNome2 = document.querySelector(".areaNome2") 
let btnRandom = document.querySelector(".btnRandom")

let arrayFotos = [
{
foto: "https://i.pinimg.com/564x/18/19/e5/1819e52f61d6378119ff6321d7a91f71.jpg",
nome: "sanji",
color: "blue",
},    
{
foto: "https://i.pinimg.com/564x/f6/32/4d/f6324dd1cb29bece5716f150dd32b6d9.jpg",
nome:"luffy",
color: "red",
},    
{
foto: "https://i.pinimg.com/564x/8a/41/61/8a416158262d117d73ad5a5331f74e4e.jpg",
nome:"zoro",
color: "green",
},
{
foto: "https://i.pinimg.com/736x/4c/07/0a/4c070ab3372910aee8ce4ee30c45d7b3.jpg",
nome:"King",
color: "black",
},
{
foto: "https://i.pinimg.com/564x/9f/cd/94/9fcd94c12ff7cedf99a76245924d62e3.jpg",
nome:"kaidou",
color: "aqua",
},
{
foto: "https://i.pinimg.com/564x/49/76/ae/4976ae8f32ac01acca6c472c8e40b7ab.jpg",
nome:"big mom",
color: "pink",
},
{
foto: "https://i.pinimg.com/564x/50/40/73/50407319c2ad92f47fc6bc8aa182acae.jpg",
nome:"shanks",
color: "red",
},

{
foto: "https://i.pinimg.com/564x/e9/3b/ec/e93becff9f3b43781234d183ceab8bf0.jpg",
nome:"law",
color: "black",
},
{
foto: "https://i.pinimg.com/564x/f8/b5/12/f8b51228958be6cba044a17d99544e41.jpg",
nome:"kid",
color: "red",
},
{
foto: "https://i.pinimg.com/564x/95/68/76/956876f91d19b3de284161f3be5a2b7d.jpg",
nome:"katakuri",
color: "purple",
},
{
foto: "https://i.pinimg.com/564x/29/18/7a/29187a9effa40c18813505d18d10b269.jpg",
nome:"doflamingo",
color: "pink",
},

];



btnRandom.addEventListener("click", ()=>{
    location.reload()
})

let numeroRandom1 = Math.floor(Math.random() * arrayFotos.length);
let numeroRandom2 = Math.floor(Math.random() * arrayFotos.length);





function fotosRandomAoiniciar(){

if(numeroRandom1 === numeroRandom2){
    location.reload()
}
else{
    img1.src = arrayFotos[numeroRandom1].foto
    img2.src = arrayFotos[numeroRandom2].foto

    areaNome1.innerHTML = arrayFotos[numeroRandom1].nome
    areaNome1.style.color = arrayFotos[numeroRandom1].color

    areaNome2.innerHTML = arrayFotos[numeroRandom2].nome
    areaNome2.style.color = arrayFotos[numeroRandom2].color


if(numeroRandom1 < numeroRandom2){

arrayFotos.splice(numeroRandom2,1)
arrayFotos.splice(numeroRandom1,1)

}
else{

arrayFotos.splice(numeroRandom1,1)
arrayFotos.splice(numeroRandom2,1)

}

}
  }fotosRandomAoiniciar()



img1.addEventListener("click", ()=>{

if(arrayFotos.length == 0){
    alert(`Vencedor ${areaNome1.innerHTML}`)
    location.reload()
}
else{
    let novoPersonagem =  Math.floor(Math.random() * arrayFotos.length);
    img2.src = arrayFotos[novoPersonagem].foto
    areaNome2.innerHTML = arrayFotos[novoPersonagem].nome
    areaNome2.style.color = arrayFotos[novoPersonagem].color

    arrayFotos.splice(novoPersonagem,1)
}


})




img2.addEventListener("click", ()=>{

if(arrayFotos.length == 0){
    alert(`Vencedor ${areaNome2.innerHTML}`)
    location.reload()
}
else{
    let novoPersonagem =  Math.floor(Math.random() * arrayFotos.length);
    img1.src = arrayFotos[novoPersonagem].foto
    areaNome1.innerHTML = arrayFotos[novoPersonagem].nome
    areaNome1.style.color = arrayFotos[novoPersonagem].color
    
    arrayFotos.splice(novoPersonagem,1)
}
    

})
