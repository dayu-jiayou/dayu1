let A = require("./A");
let $ = require("jquery")

function AVG(params) {
    var arg = [];
    for (let i = 0; i < arguments.length; i++) {
        arg.push(arguments[i])
    }
    arg.sort(function (a, b) {
        return a - b;
    })
    arg.shift();
    arg.pop();
    A.sum(...arg)
    return A.sum(...arg);
}
console.log(AVG(1, 5, 9, 10, 2, 17));
console.log($);

~function () {
    var Alink = document.getElementsByTagName("a");
    var Img = document.getElementsByTagName("img");
    for (let i = 0; i < Alink.length; i++) {
        Alink[i].title ? null : console.log(Alink[i]);
    }
    for (let index = 0; index < Img.length; index++) {
        Img[index].alt ? null : console.log(Img[index]);
    }
}()