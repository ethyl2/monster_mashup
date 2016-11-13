/*Sounds are from https://www.freesound.org/people/renatalmar/sounds/264981/,
 https://www.freesound.org/people/LloydEvans09/sounds/185822/ and
 https://www.freesound.org/people/Vendarro/sounds/329912/
*/


$(document).ready(function(){

		var headclix = 0, eyeclix = 0, noseclix = 0, mouthclix = 0;
		var chime = new Audio("sounds/chime.wav");
		var single_chime = new Audio("sounds/single-chime.wav");
		var horn = new Audio("sounds/horn.mp3");
		var mouth_harp = new Audio("sounds/mouth-harp.wav");

		lightning_one();
		lightning_two();
		lightning_three();

		var model = {
			"head": {
				clix: 0,
				sound: chime
			},
			"eyes": {
				clix: 0,
				sound: single_chime
			},
			"nose": {
				clix: 0,
				sound: horn
			},
			"mouth": {
				clix: 0,
				sound: mouth_harp
			}
		}

		$(".face").click(function() {
			console.log(this.id);
			var facePart = this.id;
			model[facePart].sound.play();
			model[facePart].sound.currentTime=0;
			if (model[facePart].clix < 9) {
				$(this).animate({left: "-=367px"}, 500);
				model[facePart].clix++;
			}
			else {
				$(this).animate({left: "0px"}, 500);
				model[facePart].clix = 0;
			}
		})

		/*
		$("#head").click(function() {
			if (headclix < 9) {
				chime.play();
				chime.currentTime=0;
				$(this).animate({left: "-=367px"}, 500);
				headclix++;
			}
			else {
				$(this).animate({left: "0px"}, 500);
				headclix = 0;
			}
		});

		$("#eyes").click(function() {
			if (eyeclix < 9) {
				single_chime.play();
				single_chime.currentTime=0;
				$(this).animate({left: "-=367px"}, 500);
				eyeclix++;
			}
			else {
				$(this).animate({left: "0px"}, 500);
				eyeclix = 0;
			}
		});

		$("#nose").click(function() {
			if (noseclix < 9) {
				horn.play();
				horn.currentTime=0;
				$(this).animate({left: "-=367px"}, 500);
				noseclix++;
			}
			else {
				$(this).animate({left: "0px"}, 500);
				noseclix = 0;
			}
		});

		$("#mouth").click(function() {
			if (mouthclix < 9) {
				mouth_harp.play();
				mouth_harp.currentTime=0;
				$(this).animate({left: "-=367px"}, 500);
				mouthclix++;
			}
			else {
				$(this).animate({left: "0px"}, 500);
				mouthclix = 0;
			}
		});
*/
});//end doc.onready function

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
