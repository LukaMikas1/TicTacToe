let boxes = document.querySelectorAll(".sqr")
let value = 0
let game = true
let boxList = []
let getBox = function(boxes){
    for(let i=0; i<boxes.length; i++){
        return box = boxes[i]
    }
}

let isWin = function(){
                if(boxes[0].firstChild.classList.contains("x") && boxes[1].firstChild.classList.contains("x") && boxes[2].firstChild.classList.contains("x") || boxes[3].firstChild.classList.contains("x") && boxes[4].firstChild.classList.contains("x") && boxes[5].firstChild.classList.contains("x") || boxes[6].firstChild.classList.contains("x") && boxes[7].firstChild.classList.contains("x") && boxes[8].firstChild.classList.contains("x") || boxes[0].firstChild.classList.contains("x") && boxes[3].firstChild.classList.contains("x") && boxes[6].firstChild.classList.contains("x") || boxes[1].firstChild.classList.contains("x") && boxes[4].firstChild.classList.contains("x") && boxes[7].firstChild.classList.contains("x") || boxes[2].firstChild.classList.contains("x") && boxes[5].firstChild.classList.contains("x") && boxes[8].firstChild.classList.contains("x") || boxes[0].firstChild.classList.contains("x") && boxes[4].firstChild.classList.contains("x") && boxes[8].firstChild.classList.contains("x") || boxes[2].firstChild.classList.contains("x") && boxes[4].firstChild.classList.contains("x") && boxes[6].firstChild.classList.contains("x")){
                    console.log("X WINS!")
                    return true
                }
                if(boxes[0].firstChild.classList.contains("o") && boxes[1].firstChild.classList.contains("o") && boxes[2].firstChild.classList.contains("o") || boxes[3].firstChild.classList.contains("o") && boxes[4].firstChild.classList.contains("o") && boxes[5].firstChild.classList.contains("o") || boxes[6].firstChild.classList.contains("o") && boxes[7].firstChild.classList.contains("o") && boxes[8].firstChild.classList.contains("o") || boxes[0].firstChild.classList.contains("o") && boxes[3].firstChild.classList.contains("o") && boxes[6].firstChild.classList.contains("o") || boxes[1].firstChild.classList.contains("o") && boxes[4].firstChild.classList.contains("o") && boxes[7].firstChild.classList.contains("o") || boxes[2].firstChild.classList.contains("o") && boxes[5].firstChild.classList.contains("o") && boxes[8].firstChild.classList.contains("o") || boxes[0].firstChild.classList.contains("o") && boxes[4].firstChild.classList.contains("o") && boxes[8].firstChild.classList.contains("o") || boxes[2].firstChild.classList.contains("o") && boxes[4].firstChild.classList.contains("o") && boxes[6].firstChild.classList.contains("o")){
                    console.log("O WINS!")
                    return true
                }
                else{
                    return false
                }
}

let runGame = function(){
    if (!(isWin())){
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
                value++
                }
                else{
                return
                    }
                isWin()
            })
        }
    }
    else{
        return
    }
}
runGame()