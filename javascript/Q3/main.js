function AreaofCircle(radius){
    return 3.14 * radius * radius;
}

const radius = prompt("Enter the radius of the circle: ");
const value = AreaofCircle(radius);

window.onload = function(){
    document.getElementById("output").innerHTML = value;
}