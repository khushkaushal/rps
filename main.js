function computerPlay(){
    moves = ["Rock", "Paper", "Scissor"]
    move = Math.floor(Math.random() * 3)
    return moves[move]
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()

    if(playerSelection==computerSelection){
        return(`Tie, You both chose ${playerSelection}`)
    }
    else if(playerSelection=="rock" && computerSelection=="paper"){
        return(`You lose, ${computerSelection} beats ${playerSelection}`)
    }
    else if(playerSelection=="rock" && computerSelection=="scissor"){
        return(`You win, ${playerSelection} beats ${computerSelection}`)
    }
    else if(playerSelection=="scissor" && computerSelection=="paper"){
        return(`You win, ${playerSelection} beats ${computerSelection}`)
    } 
    else if(playerSelection=="scissor" && computerSelection=="rock"){
        return(`You lose, ${computerSelection} beats ${playerSelection}`)
    } 
    else if(playerSelection=="paper" && computerSelection=="rock"){
        return(`You win, ${playerSelection} beats ${computerSelection}`)
    } 
    else if(playerSelection=="paper" && computerSelection=="scissor"){
        return(`You lose, ${computerSelection} beats ${playerSelection}`)
    } 
    else{
        return(`Well I dont know who won computer: ${computerSelection}, player: ${playerSelection} `)
    }
}

function game(){
    i = 0;
    playerCounter = 0
    computerCounter = 0
    while (i<5){
        computerSelection = computerPlay()
        playerSelection=prompt("Enter a selection: ")
        result=playRound(playerSelection, computerSelection)
        if (result.indexOf("win") != -1){
            playerCounter++
        }
        else if (result.indexOf("lose") != -1){
            computerCounter++
        }
        console.log(result)
        i++
    }
    console.log(`player: ${playerCounter}, computer: ${computerCounter}`)
}

game()