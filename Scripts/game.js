let board = ["","","","","","","","","",]
let playerTime = 0
let jogador1 = document.querySelectorAll('.in')[0].value
let jogador2 = document.querySelectorAll('.in')[1].value
let symbols = ['o','x']
let gameover = false


let probabilidadesVitoria = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

function playerMove(position){

    if(gameover){
        return;
    }
    console.log(gameover)
    if(board[position] == ''){
    board[position] = symbols[playerTime]

    gameover = ganhador()

    if(gameover == false){
    if(playerTime == 0){
        playerTime = 1
    }else{
        playerTime = 0
    }
  }
}
return gameover
}


function ganhador(){
    
    for(let i = 0; i < probabilidadesVitoria.length;i++){
        let seq  = probabilidadesVitoria[i]
        pos1 = seq[0]
        pos2 = seq[1]
        pos3 = seq[2]

        if(board[pos1] == board[pos2] && board[pos1] == board[pos3] && board[pos1] != ""){
            return true
        }
    }
 return false
}