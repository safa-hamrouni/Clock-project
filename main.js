
function clock() { 
	var i = 0;
	var current = new Date();
	var hour = 	current.getHours()
	var minute = current.getMinutes()
	var second = current.getSeconds()

	return {
		hours: function(){
			//set live hours
			current.getHours()
		},
		minutes: function(){
			//set live minutes
			current.getMinutes()
		},
		seconds: function(){
			//set live seconds
			current.getSeconds()
		},
		display: function(){
			//display the time 
			console.log(current.getHours())
			$('.hours').text(hour)
			$('.minutes').text(minute)
			$('.seconds').text(second)
			
		},
		increment: function(){
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
			setInterval(seconds, 1000)
		},
		morningAlarm: function(){
			//will ask you if you slept well and change background image (maybe have a link to news and weather today)

		}

	};
}

var time = clock()
time.display()
time.increment()


