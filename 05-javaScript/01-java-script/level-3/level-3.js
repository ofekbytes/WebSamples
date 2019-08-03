// if Statement //
function if_statement() {

    var num1 = 7;
    var num2 = 10;

    console.log(":::if_Statemen:::");

    if (num1 < num2) {
        console.log("num1 < num2 - condition is TRUE");
    }

}

// if else Statement //
function if_else_statement() {

    var num1 = 7;
    var num2 = 10;

    console.log(":::if_else_Statemen:::");

    if (num1 < num2) {
        console.log("num1 < num2 - condition is TRUE");
    } else {
        console.log("num1 > num2 - condition is FALSE");
    }

}


// if else Statement //
function conditional_operator() {

    var num1 = 7;
    var num2 = 10;
    var result = "";

    console.log(":::conditional_operator:::");

    result = (num1 > num2) ? true : false;
    console.log(" num1 > num2 === " + result);

    result = (num1 < num2) ? " bingo " : " No-Bingo ";
    console.log("num1 < num2 === " + result);

    result = (num1 > num2) ? " on " : " off ";
    console.log("num1 > num2 === " + result);

}


// else if Statement //
function else_if_statement()
{

    var level = 2;

    
    if (level == 1) //FALSE
    {
        document.write("<h1>level 1</h1>");
    } else if (level == 2) //TRUE
    {
        document.write("<h1>level 2/h1>");
    } else {
        document.write("<h1>level 3</h1>");
    }

    console.log("level == " + level );

}