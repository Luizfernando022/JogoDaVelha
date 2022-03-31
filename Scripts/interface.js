document.addEventListener('DOMContentLoaded',()=>{

    let squares = document.querySelectorAll('.square')

    squares.forEach((quadrado)=>{

        quadrado.addEventListener('click',clicado)

    })

})

document.querySelectorAll('.in')[0].addEventListener("input",()=>{
    document.getElementById('p1').innerHTML = document.querySelectorAll('.in')[0].value
    placar1 = 0
    placar2 = 0
})
document.querySelectorAll('.in')[1].addEventListener("input",()=>{
    document.getElementById('p2').innerHTML = document.querySelectorAll('.in')[1].value
    placar1 = 0
    placar2 = 0
})


function clicado(e){


   

    let postion = e.target.id
    if(!running){
    if(document.querySelectorAll('.in')[0].value == '' || document.querySelectorAll('.in')[1].value == ''){
        document.getElementById('error').style.animationName = "error"
        running = true
        setTimeout(async ()=>{
            document.getElementById('error').style.animationName = ""
            running = false
        },5000)
        
    }else{
 
    if(playerMove(postion)){
        let jogador1 = document.querySelectorAll('.in')[0].value
        let jogador2 = document.querySelectorAll('.in')[1].value
       
        
        if(playerTime == 1){
            placar2++
            document.getElementById('vencedor').innerHTML = `${jogador2} Ganhou!`
        document.getElementById('window').style.display = "flex"
        document.getElementById('floatWindow').style.animationName = "floatWindow"
        document.getElementById('placar1').innerHTML = `${jogador1} : ${placar1}`
        document.getElementById('placar2').innerHTML = `${jogador2} : ${placar2}`
        document.getElementById('blur').style.animationName = "blur"
        
    }else{
        placar1++
        document.getElementById('vencedor').innerHTML = `${jogador1} Ganhou!`
        document.getElementById('window').style.display = "flex"
        document.getElementById('floatWindow').style.animationName = "floatWindow"
        document.getElementById('placar1').innerHTML = `${jogador1} : ${placar1}`
        document.getElementById('placar2').innerHTML = `${jogador2} : ${placar2}`
        document.getElementById('blur').style.animationName = "blur"
        
    }
        
    }
    updateSquare(postion)
    e.target.style.transform = "scale(1.1)"
            setTimeout(()=>{
                e.target.style.transform = "scale(1)"
            },90)
}
}
}

function updateSquare(postion){

    symbol = board[postion]    

    if(document.getElementById(postion.toString()) != ''){
        document.getElementById(postion.toString()).innerHTML = `<div class="${symbol}"></div>`
    }

}


function  recomeçar(){

    let squares = document.querySelectorAll('.square')

    squares.forEach((quadrado)=>{

        quadrado.innerHTML = ""


    })

    board = ["","","","","","","","","",]
    playerTime = 0
    gameover = false
    running = false
    document.getElementById('window').style.display = "none"
    document.getElementById('floatWindow').style.animationName = ""
    document.getElementById('blur').style.animationName = "reverseblur"

}


function resetar(){
    placar1 = 0
    placar2 = 0
    document.getElementById('placar1').innerHTML = `Player1 : ${placar1}`
    document.getElementById('placar2').innerHTML = `Player2 : ${placar2}`
   

}

