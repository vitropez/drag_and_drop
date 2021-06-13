var imagenes =new Array("img/imagen1.jpg","img/imagen2.jpg","img/imagen3.jpg","img/imagen4.jpg")

function cambiarImagen (){

    var puzzle = document.getElementsByClassName("imagen");
   var random= imagenes.sort(function (a, b){return 0.5 -  Math.random();});
    puzzle[0].src = random[0];
    puzzle[1].src = random[1];
    puzzle[2].src = random[2];
    puzzle[3].src = random[3];

}
function dragItem(item, event) {
    event.dataTransfer.setData('text/plain', item.id)

}

function dropItem(target, event) {
    var data = event.dataTransfer.getData("text/plain");

    target.appendChild(document.getElementById(data))

}


function copyPega() {




    var contOrigen = document.querySelectorAll("#drag")[0];
    console.log(contOrigen)
    var items = document.querySelectorAll(".imagen");
    console.log(items)
    for (var i = 0; i < items.length; i++) {
        items[i].setAttribute("onDragStart", "dragItem(this,event)");

    }
    for (var i = 0; i < items.length; i++) {
        var contDestino = document.querySelectorAll("#drop")[0];
        var items = document.querySelectorAll(".pega");
        console.log(contDestino)

        items[i].setAttribute("onDrop", "dropItem(this,event)");
        items[i].setAttribute("onDragEnter", "return false");
        items[i].setAttribute("onDragOver", "return false");
    }
}
window.addEventListener('load',copyPega,true);








