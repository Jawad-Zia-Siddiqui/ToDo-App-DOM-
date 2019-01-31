function Add(){
    var a = document.getElementById("item").value
    var list = document.createElement("li")
    var node = document.createTextNode(a)
    list.appendChild(node)
    var element = document.getElementById("ol")
    element.appendChild(list)
    document.getElementById("item").value= "";
}

function Empty(){
    var element = document.getElementById("ol")
    element.innerHTML= '';
}