function Days(){
	var _daysArr =  ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday"];
	var that = this;
	return function(dayNum){
		return _daysArr[dayNum-1];
	}	
}

day = Days();
console.log(day(1));
setTimeout(function(){
	day(1);
},1000);
console.log(day(10));