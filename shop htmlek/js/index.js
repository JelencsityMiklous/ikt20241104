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


/* Hírlevél */

let emailmezo = document.getElementById("email")

function Feliratkozas(){

	if(emailmezo.value==""){
		alert("Ne nyomkodd léci, ha nem írsz be semmit :(")
	}
	else if(!emailmezo.value.includes("@")){
		alert("Nem tartalmaz '@' jelet!")
	}
	else{
		alert("Sikeresen megtörtént a feliratkozás")
	}
	
}