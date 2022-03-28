document.addEventListener('DOMContentLoaded',()=>{

    let squares = document.querySelectorAll('.square')

    squares.forEach((quadrado)=>{

        quadrado.addEventListener('click',clicado)

    })

})


function clicado(e){

    let postion = e.target.id
 
    if(playerMove(postion)){
        
        setTimeout(()=>{
            alert('O jogo acabou,')
        },10)
        
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