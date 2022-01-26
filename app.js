let boxes = document.querySelectorAll(".sqr")
let value = 0
let test = document.querySelector(".vsbot")
let game = true
let boxList = []

let isWin = function(){
                for (i = 0; i < 9; i++){
                    for(j = 0; j < 9; j++){
                        for(k = 0; k < 9; k++){
                            if((i === 0 && j === 1 && k === 2) || (i === 3 && j === 4 && k === 5) || (i === 6 && j === 7 && k === 8) || (i === 0 && j === 3 && k === 6) || (i === 1 && j === 4 && k === 7) || (i === 2 && j === 5 && k === 8) || (i === 0 && j === 4 && k === 8) || (i === 2 && j === 4 && k === 6)){
                                if (boxes[i].firstChild.classList.contains("x") && boxes[j].firstChild.classList.contains("x") && boxes[k].firstChild.classList.contains("x")){
                                    boxes[i].firstChild.classList.add("red")
                                    boxes[j].firstChild.classList.add("red")
                                    boxes[k].firstChild.classList.add("red")
                                    return true
                                }
                                if (boxes[i].firstChild.classList.contains("o") && boxes[j].firstChild.classList.contains("o") && boxes[k].firstChild.classList.contains("o")){
                                    boxes[i].firstChild.classList.add("red")
                                    boxes[j].firstChild.classList.add("red")
                                    boxes[k].firstChild.classList.add("red")
                                    return true
                                }
                            }
                        }
                    }
                }
}

function getInput(){
    document.querySelectorAll(".sqr").forEach(box => 
            box.addEventListener("click", function(){
                if(isWin()){
                    console.log("X wins!")
                    return
                }
                if (box.firstChild.classList.contains("empty")){
                    if (value % 2 === 0){
                        box.firstChild.classList.remove("empty")
                        box.firstChild.classList.add("x")
                    }
                    else{
                        box.firstChild.classList.remove("empty")
                        box.firstChild.classList.add("o")
                    }
                value++
                }
                if(isWin()){
                }
            }))
}

getInput()
