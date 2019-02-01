document.addEventListener('DOMContentLoaded', function() {  

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


/* ---------------------------------------------------- */
/* ----- DROPDOWN LIST OF ITEMS - CALCULATOR ----- */
/* ---------------------------------------------------- */

const dropdownArrow = document.querySelectorAll('.list_arrow');
const list_model = document.querySelectorAll('.list_panel')[0];
const list_colors = document.querySelectorAll('.list_panel')[1];
const list_material = document.querySelectorAll('.list_panel')[2];
const transportTickBox = document.querySelector('#transport');
const priceElements = document.querySelector('.panel_right');

console.log(list_model.children[1]);

for (let i = 0; i < dropdownArrow.length; i++) {
  dropdownArrow[i].addEventListener('click', function() {
    this.nextElementSibling.classList.toggle('visible');
  });
}

let selection = function(list, destination){

  for (let i = 0; i < list.children.length; i++) {
    list.children[i].addEventListener('click', function() {
      document.querySelector('.panel_left ' + '.' + destination + '').innerHTML = this.innerHTML;
      document.querySelector('.panel_right ' + '.' + destination + '').innerHTML = this.dataset.price + ' zł';
      this.parentNode.classList.toggle('visible');
      sumUp();
    });
  }
};

transportTickBox.addEventListener('click', function(){
  if (!transportTickBox.checked) {
    document.querySelector('.panel_left .transport').innerHTML = 'Odbiór osobisty';
	document.querySelector('.panel_right .transport').innerHTML = '0 zł';
  } else {
    document.querySelector('.panel_left .transport').innerHTML = 'Transport';
	document.querySelector('.panel_right .transport').innerHTML = transportTickBox.dataset.transportPrice + ' zł';
  }
  sumUp();
});

let sumUp = function() {
  let totalPrice = 0;
  for (let i = 0; i < priceElements.children.length; i++) {
    if (priceElements.children[i].innerHTML !== '') {
      totalPrice += parseInt(priceElements.children[i].innerHTML);
    }
  }
  document.querySelector('.sum strong').innerHTML = totalPrice + ' zł';
};

selection(list_model, 'title');
selection(list_colors, 'color');
selection(list_material, 'pattern');

});