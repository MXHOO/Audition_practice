var xhr = XMLHttpRequest ? new XMLHttpRequest() : new window.ActiveObject
var ul = document.getElementsByClassName("ul_c");
ul.onclick(function(ev){
    alert(ev.target)
})