$(document).ready(function(){

    
    var option = {
        speed : 15,
        duration : 3,
        stopImageNumber : -1,
        startCallback : function() {
            console.log('start');
        },
        slowDownCallback : function() {
            console.log('slowDown');
        },
        stopCallback : function($stopElm) {
            console.log('stop');
        }
    }
    var rouletter = $('div.roulette');
    $('div.roulette').roulette(option);	
    $('.start').click(function(){
		rouletter.roulette('start');	
	});
    $('.stop').click(function(){
        rouletter.roulette('stop');
    })
})