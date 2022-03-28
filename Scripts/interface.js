document.addEventListener('DOMContentLoaded',()=>{

    let squares = document.querySelectorAll('.square')

    squares.forEach((quadrado)=>{

        quadrado.addEventListener('click',clicado)

    })

})


function clicado(e){

    let postion = e.target.id
 
    playerMove(postion)
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