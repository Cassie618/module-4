let interval;
let image = document.getElementById("img/slothmeme.jpg");

function startMoving(direction){
    stopMoving();


}
    interval = setInterval (() =>{
        let left = image.offsetLeft;

        if (direction === `right`) left += 5;
        if (direction === `left`) left -+5;

        image.style.left = `${left}px`;
    },
50);
function stopMoving(){
    clearInterval(interval);
}
