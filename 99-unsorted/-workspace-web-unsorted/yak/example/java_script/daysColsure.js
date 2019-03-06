function Days()
{
	//local variable
	var _daysArray = ["sunday","monday","thuesday","wednesday","thursday","friday","suterday"];
	var that = this; //saving reference
	return function (day)
	{
		return _dayArr[dayNum-1];
	}
}

day = Days();
console.log(day(1));
console.log(day(10));