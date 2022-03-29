document.addEventListener('DOMContentLoaded',()=>{

    let squares = document.querySelectorAll('.square')

    squares.forEach((quadrado)=>{

        quadrado.addEventListener('click',clicado)

    })

})


function clicado(e){

    let postion = e.target.id
 
    if(playerMove(postion)){
        let jogador1 = document.querySelectorAll('.in')[0].value
        let jogador2 = document.querySelectorAll('.in')[1].value
        
        if(playerTime == 1){
        setTimeout(()=>{
            alert(`O jogo acabou, ${jogador2} Ganhou`)
        },10)
    }else{
        setTimeout(()=>{
            alert(`O jogo acabou, ${jogador1} Ganhou`)
        },10)
    }
        
    }
    updateSquare()

}


function  updateSquare(){

    let squares = document.querySelectorAll('.square')

    squares.forEach((quadrado)=>{

        let postion = quadrado.id

        let symbol = board[postion]

        if(quadrado != ""){
            quadrado.innerHTML = `<div class="${symbol}"</div>`
        }



    })


}