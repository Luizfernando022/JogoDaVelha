document.addEventListener('DOMContentLoaded',()=>{


    let squares = document.querySelectorAll('.square')


    squares.forEach((square)=>{
        square.addEventListener('click',handleClick)
    })


})


function handleClick(e){
    console.log(e.target)
}