function ForYes(){
    alert ("Ahora Somos Novios!")
    alert ("La boda es dentro de una semana")
}

function ForNo(){
    width = window.innerWidth;
    height = window.innerHeight;

    newWidth = (Math.random(750) * width);
    newHeight = (Math.random(850) * height);

    document.getElementById("no").style.position = "absolute"; 
    document.getElementById("no").style.left = newWidth + "px";
    document.getElementById("no").style.top = newHeight + "px";
}