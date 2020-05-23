
function clock() { 
	var i = 1;
	var current = new Date();
	var clockSelector = $('.clock');
	return {
		
		hours: function(){
			//set live hours
			var hour = 	current.getHours();
			if (hour > 12) { return hour = hour - 12 } return hour;

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
			return clockSelector.text(this.hours() + ":" + this.minutes() + ":" + this.seconds() + " " + this.meridian())

		},
		increment: function(){
			setInterval(function (){return clock().display()} , 1000)
		}			
		
		// morningAlarm: function(){
		// 	//will ask you if you slept well and change background image (maybe have a link to news and weather today)
		// }

	};
}

var timer = clock()
timer.display()
timer.increment()
//setInterval(function(){ return clock().display()},1000)


