function Parent1() {
    this.name = "m";
}

function Child1() {
    Parent1.call(this);
    this.age = 12;
}

let obj = new Child1();
console.log(obj.name, obj.age);


function Parent2() {
    this.name = "n";
}

function Child2() {
    this.age = 20;
}
Child2.prototype = new Parent2();
let obj2 = new Child2();
console.log(obj2.name, obj2.age);



function Parent3() {
    this.name = "x";
}

function Child3() {
    Parent3.call(this);
    this.age = 22;
}
Child3.prototype = new Parent3();
let obj3 = new Child3();
console.log(obj3.name, obj3.age);



function Parent4() {
    this.name = "y";
}

function Child4() {
    Parent4.call(this);
    this.age = 30;
}
Child4.prototype = Parent4.prototype;
let obj4 = new Child4();
console.log(obj4.name, obj4.age);
console.log(obj4.constructor)

function Parent5() {
    this.name = "k";
}

function Child5() {
    Parent5.call(this);
    this.age = 35;
}
Child5.prototype = Object.create(Parent5.prototype);
Child5.prototype.constructor=Child5;
let obj5 = new Child5();
console.log(obj5.name, obj5.age);
console.log(obj5.constructor)