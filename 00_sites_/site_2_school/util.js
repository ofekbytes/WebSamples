// Write JavaScript here
function fnCalc(number1, number2)
{
  return 0;
}

function fnReadJson()
{
  // // ENGLISH
   var daysOfWeekEn = '{"day1":["title","Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]}';

  //HEBREW
  //var daysOfWeekHE = '{"day1":["לוח שעות","ראשון","שני","שלישי","רביעי","חמישי","שישי","שבת"]}';

   var contact = JSON.parse(daysOfWeekEn);

  // document.getElementById("DaySubject0").innerHTML = contact.day1[0];
  // document.getElementById("Day1").innerHTML = contact.day1[1];
  // document.getElementById("Day2").innerHTML = contact.day1[2];
  // document.getElementById("Day3").innerHTML = contact.day1[3];
  // document.getElementById("Day4").innerHTML = contact.day1[4];
  // document.getElementById("Day5").innerHTML = contact.day1[5];
  // document.getElementById("Day6").innerHTML = contact.day1[6];

  contact = JSON.parse(daysOfWeekEn);
  document.getElementById("DaySubject0").innerHTML = contact.day1[0];
  document.getElementById("Day1.1").innerHTML = contact.day1[1];
  document.getElementById("Day2.1").innerHTML = contact.day1[2];
  document.getElementById("Day3.1").innerHTML = contact.day1[3];
  document.getElementById("Day4.1").innerHTML = contact.day1[4];
  document.getElementById("Day5.1").innerHTML = contact.day1[5];
  document.getElementById("Day6.1").innerHTML = contact.day1[6];

  for (var i=0; i < 3;i++)
  {
    console.log(i);
  }

}


/****
 * JsonRead() - 
 */
function JsonRead()
{

  var stOutput = ""; 
  $.getJSON('school-timer.json', function(data) 
{

  //stOutput += "<table id='sh' ccdir='rtl' align='center' border='5' width='100%'>";
  for(i=0;i<data.schoolTimer.length;i++)
  { 
    stOutput += "<tr align=center>";
    stOutput += "<td>" + data.schoolTimer[i].day0 + "</td>"; 
    stOutput += "<td>" + data.schoolTimer[i].day1 + "</td>";
    stOutput += "<td>" + data.schoolTimer[i].day2 + "</td>";
    stOutput += "<td>" + data.schoolTimer[i].day3 + "</td>";
    stOutput += "<td>" + data.schoolTimer[i].day4 + "</td>";
    stOutput += "<td>" + data.schoolTimer[i].day5 + "</td>";
    stOutput += "<td>" + data.schoolTimer[i].day6 + "</td>";
    stOutput += "<td>" + data.schoolTimer[i].day7 + "</td>";

    // questionBank[i]=new Array;
		// questionBank[i][0]=data.quizlist[i].question;
		// questionBank[i][1]=data.quizlist[i].option1;
		// questionBank[i][2]=data.quizlist[i].option2;
    // questionBank[i][3]=data.quizlist[i].option3;

    stOutput += "</tr>";
    $("#sh").append(stOutput);
    stOutput = "";

	}

//  stOutput += "</table>";
////
  console.log (">>>");
 // console.log (stOutput);
//
 // document.write(stOutput);
	// numberOfQuestions=questionBank.length; 

	//console.log("numberOfQuestions ==>  " + numberOfQuestions + "  questionBank.length ==> " + questionBank.length );

  ///////	displayQuestion();

 })//gtjson
}
