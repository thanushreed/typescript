function display() {
    console.log("Hello Typescript!");
}
function Sum(x, y) {
    return x + y;
}
var greeting = function () {
    console.log("Hello Typescript Anonymous function!");
};
display();
var s = Sum(2, 3);
console.log("The addition of two number is:" + s);
greeting();
