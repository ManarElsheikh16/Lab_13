var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//task 1
var rectangle = (function () {
    function rectangle(w, h) {
        this.width = w;
        this.height = h;
    }
    rectangle.prototype.CalcCircumference = function () {
        var Circumference = (this.width + this.height) * 2;
        return Circumference;
    };
    rectangle.whoIam = function () {
        document.write("iam rectangle");
    };
    return rectangle;
}());
var rec = new rectangle(5, 2);
document.write("the circumference of the rectangle = " + rec.CalcCircumference() + "<br>");
rectangle.whoIam();
document.write("<br>");
var square = (function (_super) {
    __extends(square, _super);
    function square(l) {
        _super.call(this, l, l);
        this.len = l;
    }
    square.prototype.CalcCircumference = function () {
        var Circumference = (this.len + this.len + this.len + this.len);
        return Circumference;
    };
    square.whoIam = function () {
        document.write("iam square");
    };
    return square;
}(rectangle));
var squ = new square(5);
document.write("the circumference of the square = " + squ.CalcCircumference() + "<br>");
square.whoIam();
document.write("<br>" + "<br>");
//task 2
//a(types annotation)
var name = "manar";
var age = 21;
document.write("<br>" + "types annotation are : " + "<br>" + name + "<br>" + age + "<br>");
var x;
x = "soly";
document.write("string value of x :" + x + "<br>");
x = 12;
document.write("numeric value of x :" + x + "<br>");
x = true;
document.write("boolean value of x :" + x + "<br>");
var names = ["nour", "mohammed", "adahm"];
document.write("array of string values of names :" + names + "<br>");
var val;
val = [10, 5, 8];
document.write("array of numbers of (any) :" + val + "<br>");
val = [false, 40.4, "asmaa"];
document.write("array of different types of (any) :" + val + "<br>");
//a(union types)
var value;
value = [5, 7, 10.10];
document.write("array of numbers (union types) :" + value + "<br>");
value = ["mena", "meral", "moamen"];
document.write("array of string (union types) :" + value + "<br>");
document.write("<br>" + "<br>");
//b(Function with typed arguments and return type)
function display(name) {
    return "hello " + name;
}
document.write("Function with typed arguments : " + display("fatma"));
document.write("<br>" + "<br>");
//c(c.Function overriding)
var triangle = (function () {
    function triangle() {
    }
    triangle.prototype.calcArea = function (base, height) {
        return (0.5 * base * height);
    };
    return triangle;
}());
var triang = new triangle();
document.write("the area of triangle is :" + triang.calcArea(4, 2) + "<br>");
var circle = (function (_super) {
    __extends(circle, _super);
    function circle() {
        _super.apply(this, arguments);
    }
    circle.prototype.calcArea = function (radius) {
        return (3.14 * radius * radius);
    };
    return circle;
}(triangle));
var cir = new circle();
document.write("the overriding area of circle is :" + cir.calcArea(2) + "<br>");
document.write("<br>" + "<br>");
var Root = (function () {
    function Root() {
        this.nFather = "Elsheikh";
    }
    return Root;
}());
var Child = (function (_super) {
    __extends(Child, _super);
    function Child() {
        _super.apply(this, arguments);
    }
    return Child;
}(Root));
var obj = new Child();
document.write("variable in father class :" + obj.nFather + "<br>");
document.write("function one in interface :" + obj.walk + "<br>");
document.write("function two in interface :" + obj.eat);
document.write("<br>" + "<br>");
//e(e.Generics)
function genericFunc(argument) {
    var arrayOfT = [];
    arrayOfT.push(argument);
    return arrayOfT;
}
var arrayFromString = genericFunc("nola");
document.write(arrayFromString[0] + "<br>");
document.write(typeof arrayFromString[0] + "<br>");
var arrayFromNumber1 = genericFunc(42);
var arrayFromNumber = genericFunc(42);
document.write(arrayFromNumber1[0] + "<br>");
document.write(typeof arrayFromNumber[0]);
document.write("<br>" + "<br>");
//# sourceMappingURL=file1.js.map