
//Golbal variable
var GlNumberAge;
var GlNumberzip;

var err = "ERR";
var wrn = "WRN";
var msg = "MSG";

var height;
var width;

function fnLine()
{
    document.write("<hr>");
    return true;
}




function jbBasic2_IsExist()
{
//    document.write("\"jbBasic.js\" -  included to project");
    console.log(".");    
    console.log("................................................");
    console.info("\"jbBasic2.js\" - Loaded --> [ok]");
    console.log("................................................");    
    return true;
}



class Rectangle {
  constructor(_height, _width) {
    this.height = _height;
    this.width = _width;
  }
  
  newValue(_height, _width)
  {
    this.height = _height;
    this.width = _width;  
  }
    
  get area() {
    return this.calcArea();
  }
    
  
  calcArea() {
    return this.height * this.width;
  }
      
  showValue(){
    //console.log("this.height = " + this.height + "  this.width = " + this.width);
    console.log(this.height + " x " + this.width + " = " + this.calcArea() );       
  }
    
}


function callRectangle() {

    const square = new Rectangle(10, 20);
    square.showValue();
    //console.log(square.area);   
    
    //const square = new Rectangle(15, 23);
    square.newValue(15,23);
    square.showValue();
    //console.log(square.area);   

}


//class - read
//https://developer.mozilla.org/he/docs/Web/JavaScript/Reference/Classes
