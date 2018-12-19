

//Golbal Variable
var delayMillis = 1000; //1 second

// 2be||!2be
function mathSlideShow_js_IsExist()
{
    fnDot();
    console.info("\"mathSlideShow.js\" - Loaded --> [ok]");
    fnDot();

    return true;
}


//clean all fiedls.
function fnCleanFields()
{
    document.getElementById("val1").value = "---";   
    document.getElementById("val2").value = "---";       
    document.getElementById("val3").value = "---";       
    document.getElementById("val4").value = "---";       
    document.getElementById("val5").value = "---";               
}


//generate random number
function generateRandomNumber (number)
{
  if (number === null)
  {
    number = 10;
  }

  var x = Math.floor((Math.random() * number) + 1);

  return x;
}


//Genereate Random Number
function randomInRange(maxNumber) 
{ 
    var _arg1 = 0; 
    var _arg2 = 0;
    var _arg3 = 0;

    _arg1 = generateRandomNumber(maxNumber);
    _arg2 = generateRandomNumber(maxNumber);
    _arg3 = _arg1 * _arg2;


    //print date.
    document.getElementById("idDateTime").innerHTML = Date();    

    //display output result
    console.log(_arg1 + " x " + _arg2 + " === " + _arg3);

    //clean <span> fields.
    fnCleanFields();    

    //question
    document.getElementById("val1").innerHTML = _arg1;
    document.getElementById("val2").innerHTML = " X ";
    document.getElementById("val3").innerHTML = _arg2;    
    document.getElementById("val4").innerHTML = " = ";  

    //result delay
    this.delayMillis = 1000;
    setTimeout(function() {
    document.getElementById("val5").innerHTML = _arg3;    
    }, delayMillis);
     

  //return 0;
} 


function fnOnLoad()
{
  randomInRange(10);
  
}
