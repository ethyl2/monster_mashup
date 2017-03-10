/*Sounds are from https://www.freesound.org/people/renatalmar/sounds/264981/,
 https://www.freesound.org/people/LloydEvans09/sounds/185822/ and
 https://www.freesound.org/people/Vendarro/sounds/329912/
*/

$(document).ready(function(){

		goLightning();
		window.onblur = stopLightning;
		window.onfocus = goLightning;
		//lightning_one();
		//lightning_two();
		//lightning_three();

		var model = {
			"head": {
				clix: 0,
				sound: new Audio("sounds/chime.wav")
			},
			"eyes": {
				clix: 0,
				sound: new Audio("sounds/single-chime.wav")
			},
			"nose": {
				clix: 0,
				sound: new Audio("sounds/horn.mp3")
			},
			"mouth": {
				clix: 0,
				sound: new Audio("sounds/mouth-harp.wav")
			}
		}

		$(".face").click(function() {
			var facePart = this.id;
			if (sound === true) {
				model[facePart].sound.play();
				model[facePart].sound.currentTime=0;
			}
			if (model[facePart].clix < 9) {
				$(this).animate({left: "-=367px"}, 500);
				model[facePart].clix++;
			}
			else {
				$(this).animate({left: "0px"}, 500);
				model[facePart].clix = 0;
			}
		})
});//end doc.onready function

var int1, int2, int3;

function goLightning() {
	int1 = setInterval( function() {
		lightning_one();
	}, 4000);
	int2 = setInterval( function() {
		lightning_two();
	}, 5000);
	int3 = setInterval( function() {
		lightning_three();
	}, 7000);
};

function stopLightning() {
	window.clearInterval(int1);
	window.clearInterval(int2);
	window.clearInterval(int3);
}

function lightning_one() {
	$("#container #lightning1").fadeIn(250).fadeOut(250);
	setTimeout("lightning_one()", 5000);
};

function lightning_two() {
	$("#container #lightning2").fadeIn(250).fadeOut(250);
	setTimeout("lightning_two()", 6000);
};

function lightning_three() {
	$("#container #lightning3").fadeIn(250).fadeOut(250);
	setTimeout("lightning_three()", 9000);
};

var sound = true;

function audioToggle() {
	// Audio icons are from https://www.iconfinder.com/search/?q=audio&license=2&price=free
	if (sound == true) {
		$("#audioIcon").attr("src", "images/mute.png");
		sound = false;
	} else {
		$("#audioIcon").attr("src", "images/sound_on.png");
		sound = true;
	}
}
