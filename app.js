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
                        console.log("X Wins!")
                        return true
                    }
                    if (boxes[i].firstChild.classList.contains("o") && boxes[j].firstChild.classList.contains("o") && boxes[k].firstChild.classList.contains("o")){
                        boxes[i].firstChild.classList.add("red")
                        boxes[j].firstChild.classList.add("red")
                        boxes[k].firstChild.classList.add("red")
                        console.log("O Wins!")
                        return true
                    }
                }
            }
        }
    }
}

function isDraw(){
    if(!(isWin()) && (boxes[0].firstChild.classList.contains("o") || boxes[0].firstChild.classList.contains("x")) && (boxes[1].firstChild.classList.contains("o") || boxes[1].firstChild.classList.contains("x")) && (boxes[2].firstChild.classList.contains("o") || boxes[2].firstChild.classList.contains("x")) && (boxes[3].firstChild.classList.contains("o") || boxes[3].firstChild.classList.contains("x")) && (boxes[0].firstChild.classList.contains("o") || boxes[0].firstChild.classList.contains("x")) && (boxes[4].firstChild.classList.contains("o") || boxes[4].firstChild.classList.contains("x")) && (boxes[5].firstChild.classList.contains("o") || boxes[5].firstChild.classList.contains("x")) && (boxes[6].firstChild.classList.contains("o") || boxes[6].firstChild.classList.contains("x")) && (boxes[7].firstChild.classList.contains("o") || boxes[7].firstChild.classList.contains("x")) && (boxes[8].firstChild.classList.contains("o") || boxes[8].firstChild.classList.contains("x"))){
        console.log("DRAW")
        return true
    }
}

function runGame(){
    document.querySelectorAll(".sqr").forEach(box => 
            box.addEventListener("click", function(){
                if(isWin()){
                    return
                }
                if(isDraw()){
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
                    console.log(isWin())
                }
                if(isDraw()){
                    console.log(isDraw())
                }
            }))
}

runGame ()
