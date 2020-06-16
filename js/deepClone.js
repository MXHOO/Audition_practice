const obj1 = {
    a: 1,
    b: 2,
    eat: function () {
        console.log("eat something");
    },
    arr: [1, 3, 4],
    obj: {
        x: 1,
        y: 2
    }
}

function deepClone(obj) {
    if (obj instanceof Object) {
        if (obj != null) {
            let result;
            if (obj instanceof Array) {
                result = [];
            } else {
                result = {};
            }
            for (const key in obj) {
                if (obj.hasOwnProperty(key)) {
                    result[key] = deepClone(obj[key]);
                }
            }
            return result;
        }
    } else {
        return obj;
    }
}
let obj2 = deepClone(obj1);
console.log(obj2);
obj2.b = 9999;
for (const iterator of obj1.arr) {
    console.log(iterator);
}
console.log(obj1, obj2);

let obj8=Object.assign({},obj1);
console.log("-----------------------")
obj8.a=8888;
console.log(obj8);

let obj3 = JSON.stringify(obj1);
let obj4 = JSON.parse(obj3);
obj4.a = 10000;
console.log(obj1, obj4);