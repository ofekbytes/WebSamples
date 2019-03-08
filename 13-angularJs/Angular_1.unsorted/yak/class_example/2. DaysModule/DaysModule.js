
   
   var days = (function($)
   	{
   		var _daysArr = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday"];

		$.getJSON("days.json",function(data)
		{
		   _daysArr=data;
		});
		
		return function(dayNum)
		{
			return _daysArr[dayNum-1];
		}

   	})(jQuery);


   	console.log(days(1));
   	setTimeout(function(){
   	    console.log(days(1));
   	},1000);
   	
