var basic = 210;

function main ()
{
    console.log("simple.js - is loaded");
    toggleText();
    
    //get elemnt "h1" inside variable h1Tag
    var h1Tag = document.getElementsByTagName("h1");

    //first h1 tag
    // h1Tag[0].onclick = fnChangeColor;
    h1Tag[0].ondblclick = fnChangeColor;
}

function fnChangeColor()
{
 
	// this refers to the item clicked and changes the content in the tag to Click Again
	//this.innerHTML = "Click";
	
	// Generates a random color hex code
	var randomcolor = '#'+Math.floor(Math.random()*16777215).toString(16);
	
	// Change the color of the element to the random color
	this.style.color = randomcolor;
 
}


function toggleText()
{
    var txt = document.getElementById("vtf");
    var isTextVisible = txt.style.visibility != "visible";
    txt.style.visibility = isTextVisible ? "visible" : "hidden";
    console.log(basic);
}

//onload - run  main function
onload = main;

/***
 * 
 */
function test()
{
    var a = "test";
    var b = "page";

    document.write("Test Page is now here ")

    return a  + " " + b;
}