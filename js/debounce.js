// 防抖
var item = document.getElementById("item");
// let timer = null;
// item.addEventListener("keyup", function (ev) {
//     if (timer) {
//         clearTimeout(timer);
//     }
//     timer = setTimeout(function () {
//         console.log(ev.target.value)
//         timer = null
//     }, 3000)

// })

function debounce(fn, delay = 1000) {
    let timer = null;
    return function () {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(function () {
            fn.apply(this, arguments);
            timer = null;
        }, delay);
    }
}
item.addEventListener("keyup",debounce(
    () => {
        console.log(item.value)
    }))