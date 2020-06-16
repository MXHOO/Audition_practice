var obj = {
    a: 1,
    b: 2
}
var obj2 = new Object();
obj2.say = function () {
    console.log("hello");
}

function Obj() {
    this.name = "m";
    this.age = 20;
}

var obj3 = new Obj();
var obj4 = Object.create({
    m: 111
});
console.log(obj, obj2, obj3,obj4)