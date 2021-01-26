gsap.from(".card", {opacity: 0,  x: -1000, duration: 1, ease: 3, delay: 2});
gsap.from("nav", {opacity: 0, duration: 1, delay: 1, x: -400});
gsap.from("p", {opacity: 0, duration: 2, x: -100});
gsap.from("h2", {opacity: 0, duration: 2, y: -100});
gsap.from(".slider", {opacity: 0, duration: 2, x: 300});
var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 3000;	// Time Between Switch
	 
// Image List
images[0] = "image01.jpg";
images[1] = "image03.jpg";
images[2] = "image02.jpg";
images[3] = "image04.jpg";

// Change Image
function changeImg(){
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;
