// 对象代理
// ES3
function Person() {
    let person = {
        name: "es3",
        age: 12,
        sex: "female"
    }
    this.set = function (key, value) {
        if (key !== "sex") {
            person[key] = value
        }
    }
    this.get = function (key) {
        return person[key];
    }
}
let p1 = new Person();
p1.set("age", 20);
console.table({
    name: p1.get("name"),
    age: p1.get("age"),
    sex: p1.get("sex")
})

// ES5
let person2 = {
    name: "es5",
    age: 12,
}
Object.defineProperty(person2, "sex", {
    writable: false,
    value: "female"
})
try {
    console.log(person2.sex);
    person2.sex = "male"
} catch (err) {
    console.log(err);
}

// ES6

let person3 = {
    name: "es6",
    age: 12,
    sex: "female"
}
let p3 = new Proxy(person3, {
    get(target, key) {
        return target[key];
    },
    set(target, key, value) {
        // console.log(target[key])
        if (key !== "sex") {
            target[key] = value;
        }
    }
})
try {
    p3.sex = "male";
    console.table({
        name: p3.name,
        age: p3.age,
        sex: p3.sex
    })
} catch (error) {
    console.log(error);
}