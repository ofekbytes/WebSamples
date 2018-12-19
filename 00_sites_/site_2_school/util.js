// Write JavaScript here
function fnCalc(number1, number2)
{
  return 0;
}

function fnReadJson()
{
  //ENGLISH
  var daysOfWeekEn = '{"day1":["title","Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]}';

  //HEBREW
  var daysOfWeekHE = '{"day1":["לוח שעות","ראשון","שני","שלישי","רביעי","חמישי","שישי","שבת"]}';

  var contact = JSON.parse(daysOfWeekEn);

  document.getElementById("DaySubject0").innerHTML = contact.day1[0];
  document.getElementById("Day1").innerHTML = contact.day1[1];
  document.getElementById("Day2").innerHTML = contact.day1[2];
  document.getElementById("Day3").innerHTML = contact.day1[3];
  document.getElementById("Day4").innerHTML = contact.day1[4];
  document.getElementById("Day5").innerHTML = contact.day1[5];
  document.getElementById("Day6").innerHTML = contact.day1[6];

  contact = JSON.parse(daysOfWeekEn);
  document.getElementById("DaySubject0").innerHTML = contact.day1[0];
  document.getElementById("Day1").innerHTML = contact.day1[1];
  document.getElementById("Day2").innerHTML = contact.day1[2];
  document.getElementById("Day3").innerHTML = contact.day1[3];
  document.getElementById("Day4").innerHTML = contact.day1[4];
  document.getElementById("Day5").innerHTML = contact.day1[5];
  document.getElementById("Day6").innerHTML = contact.day1[6];

}
