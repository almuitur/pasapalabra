
var countdown = 3;

var x = setInterval(function() {

	countdown--;
	console.log(countdown)

	 if (countdown === 0) {
    clearInterval(x);
    alert('Time is up');
	}

}, 1000);
