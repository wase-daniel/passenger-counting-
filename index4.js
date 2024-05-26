//document.getElementById("c").innerText = 7//

let countEl=document.getElementById("c")
let count = 0
function increment(){

   count += 1

   countEl.innerText = count
}

function save(){
   console.log(count)
}
   



