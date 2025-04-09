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