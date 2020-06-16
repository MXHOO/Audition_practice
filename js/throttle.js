// 节流
var drag = document.getElementById("drag");
let timer = null;
drag.addEventListener("drag", function (e) {
    if (timer) {
        return
    }
    timer = setTimeout(function () {
        console.log(e.offsetX, e.offsetY)
        timer=null;
    }, 1000);

})