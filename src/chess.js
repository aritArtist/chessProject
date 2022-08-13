window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
    document.querySelector('.blindfold').value = "Blindfold chessboard"
});

function highlight(event){
    event.target.classList.toggle('highlight')
    event.stopPropagation();
}

function addHiddenClass(){
    const chessBoard = document.getElementById("container")
    chessBoard.classList.toggle("hidden");

    const button = document.querySelector('.blindfold')
    if(chessBoard.classList.contains("hidden"))
        button.value = "Back to Visible chessboard"
    else
        button.value = "Blindfold chessboard"
}

window.onload =(event) => {
const container = document.getElementById("container");

//container.innerHTML = '<table>'
    var inner = '<table>'

    Array.from(Array(10).keys())

   let innerHTML = "<table>"

    for(  let row = 0; row < 8; row++) {
        innerHTML += '<tr>'
        for( let col = 0; col< 8; col++) {
            innerHTML += '<td></td>'
        }
        innerHTML += '</tr>'
    };

    innerHTML += '</table>'
    container.innerHTML = innerHTML
    setUpPieces(container)
}

function setUpPieces(chessContainer){
    //Setup pawns
    chessContainer.querySelectorAll("tr:nth-child(2) td")
        .forEach(e=>e.classList.add("white","p"))
    chessContainer.querySelectorAll("tr:nth-child(7) td")
        .forEach(e=>e.classList.add("black","p"))

    //Rook
    chessContainer.querySelector("tr:nth-child(1) td:nth-child(1)").classList.add("white","r");
    chessContainer.querySelector("tr:nth-child(1) td:nth-child(8)").classList.add("white","r");

    chessContainer.querySelector("tr:nth-child(8) td:nth-child(1)").classList.add("black","r");
    chessContainer.querySelector("tr:nth-child(8) td:nth-child(8)").classList.add("black","r");

    /*//Knight
    chessContainer.querySelector("tr:nth-child(1) td:nth-child(1)").classList.add("white","r");
    chessContainer.querySelector("tr:nth-child(1) td:nth-child(8)").classList.add("white","r");

    chessContainer.querySelector("tr:nth-child(8) td:nth-child(1)").classList.add("black","r");
    chessContainer.querySelector("tr:nth-child(8) td:nth-child(8)").classList.add("black","r");*/

}