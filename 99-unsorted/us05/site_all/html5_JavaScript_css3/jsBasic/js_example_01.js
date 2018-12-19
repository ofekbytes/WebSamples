
//global variable
var GlNumberAge;
var GlNumberzip;

var err = "_ERR";
var wrn = "_WRN";
var msg = "_MSG";

var x;
var y;

//global - test-zone
var GlNumAge = 12;
var GlTxtName = 'abc';


function fnLine()
{
    document.write("<hr>");
    return true;
}


function jbBasic_IsExist()
{
//    document.write("\"jbBasic.js\" -  included to project");
    console.log(".");
    console.log("................................................");
    console.info("\"jbBasic.js\" - Loaded --> [ok]");
    console.log("................................................");
    return true;
}


function fn_console()
{
    /*console message*/

    console.log(".");
    console.log("fn_console() --> [ok]");
    console.log("................................................");
    console.log("console: log, info, warn, error");
    console.log("console.log()");
    console.info("console.info()");
    console.warn("console.warn()");
    console.error("console.error()");

    /*return true with function ended ok (false = when not) */
    return true;
}

// function properties
function fn_dark(){
    var num=11;
}



function fn_js_variable()
{
    var valueTrue = false ;
    var stFirstName = "";
    var stLastName = "";
    var intAge;
    var doualVariableType;
    var temp;

    console.log(".");
    console.log("................................................");
    console.log("fn_js_variable() --> [ok]");

	  //string
	  stFirstName = 'tiki';
    stLastName = "iktik";
    stTemp = "temp";

    console.log("fn_js_variable typeof === " + typeof (fn_js_variable) );

    console.log("...[string].............................................");
    console.info("String >> fname:::" + stFirstName + "  lname:::" + stLastName);

    console.info("stTemp = " + stTemp + " Typeof === " + typeof(stTemp));
    stTemp[0]="X";
    console.info("stTemp = " + stTemp + "  stTemp[1] === " + stTemp[1] );


    console.log("...[number].............................................");
	  //numeric
	  intAge = 121;
    console.info("number = >> " + intAge + " Typeof === " + typeof(intAge));
    console.info("intAge.MIN_VALUE >> " + Number.MIN_VALUE +" intAge.MAX_VALUE >> "+ Number.MAX_VALUE);

    console.log("...[boolean].............................................");
	  //boolean
    valueTrue = true;
    console.log("boolean (valueTrue) == " + valueTrue + " Typeof === " + typeof(valueTrue));


    console.log("...[not declared but assigned value].............................................");
    //not declared but assigned value
    assigned_value = 22;
    console.log("not_declared_but_assigned_value === " + assigned_value );


  console.log("...[undefined (null in any other language)].............................................");
	 //undefined (null in any other language)
	console.log("typeof === "+typeof not_declared); //output "undefined"

    console.log("...[if == ''undefined''].............................................");
    //if == "undefined"
    if (typeof not_declared == "undefined")
    {
	   console.log("if() check value with a variable that not declare and not assigned value ==> " +typeof not_declared); //output "undefined"
    }


    console.log("...[try() ..... catch()].............................................");


    try
    {
        if (typeof(xxx) == "undefined")
        {
            console.log("undefined**");
        }
    }
    catch(xxx)
    {
         console.log("try..catch of undefined ");

    }

    var message = "test";

    console.log(" variable ===> " + message + " typeof ===>" + typeof(message));
    console.log("message === null || message === undefined >>> the same like >>> message == null" );
    console.log("Always use === and !== (not ==) ");
    console.log("=== checks value AND type");


    if (message === null || message === undefined) {
        console.log("null / undefined == " + message)
    }

    if (message == null) {
        console.log("null / undefined == " + message)
    }


    console.log("...[doual Variable Type].............................................");
    doualVariableType = 22;
    console.log("doualVariableType === " + doualVariableType + " typeof === " + typeof(doualVariableType) );
    doualVariableType = "now i am a text";
    console.log("doualVariableType === " + doualVariableType + " typeof === " + typeof(doualVariableType) );


    console.log("...[Global variable when is not declare].............................................");
    num = 10;
    console.log("window.num == << " + window.num + " >> << num == " + num + " >>");
    num = 11;
    console.log("window.num == << " + window.num + " >> << num == " + num + " >>");
    window.num = 12;
    console.log("window.num == << " + window.num + " >> << num == " + num + " >>");
    window.num = 13;
    console.log("window.num == << " + window.num + " >> << num == " + num + " >>");

    console.log("...[boolean with non-boolean value].............................................");
    console.log("dog || cat == " + "dog" || "cat");
    console.log("dog && cat == ");
    console.log("dog" && "cat");

}

function fn_js_variable2()
{

    console.log(".");
    console.log("................................................");
    console.log("fn_js_variable2() --> [ok]");

    console.log("** 4 Datatypes: Numbers, Strings, Booleans, Objects/Array **");
    var arr = [1,2,3]; //array
    //var arrNum = []; //array empty
    var numtype = 11; //number
    var bTrueFalse = true; //boolean
    var txttype = 'txttype'; //text
    var txttype2 = "txttype2 true is the true"; //text
    var objectTypeEmpty = {}; //empty object
	var arrayTypeEmpty = []; //empty array


    if (bTrueFalse == true) {
        console.log(" bTrueFalse === true " + " typeof === " + typeof(bTrueFalse));
    }
    else {
        console.log(" bTrueFalse === false " + " typeof === " + typeof(bTrueFalse));
    }


    if(isNaN(txttype) == true)
    {
        console.log("*** isNaN(txttype) NaN (not a Number) ===> " + txttype);
    }
    else
    {
        console.log("*** isNaN(txttype) is A Number ===> " + txttype);
    }


    if(isNaN(numtype) == false)
    {
        console.log("*** isNaN(numtype) is a Number ===> " + numtype);
    }
    else
    {
        console.log("*** isNaN(numtype) is NOT Number ===> " + numtype);
    }
    console.log(".");
    console.log(".");
    console.log("................................................");
    console.log("String Tricks:");
    console.log("txttype lenght = " + txttype.length);
    console.log("'true' - is the " + txttype2.indexOf("true") + " character in " +  txttype2 );
    console.log("locate last - 'true' - in the line " +  txttype2.lastIndexOf("true") );

    //JSON-START
    var objMovie = {
        MovieName: "Test-Drive",
        AgeLimit: "12+",
        MovieLength: 90,
        movieActive: true,
        movieType:["action","western","oldy"],
        sound:["Dolby", "sournd", "sequence"],
        MovieCity:{
            city:"holon",
            address: "eilta 22",
            kidoment: "077",
            phone: "7654321"
        },
        movieOrder: function(num) {
            var number = num;
            console.info("object.function")
            console.log("-*-* num === " + num + " / number === " + number);
            console.log("objMovie.MovieName === " + objMovie.MovieName);
            number = num ** 2;
            console.log("number = num ** 2  === " + number);
            return (number);
        }
    };
    //JSON-END


    console.log("...[Variable type].............................................");
    console.log("number === " + numtype + " typeof ===" + typeof(numtype));
    console.log("txttype === " + txttype + " typeof ===" + typeof(txttype));
    console.log("txttype2 === " + txttype2 + " typeof ===" + typeof(txttype2));
	console.log("typeof objectTypeEmpty === " + typeof(objectTypeEmpty)); //object
    console.log("typeof arrayTypeEmpty === " + typeof(arrayTypeEmpty)); //object/array

    //arrayTypeEmpty




    console.log("Array/Object");
    arr.name = "biff";

    console.log("** index array value:")
    for (var i=0; i < arr.length; i++)
    {
        console.log("arr[" + i + "]=== "+ arr[i]);
    }

    console.log("** all array value:")
    for (var key in arr)
    {
        console.log(arr[key]);
    }

    console.log("** all array value the assigned not in declaration:")
    arrnum = [1,2,3];
    for (var key in arrnum)
    {
        console.log(arr[key]);
    }

    console.log("*** Json-Start");
    console.log("*** objMovie - print ***:")
    console.log(" objMovie.MovieName === " + objMovie.MovieName);
    console.log(" objMovie.AgeLimit === " + objMovie.AgeLimit);
    console.log(" objMovie.MovieLength === " + objMovie.MovieLength);
    console.log(" objMovie.movieActive === " + objMovie.movieActive);
    console.log(" -= objMovie.movieType ");
    for (var mt in objMovie.movieType) //mt=index
    {
        console.log(mt + " - " + objMovie.movieType.length + " . " + objMovie.movieType[mt]);
    }

    console.log(" -= objMovie.sound ");
    for (var ms in objMovie.sound) //ms=index
    {
        console.log(ms + " - " + objMovie.sound.length + " . " + objMovie.sound[ms]);
    }


    console.log(" -= objMovie.MovieCity ");
    for (var mc in objMovie.MovieCity) //mc=index
    {
        console.log(mc + " === " + objMovie.MovieCity[mc]);
    }

    //object --> function()
    console.log("object --> function() === " + objMovie.movieOrder(2));
    console.log("*** Json-END");



//object
//    var obj = {
//                 prop1 : "Hello"
//              };


//			var key = "prop1";
//			obj.prop1;
//			obj["prop1"];
//			obj[key];
//
//			//datatype function
//			function func(){}
//			var func = function(){};
//
//			//casting
//			var a="1";
//			a = parseInt(a);
//			b = a*1; //b is numeric
//			a*=1;
//
//
//			var b="hello";
//			b*1; // NaN (Not a Number)
//
//			a=1;
//			a.toString();
//			a+'';
//
//			a="1";
//			// convert to boolean
//			a=!!a;
//			try{
//				throw new Error ('error message');
//			}catch(e){
//				console.dir(e);
//			}final{
//			}
//
//			}


}


function test()
{
   console.error("<u>test zone code </u>");
   console.log("1 = " + typeof 1); // number
   console.log("1.2 = " + typeof 1.2); // number
   console.log("abc = " + typeof "abc"); // string
   console.log("abc[0] = " + typeof "abc"[0]); // string
   console.log("true = " + typeof true); // boolean
   console.log("function() = " + typeof function () { }); // function
   console.log("{} = " + typeof {}); // object
   console.log("null = " + typeof null); // object
   console.log("Date() = " + typeof new Date()); // object
   console.log("window = " + typeof window); // object
   console.log("undefined = " + typeof undefined); // undefined
   console.log("blabla = " + typeof blabla); // undefined
}


//overloading - last method wins.
function log(type, message) {

    if (message === null || message === undefined) {
        message = type;
        type = msg;
    }

    if (message == null) {
        message = type;
        type = msg;
    }


    console.log(type + " " + message);
}


function fn_Add(num1,num2)
{
    console.log(".");
    console.log("................................................");
    console.log("fn_Add() --> [ok]");

    //casting to number
     //if ((typeof num1 || typeof num2) !== 'number') {
     if( (typeof(num1) !== 'number') || (typeof(num2) !== 'number') ) {
       num1 = Number(num1);
       num2 = Number(num2);
     }
     return num1 + num2;
}

function fn_add2(num1,num2) {
  var result = 1;

  if ((typeof(num1) &&  typeof (num2)) !== 'number') {
    // example: throw error will stop the script
    //  throw new Error ("Argument/s is a NUMBER type.");
    console.log("not valid value");
  }

  //casting
  result = num1 + num2;
  if (parseInt (result) !==  result) {
      console.log("Enter argument as number")
  }

  return result;
}

//
//closure
function fnGetCounter()
{
    var intCount = 0;

    function fnAdd() {
        ++intCount;
        console.log("intCount ===" + intCount);
    }

    return fnAdd;
}


//
//closure #2
//
//global variable
var intCount2 = 0;

//reset global variable
function fnReset(){
   this.intCount2 = 0;
    console.log("intCount2 = 0");
    return fnReset;
}

//counter
function fnGetCounter2()
{

    function fnAdd2() {
        intCount2++;
        console.log("intCount2 ===" + intCount2);
    }

    return fnAdd2;
}

//
// this.*
//
function fnThisExample() {
//.this
var obj = {
    id: 123,
    name: "eli",
    dump: function() {
        console.log("id === " + this.id + " , name === " + this.name);
    }
};
obj.dump(); //call the object and goto the function.

console.log("*** print the object + print the value this.* ");
console.log(" (obj.dump) ===" +  obj.dump);
console.log("--id === " + obj.id + " , --name === " + obj.name);
}



//
// call / apply
//
function fnAppyCallMethods(name, other) {

    var obj = {
        id : 321
    };

    function dump() {
        console.log("** this.id === " + this.id);
    }

    console.log("dump.call(obj)");
    dump.call(obj);
    console.log("*** obj.id=15;");
    obj.id=15;

    console.log("*** dump.apply(obj) ===");
    dump.apply(obj);
}


//
// call / apply
//

function fnAppyCallMethods2(name, profession) {
    console.log("My name is " + name + " and I am a " + profession + ".");
}

//
// space - number of space wanted.
//
function Spc(number){

  var index = 1; // index for loop
  var stOutput = ""; //return output value
  var stTempalte = "&nbsp;" // space template

  //check if number value is a valid number
  if ((number < 0) || (number == NaN) || (number == null)) {
    number = 1;
  }

  //dispaly many spaces as needed.
  for (index=1; index <= number; index++) {
      stOutput += stTempalte;
  }

  return stOutput;
}


function getTimeDate()
{
    var s = "&nbsp;&nbsp;&nbsp;"
    var currentDateTime = new Date;
    //var dateTimeFormat = new dateTimeFormat; //test only
    var currentDateDispaly; //String Formatted date (dd/mm/yyyy)
    var currentTimeDispaly; //String Formatted Time (hh:mm:ss)


    // simple-Date
    console.log("Date = " + Date());


    // getDate()	>> (1-31)
    // getMonth()	>> (0-11)
    // getFullYear() >> YYYY
    currentDateDispaly = currentDateTime.getDate() + "/"  +
                         (currentDateTime.getMonth()+1) + "/" +
                         currentDateTime.getFullYear() ;


   // getHours()	     >> (0-23)
   // getMinutes()     >> (0-59)
   // getSeconds()     >> (0-59)
   // getMilliseconds  >> (0-999)
    currentTimeDispaly =  currentDateTime.getHours()    + ":"  +
                          currentDateTime.getMinutes()  + ":"  +
                          currentDateTime.getSeconds()  + "."  +
                          currentDateTime.getMilliseconds();


    document.write(currentDateDispaly + "" + Spc(6) +  ""  + currentTimeDispaly );
    return true;
}


function SetCalc(num1, num2)
{
  //  console.log("SetCalc(num1, num2)" + " *num1= " + num1 + " *num2= " + num2);
    GlNumberAge = num1 + num2;
    return GlNumberAge;
}


function GetCalc()
{
    //console.log("................................................");
    console.log("GetCalc()");

    SetCalc(10,12);
    console.log("global variable ==> " + GlNumberAge);
}



//module
var modularpattern = (function() {
    // your module code goes here
    var sum = 0 ;
    var argTwo = 2;


    return {
        reset:function() {
            return sum = 0;
        },
        add:function() {
            sum = sum + 1;
            return sum;
        },
        multiplication:function(){
            sum = sum * 3;
            return sum;
        },
        division:function(){
            sum = sum / argTwo;
            return sum;
        },
        varValue:function() {
          var stringReturn = "";

            console.log("sum =" + sum + " >>> " + " argTwo == " + argTwo + " ");
            stringReturn = "sum =" + sum + " >>> " + " argTwo == " + argTwo;
            return stringReturn;

        },
        modulePrint:function()   {
            console.log("*all*--[modularpattern.modulePrint()] ==> [modulePrint:function()]-----------");
            console.log("modularpattern.add() === " + modularpattern.add());
            console.log("modularpattern.add() === " + modularpattern.add());
            console.log("modularpattern.multiplication() === " + modularpattern.multiplication());
            console.log("modularpattern.division() === " + modularpattern.division());
            console.log("modularpattern.reset() === " +modularpattern.reset());
            console.log("modularpattern.varValue() === " +modularpattern.varValue());
          }
    }
}());

function fnCalcAdd(x,y){
    var _x = x;
    var _y = y;

    function Dump() {
        console.log(_x + "," + _y);
    }

    return {
        dump: Dump
    };
}

function getModuleValue() {
    console.log("getModuleValue() ==> ");
    console.log("modularpattern.add() === " + modularpattern.add());
    console.log("modularpattern.add() === " + modularpattern.add());
    console.log("modularpattern.multiplication() === " + modularpattern.multiplication());
    console.log("modularpattern.division() === " + modularpattern.division());
    console.log("modularpattern.reset() === " +modularpattern.reset());
    console.log("calling module function >>> "); modularpattern.varValue();

    //call print function
    modularpattern.modulePrint();

}


//alert(modularpattern.add());    // alerts: 1
//alert(modularpattern.add());    // alerts: 2
//alert(modularpattern.reset());  // alerts: 0


function fnFactoryAdd(x,y){
    var _x = x;
    var _y = y;

    function dump() {
        console.log(" " + _x + "," + _y);
    }

    function print() {
        console.log(" " + _x + "," + _y);
    }

    return {
        dump: dump
    };
}


function fPinPoint(x, y)
{
    this.x = x;
    this.y = y;

    console.log("this.x === " + this.x + " this.y === " + this.y);

    fPinPoint.prototype.dump = function() {
        console.log("fPinPoint.prototype.dump ===> this.x === " + this.x + " this.y === " + this.y);
    }

//   return {
//      age : this.x,
//      weight : this.y
}

function callfPinPoint()
{
    var pt1 = new fPinPoint(3,4);
    var pt1 = {};

    fPinPoint.call(pt1,4,5);

    pt1._proto_ = fPinPoint.prototype;
    console.log("propotype - link back to constructors propotype");
    console.log("pt1._proto_ ==> " + pt1._proto_); //p
    fPinPoint.call(pt1,11,12);

    var pt2 = new fPinPoint(3,132);
    pt2.dump();

}


function writeGlobal(num)
{
    GlNumberzip = num;
}


function  printGloabl()
{
    console.log("GlNumberzip === " + GlNumberzip);
    console.log("GlNumberAge === " + GlNumberAge);
}

//
// before delete/erase
//


//    function modulePrint2()
//    {
//        console.log("*** modulePrint2() ==> ");
//        console.log("modularpattern.add() === " + modularpattern.add());
//        console.log("modularpattern.add() === " + modularpattern.add());
//        console.log("modularpattern.multiplication() === " + modularpattern.multiplication());
//        console.log("modularpattern.division() === " + modularpattern.division());
//        console.log("modularpattern.reset() === " +modularpattern.reset());
//    }


//
//
//jquery - ???
//(function ($) {
//    $.ajax({
//        url:"www.read.me",
//        type: "GET"
//    });
//}) (jQuery);
