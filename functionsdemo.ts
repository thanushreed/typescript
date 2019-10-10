function display(){
    console.log("Hello Typescript!");

}
function Sum(x: number, y: number) : number{
    return x + y;
   
}
let greeting=function() {
    console.log("Hello Typescript Anonymous function!");
};
display();
var s=Sum(2,3);
console.log("The addition of two number is:"+s);
greeting();