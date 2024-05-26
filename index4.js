//document.getElementById("c").innerText = 7//
let saveEl = document.getElementById("save-el")
let countEl=document.getElementById("c")
let count = 0



function increment(){

   count ++ 

   countEl.innerText = count
}

function save(){
   let combiner = count + " - "
   saveEl.innerText = combiner
   console.log(count)   
}




