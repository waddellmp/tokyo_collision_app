/*
    this script provides behvaiour for the service list code

*/
var pdr = document.getElementById('pdr');
var paint = document.getElementById('paint');
var pdrChild = document.getElementById('pdr-content');
function toggleDiv() {
    var parentNode = this;
    var plus = parentNode.childNodes.item(1).childNodes.item(1).childNodes.item(1);
    var childNode = parentNode.childNodes.item(3);
    if(childNode.style.display=="none"){
       plus.classList.remove("fa-plus");
       plus.classList.add("fa-minus");
    } else {
        plus.classList.remove("fa-minus");
        plus.classList.add("fa-plus");
    }
    childNode.style.display = childNode.style.display == "none" ? "block" : "none";
    

}

pdr.addEventListener("click",toggleDiv);
paint.addEventListener("click",toggleDiv);
