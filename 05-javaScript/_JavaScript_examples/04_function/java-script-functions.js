// java script

function fnTest() 
{
    document.write("fnTest() is loaded");

    return ("fnTest() is loaded");
}


function wordBlanks(myNoum, myAdjective, myVerb, myAdverb) 
{
    var result = "";

    result += "The " + myAdjective + " " + myNoum + " " + myVerb + " to the store " + myAdverb;

    return result;
}