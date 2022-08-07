window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
});

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

}