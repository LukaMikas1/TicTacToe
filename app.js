let boxes = document.querySelectorAll(".sqr")
let value = 0
// boxes.addEventListener("click", function(){
//     console.log("DASDO")
// })

// boxes.forEach(function (box){
//     var boxes2 = box.querySelector(".sqr")
//     if (boxes2){
//         boxes2.addEventListener("click", function(){
//         // boxes.forEach(function(item){
//             console.log("oaksdo")
//             // if (item !== box)
//         })
//     }
// })

for(let i=0; i<boxes.length; i++){
    let box = boxes[i] 
        box.addEventListener("click", function(){
            if (box.firstChild.classList.contains("empty")){
                if (value % 2 === 0){
                    box.firstChild.classList.remove("empty")
                    box.firstChild.classList.add("x")
                }
                else{
                    box.firstChild.classList.remove("empty")
                    box.firstChild.classList.add("o")
                }
            console.log(box.classList)
            value++
            }
            else{
               console.log(box.classList + "OKASD")
               return
                }
        })
}
