let boxes = document.querySelectorAll(".sqr")
let vsBotBtn = document.querySelector(".vsbot")
let twoPlayerBtn = document.querySelector(".twoPl")
let playAgain = document.querySelector(".game-over")
const corners = [0, 2, 6, 8]
const edges = [1, 3, 5, 7]
const center = [4]
let value = 0
let twoPlayer = true
let vsbot = false
let loop = true

//NOT WORKING !!!!!!!!!!
function getMode(){
    twoPlayerBtn.addEventListener("click", function(){
        twoPlayer = true
        vsbot = false
    })
    vsBotBtn.addEventListener("click", function(){
        twoPlayer = false
        vsbot = true
        vsBotGame()
    })
}

function resetBoard(){
    // REMOVES CLASS X'S AND O'S
    boxes[0].firstChild.classList.remove("x")
    boxes[0].firstChild.classList.remove("o")
    boxes[1].firstChild.classList.remove("x")
    boxes[1].firstChild.classList.remove("o")
    boxes[2].firstChild.classList.remove("x")
    boxes[2].firstChild.classList.remove("o")
    boxes[3].firstChild.classList.remove("x")
    boxes[3].firstChild.classList.remove("o")
    boxes[4].firstChild.classList.remove("x")
    boxes[4].firstChild.classList.remove("o")
    boxes[5].firstChild.classList.remove("x")
    boxes[5].firstChild.classList.remove("o")
    boxes[6].firstChild.classList.remove("x")
    boxes[6].firstChild.classList.remove("o")
    boxes[7].firstChild.classList.remove("x")
    boxes[7].firstChild.classList.remove("o")
    boxes[8].firstChild.classList.remove("x")
    boxes[8].firstChild.classList.remove("o")
    // ADDS EMPTY CLASS
    boxes[0].firstChild.classList.add("empty")
    boxes[1].firstChild.classList.add("empty")
    boxes[2].firstChild.classList.add("empty")
    boxes[3].firstChild.classList.add("empty")
    boxes[4].firstChild.classList.add("empty")
    boxes[5].firstChild.classList.add("empty")
    boxes[6].firstChild.classList.add("empty")
    boxes[7].firstChild.classList.add("empty")
    boxes[8].firstChild.classList.add("empty")
    // HIDES PLAY AGAIN BUTTON
    playAgain.firstChild.classList.add("hide")
    // REMOVES LETTER & RED COLOUR
    boxes[0].firstChild.classList.remove("red", "xlet", "olet", "xtemp", "otemp")
    boxes[1].firstChild.classList.remove("red", "xlet", "olet", "xtemp", "otemp")
    boxes[2].firstChild.classList.remove("red", "xlet", "olet", "xtemp", "otemp")
    boxes[3].firstChild.classList.remove("red", "xlet", "olet", "xtemp", "otemp")
    boxes[4].firstChild.classList.remove("red", "xlet", "olet", "xtemp", "otemp")
    boxes[5].firstChild.classList.remove("red", "xlet", "olet", "xtemp", "otemp")
    boxes[6].firstChild.classList.remove("red", "xlet", "olet", "xtemp", "otemp")
    boxes[7].firstChild.classList.remove("red", "xlet", "olet", "xtemp", "otemp")
    boxes[8].firstChild.classList.remove("red", "xlet", "olet", "xtemp", "otemp")
    // VALUE SET TO 0
    value = 0
}

let tempIsWin = function(){
    for (i = 0; i < 9; i++){
        for(j = 0; j < 9; j++){
            for(k = 0; k < 9; k++){
                if((i === 0 && j === 1 && k === 2) || (i === 3 && j === 4 && k === 5) || (i === 6 && j === 7 && k === 8) || (i === 0 && j === 3 && k === 6) || (i === 1 && j === 4 && k === 7) || (i === 2 && j === 5 && k === 8) || (i === 0 && j === 4 && k === 8) || (i === 2 && j === 4 && k === 6)){
                    if ((boxes[i].firstChild.classList.contains("x") || boxes[i].firstChild.classList.contains("xtemp")) && (boxes[j].firstChild.classList.contains("x") || boxes[j].firstChild.classList.contains("xtemp")) && (boxes[k].firstChild.classList.contains("x") || boxes[k].firstChild.classList.contains("xtemp"))){
                        return true
                    }
                    if ((boxes[i].firstChild.classList.contains("o") || boxes[i].firstChild.classList.contains("otemp")) && (boxes[j].firstChild.classList.contains("o") || boxes[j].firstChild.classList.contains("otemp")) && (boxes[k].firstChild.classList.contains("o") || boxes[k].firstChild.classList.contains("otemp"))){
                        return true
                    }
                }
            }
        }
    }
}

let isWin = function(){
    for (i = 0; i < 9; i++){
        for(j = 0; j < 9; j++){
            for(k = 0; k < 9; k++){
                if((i === 0 && j === 1 && k === 2) || (i === 3 && j === 4 && k === 5) || (i === 6 && j === 7 && k === 8) || (i === 0 && j === 3 && k === 6) || (i === 1 && j === 4 && k === 7) || (i === 2 && j === 5 && k === 8) || (i === 0 && j === 4 && k === 8) || (i === 2 && j === 4 && k === 6)){
                    if (boxes[i].firstChild.classList.contains("x") && boxes[j].firstChild.classList.contains("x") && boxes[k].firstChild.classList.contains("x")){
                        boxes[i].firstChild.classList.add("red", "xlet")
                        boxes[j].firstChild.classList.add("red", "xlet")
                        boxes[k].firstChild.classList.add("red", "xlet")
                        console.log("X Wins!")
                        return true
                    }
                    if (boxes[i].firstChild.classList.contains("o") && boxes[j].firstChild.classList.contains("o") && boxes[k].firstChild.classList.contains("o")){
                        boxes[i].firstChild.classList.add("red", "olet")
                        boxes[j].firstChild.classList.add("red", "olet")
                        boxes[k].firstChild.classList.add("red", "olet")
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

function twoPlayerGame(){
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
                        box.firstChild.classList.add("x", "xlet")
                    }
                    else{
                        box.firstChild.classList.remove("empty")
                        box.firstChild.classList.add("o", "olet")
                    }
                value++
                }
                if((isWin()) || (isDraw())){
                    playAgain.firstChild.classList.remove("hide")
                    playAgain.addEventListener("click", function(){
                        resetBoard()
                    })
                }
            }))
}

function getRandom(max){
    return Math.floor(Math.random() * max)
}

function getEasyAIInput(){
    i = boxes[getRandom(9)]
    if(i.firstChild.classList.contains("empty")){
        i.firstChild.classList.add("o", "olet")
        i.firstChild.classList.remove("empty")
        return
    }
    else{
        getEasyAIInput()
    }
}
// TAHTS IT
function getMediumAIInput(){
    // CHECK FOR WINNING MOVE AND DO OK
    console.log("TWST")
    for (let i = 0; i < 9; i++){
        if (boxes[i].firstChild.classList.contains("empty")){
            boxes[i].firstChild.classList.add("otemp")
            // IF 1ST OPNE SQURE IS NOT WINNING MOVE IT WILL DO GETEASYAIINPUT()
            if(tempIsWin()){
                boxes[i].firstChild.classList.add("olet", "o")
                boxes[i].firstChild.classList.remove("empty")
                boxes[i].firstChild.classList.remove("otemp")
                console.log(" WIN THIS")
                return
            }
            boxes[i].firstChild.classList.remove("otemp")
        }
    }
    for (let i = 0; i < 9; i++){
        if (boxes[i].firstChild.classList.contains("empty")){
            // IF 1ST OPNE SQURE IS NOT WINNING MOVE IT WILL DO GETEASYAIINPUT()
            boxes[i].firstChild.classList.add("xtemp")
            if(tempIsWin()){
                boxes[i].firstChild.classList.remove("empty")
                boxes[i].firstChild.classList.add("olet", "o")
                boxes[i].firstChild.classList.remove("xtemp")
                console.log("stop win")
                return
            }
            boxes[i].firstChild.classList.remove("xtemp")
            }
        }
    
    // IF RETURN IT CHECKS FOR THE FIRST OPEN SQUARE
    // IF NOT RETURN IT PLACES MULTIPLE O'S
    if(!tempIsWin()){
        getEasyAIInput()
        return
    }
    boxes[i].firstChild.classList.remove("xtemp")
}


function vsBotGame(){
    document.querySelectorAll(".sqr").forEach(box => 
            box.addEventListener("click", function(){
                //CHECKS IS GAME IS OVER
                if(isWin()){
                    return
                }
                if(isDraw()){
                    return
                }
                //HUMAN INPUT
                if (box.firstChild.classList.contains("empty")){
                    if(value % 2 === 0){
                        box.firstChild.classList.remove("empty")
                        box.firstChild.classList.add("x", "xlet")
                    }
                    value++
                // AI INPUT
                    if (!isWin() && !isDraw() && (value % 2 !== 0)){
                        getMediumAIInput()
                    }
                    value++
                }
                //CHECKS IS GAME IS OVER
                if((isWin()) || (isDraw())){
                    playAgain.firstChild.classList.remove("hide")
                    playAgain.addEventListener("click", function(){
                        resetBoard()
                    })
                }
            }))
        }

vsBotGame()
