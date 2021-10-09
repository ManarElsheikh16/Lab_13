//task 1
class rectangle {
    width: number;
    height: number;
    constructor(w: number, h: number) {
        this.width = w;
        this.height = h;
    }
    CalcCircumference(): Number {
        let Circumference = (this.width + this.height) * 2;
        return Circumference;
    }
    public static whoIam(): void {
        document.write("iam rectangle");
    }
}
var rec = new rectangle(5, 2);
document.write("the circumference of the rectangle = " + rec.CalcCircumference() + "<br>");
rectangle.whoIam();
document.write("<br>");
class square extends rectangle {
    len: number;
    constructor(l: number) {
        super(l, l);
        this.len = l;
    }
    CalcCircumference(): Number {
        let Circumference = (this.len + this.len + this.len + this.len );
        return Circumference;
    }
    public static whoIam(): void {
        document.write("iam square");
    }
}

var squ = new square(5);
document.write("the circumference of the square = " + squ.CalcCircumference() + "<br>");
square.whoIam();
document.write("<br>"+"<br>");


//task 2
//a(types annotation)
var name: string = "manar";
var age: number = 21;
document.write("<br>"+"types annotation are : " + "<br>" + name + "<br>" + age + "<br>");
var x: any;
x = "soly";
document.write("string value of x :" + x + "<br>");
x = 12;
document.write("numeric value of x :" + x + "<br>");
x = true;
document.write("boolean value of x :" + x + "<br>");
var names: string[] = ["nour", "mohammed", "adahm"];
document.write("array of string values of names :" + names + "<br>");
var val: any;
val = [10, 5, 8];
document.write("array of numbers of (any) :" + val + "<br>");
val = [false, 40.4, "asmaa"];
document.write("array of different types of (any) :" + val + "<br>");
//a(union types)
var value: number[] | string[];
value = [5, 7, 10.10];
document.write("array of numbers (union types) :" + value + "<br>");
value = ["mena", "meral", "moamen"];
document.write("array of string (union types) :" + value + "<br>");
document.write("<br>"+"<br>");


//b(Function with typed arguments and return type)
function display(name:string):string{

    return "hello " + name;
}
document.write("Function with typed arguments : " + display("fatma"));
document.write("<br>" + "<br>");

//c(c.Function overriding)
class triangle{
    calcArea(base: number, height: number): number {

    return (0.5 * base * height);
}
}
var triang = new triangle();
document.write("the area of triangle is :" +triang.calcArea(4,2) +"<br>");
class circle extends triangle{
    calcArea(radius: number): number {

    return (3.14 * radius * radius);
}
}
var cir = new circle();
document.write("the overriding area of circle is :" + cir.calcArea(2) + "<br>");
document.write("<br>" + "<br>");


//d(Interfaces & classes & inheritance)
interface iPerson {
    walk: () => "ican walk";
    eat:  () =>  "ican eat";
}
class Root {
    nFather: string="Elsheikh";
}
class Child extends Root implements iPerson {
    nChild: string;
    walk: () => "ican walk";
    eat: () => "ican eat";
}  
var obj = new Child();
document.write("variable in father class :" + obj.nFather + "<br>");
document.write("function one in interface :" + obj.walk + "<br>");
document.write("function two in interface :" + obj.eat );
document.write("<br>" + "<br>");


//e(e.Generics)
function genericFunc<T>(argument: T): T[] {
    var arrayOfT: T[] = [];    
    arrayOfT.push(argument);   
    return arrayOfT;
}
var arrayFromString = genericFunc<string>("nola");
document.write(arrayFromString[0]+"<br>");        
document.write(typeof arrayFromString[0] + "<br>");   

var arrayFromNumber1 = genericFunc<Number>(42);
var arrayFromNumber = genericFunc(42);
document.write(arrayFromNumber1[0] + "<br>");
document.write(typeof arrayFromNumber[0]);
document.write("<br>" + "<br>")  

