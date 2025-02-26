const rangeSlider_min = 30;
const rangeSlider_max = 60;

document.querySelector('#RangeSlider .range-slider-val-left').style.width = `${rangeSlider_min + (100 - rangeSlider_max)}%`;
document.querySelector('#RangeSlider .range-slider-val-right').style.width = `${rangeSlider_min + (100 - rangeSlider_max)}%`;
 
document.querySelector('#RangeSlider .range-slider-val-range').style.left = `${rangeSlider_min}%`;
document.querySelector('#RangeSlider .range-slider-val-range').style.right = `${(100 - rangeSlider_max)}%`;

document.querySelector('#RangeSlider .range-slider-handle-left').style.left = `${rangeSlider_min}%`;
document.querySelector('#RangeSlider .range-slider-handle-right').style.left = `${rangeSlider_max}%`;

document.querySelector('#RangeSlider .range-slider-tooltip-left').style.left = `${rangeSlider_min}%`;
document.querySelector('#RangeSlider .range-slider-tooltip-right').style.left = `${rangeSlider_max}%`;

document.querySelector('#RangeSlider .range-slider-tooltip-left .range-slider-tooltip-text').innerText = rangeSlider_min;
document.querySelector('#RangeSlider .range-slider-tooltip-right .range-slider-tooltip-text').innerText = rangeSlider_max;

document.querySelector('#RangeSlider .range-slider-input-left').value = rangeSlider_min;
document.querySelector('#RangeSlider .range-slider-input-left').addEventListener( 'input', e => {
	e.target.value = Math.min(e.target.value, e.target.parentNode.childNodes[5].value - 1);
	var value = (100 / ( parseInt(e.target.max) - parseInt(e.target.min) )) * parseInt(e.target.value) - (100 / (parseInt(e.target.max) - parseInt(e.target.min) )) * parseInt(e.target.min);

	var children = e.target.parentNode.childNodes[1].childNodes;
	children[1].style.width = `${value}%`;
	children[5].style.left = `${value}%`;
	children[7].style.left = `${value}%`;
	children[11].style.left = `${value}%`;

	children[11].childNodes[1].innerHTML = e.target.value;
});

document.querySelector('#RangeSlider .range-slider-input-right').value = rangeSlider_max;
document.querySelector('#RangeSlider .range-slider-input-right').addEventListener( 'input', e => {
	e.target.value = Math.max(e.target.value, e.target.parentNode.childNodes[3].value - (-1));
	var value = (100 / ( parseInt(e.target.max) - parseInt(e.target.min) )) * parseInt(e.target.value) - (100 / ( parseInt(e.target.max) - parseInt(e.target.min) )) * parseInt(e.target.min);

	var children = e.target.parentNode.childNodes[1].childNodes;
	children[3].style.width = `${100-value}%`;
	children[5].style.right = `${100-value}%`;
	children[9].style.left = `${value}%`;
	children[13].style.left = `${value}%`;

	children[13].childNodes[1].innerHTML = e.target.value;
});

let mybutton = document.getElementById("topgomb");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = "block";
	}
	else {
		mybutton.style.display = "none";
	}
}

function topFunction() {
	document.body.scrollTop = 0; // Safari
	document.documentElement.scrollTop = 0; // Chrome, Firefox, IE, Opera
}


/* Objektum a termékekről */

let termekek = [
	{
		name:"Collar T-shirt",
		price:35,
		gender:"men",
		discount:false
	},
	{
		name:"Gents T-Shirt",
		price:49,
		gender:"men",
		discount:false
	},
	{
		name:"Ladies Hat",
		price:17,
		gender:"women",
		discount:true
	},
	{
		name:"Leather Jacket",
		price:50,
		gender:"men",
		discount:true
	},
	{
		name:"Printed Tops",
		price:75,
		gender:"women",
		discount:false
	},
	{
		name:"Women Tops",
		price:45,
		gender:"women",
		discount:false
	}
]





function Sorting(){

	let def_sort = document.getElementById("def_sorting");
	let def_value = def_sort.value;

	let hightolow = document.getElementById("hightolow");
	let highvalue = hightolow.value;

	let lowtohigh = document.getElementById("lowtohigh");
	let lowvalue = lowtohigh.value;

	

}

