
function clock() { 
	var i = 0;
	var current = new Date();
	var clockSelector = $('.clock');

	return {
		
		hours: function(){
			//set live hours
			var hour = 	current.getHours();
			if (hour > 12) { return hour = hour - 12 } else  return hour;

		},
		minutes: function(){
			//set live minutes
			var minute = current.getMinutes()
			if (minute < 10) {return minute = "0" + minute} return minute

		},
		seconds: function(){
			//set live seconds
			var second = current.getSeconds()
			if (second < 10) {return second = "0" + second} return second
			
		},
		meridian : function (){
			var meridian = "AM";
			var hour = 	current.getHours()
			if (hour >= 12){
				return meridian = "PM"
			} return meridian
		},
		display: function(){
			//display the time 
			//console.log(current.getHours())
			return clockSelector.text(this.hours() + ":" + this.minutes() + ":" + this.seconds() + " " + this.meridian())	
		},
		increment: function(){
			setInterval(function (){return clock().display()} , 1000)}
			//increments seconds, minutes and hours
			// i++
			// if (second === 59){
			// 	minute ++
			// 	second = 0
			// }
			// if (minute === 59){
			// 	hour ++ 
			// 	minute = 0
			// }
			//var that = this;
			
		
		// morningAlarm: function(){
		// 	//will ask you if you slept well and change background image (maybe have a link to news and weather today)
		// }

	};
}

var timer = clock()
timer.increment()
//setInterval(function(){ return clock().display()},1000)


