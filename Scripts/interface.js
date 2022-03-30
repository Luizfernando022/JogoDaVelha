document.addEventListener('DOMContentLoaded',()=>{

    let squares = document.querySelectorAll('.square')

    squares.forEach((quadrado)=>{

        quadrado.addEventListener('click',clicado)

    })

})

document.querySelectorAll('.in')[0].addEventListener("input",()=>{
    document.getElementById('p1').innerHTML = document.querySelectorAll('.in')[0].value
})
document.querySelectorAll('.in')[1].addEventListener("input",()=>{
    document.getElementById('p2').innerHTML = document.querySelectorAll('.in')[1].value
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
            document.getElementById('vencedor').innerHTML = `${jogador2} Ganhou!`
        document.getElementById('window').style.display = "flex"
        document.getElementById('floatWindow').style.animationName = "floatWindow"
    }else{
        document.getElementById('vencedor').innerHTML = `${jogador1} Ganhou!`
        document.getElementById('window').style.display = "flex"
        document.getElementById('floatWindow').style.animationName = "floatWindow"
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