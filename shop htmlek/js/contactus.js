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

function Emailkuldes()
{

    
    let firstname=document.getElementById("fname").value
    let lastname=document.getElementById("lname").value
    let email=document.getElementById("email").value

    if(firstname==""){
        alert("Adj meg egy first namet!")
    }
    else{
        if(lastname==""){
            alert("Adj meg egy last namet!")   
        }
        else{
            if(email==""){
                alert("Kérlek adj meg egy email címet!")
            }
            else if(email.includes("@")){
                alert("Sikeresen elküldted!")
            }
            else{
                alert("Hibás email cím")
            }
        }
    }
}