

//Golbal Variable
var GlTxtName;
var GlNumberzip;


//Global Message
var MsgError = "MsgError";


function fnDot()
{
  console.log(".");    
  console.log("................................................");
}

function fnMessage(code)
{
  switch (code)
  {
    case 1:
    console.log("code is " + code);
  }

}

function util_js_IsExist()
{
    fnDot();
    console.info("\"util.js\" - Loaded --> [ok]");
    fnDot();

    return true;
}


function fnCleanFields()
{
    document.getElementById("arg1").value = "";
    document.getElementById("arg2").value = ""; 
    document.getElementById("arg3").value = "";   


    document.getElementById("val1").value = "---";   
    document.getElementById("val2").value = "---";       
    document.getElementById("val3").value = "---";       
    document.getElementById("val4").value = "---";       
    document.getElementById("val5").value = "---";               
}

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
    //_arg2 = generateRandomNumber(Number(10));
    _arg3 = _arg1 * _arg2;

    console.log(" _arg1 ==> " +  _arg1 + " _arg2 ==> " + _arg2);

    fnCleanFields();    


    document.getElementById("arg1").readOnly = true;
    document.getElementById("arg2").readOnly = true;

    document.getElementById("arg1").value = _arg1;
    document.getElementById("arg2").value = _arg2;

    document.getElementById("val1").innerHTML = _arg1;
    document.getElementById("val2").innerHTML = " X ";
    document.getElementById("val3").innerHTML = _arg2;    
    document.getElementById("val4").innerHTML = " = ";        
    document.getElementById("val5").innerHTML = _arg3;    


    document.getElementById("idDateTime").innerHTML = Date();    


  //return 0;
} 



function fnOnLoad()
{
  randomInRange(10);
  
}

//other
// function fnLine()
// {
//     document.write("<hr>");
//     return true;
// }



