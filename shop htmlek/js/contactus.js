Emailkuldes()
{

    alert("aa")
    let firstname=document.getElementById("fname").value
    let lastname=document.getElementById("lname").value
    let email=document.getElementById("email").value

    if(firstname.value=""){
        alert("Adj meg egy first namet!")
    }
    else{
        if(lastname.value=""){
            alert("Adj meg egy last namet!")   
        }
        else{
            if(email.value=""){
                alert("Kérlek adj meg egy email címet!")
            }
            else if(email.value.contains("@")){
                alert("Sikeresen elküldted!")
            }
            else{
                alert("Hibás email cím")
            }
        }
    }
}