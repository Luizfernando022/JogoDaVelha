document.addEventListener('DOMContentLoaded',()=>{

    let squares = document.querySelectorAll('.square')

    squares.forEach((quadrado)=>{

        quadrado.addEventListener('click',clicado)

    })

})


function clicado(e){


   

    let postion = e.target.id
    if(!running){
    if(document.querySelectorAll('.in')[0].value == '' && document.querySelectorAll('.in')[1].value == ''){
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
        setTimeout(()=>{
            alert(`O jogo acabou, ${jogador2} Ganhou`)
        },100)
    }else{
        setTimeout(()=>{
            alert(`O jogo acabou, ${jogador1} Ganhou`)
        },100)
    }
        
    }
    updateSquare()
    e.target.style.transform = "scale(1.1)"
            setTimeout(()=>{
                e.target.style.transform = "scale(1)"
            },90)
}
}
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