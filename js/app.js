document.addEventListener('DOMContentLoaded', function() {  

/* ---------------------------------------------------- */
/* ----- TOGGLE SUBMENU ----- */
/* ---------------------------------------------------- */

	// const submenuToggle = document.querySelector('.menu__item');
 //    const submenu = document.querySelector('.submenu');
 //    submenuToggle.addEventListener('click', function(e) {
 //        e.preventDefault();
 //        submenu.classList.toggle('open--submenu');
 //    });


/* ---------------------------------------------------- */
/* ----- WYSUWANIE SUBMENU ----- */
/* ---------------------------------------------------- */


/* ---------------------------------------------------- */
/* ----- SLIDER GALLERY ----- */
/* ---------------------------------------------------- */

	const sliderList = document.querySelectorAll('.gallery--picture li');
	const previousBtn = document.querySelector('.js--btn.arrow--left');
	const nextBtn = document.querySelector('.js--btn.arrow--right');
	let counter = 0;

	// Previous Button
	function previousPicture(ev) {
		ev.preventDefault();

		sliderList[counter].classList.remove('visible');

		if (counter === 0) {
			counter = sliderList.length - 1;
		} else {
			counter--;
		}

		sliderList[counter].classList.add('visible');
	}

	// Next Button
	function nextPicture(ev) {
		ev.preventDefault();

		sliderList[counter].classList.remove('visible');

		if (counter === sliderList.length - 1) {
			counter = 0;
		} else {
			counter++;
		}

		sliderList[counter].classList.add('visible');
	}

	sliderList[counter].classList.add('visible');
	previousBtn.addEventListener('click', previousPicture);
	nextBtn.addEventListener('click', nextPicture);

});