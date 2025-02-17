function myFunction() {
    let x = document.getElementById("myLinks");
    let ikon1 = document.getElementById("menuikon1");
    let ikon2 = document.getElementById("menuikon2");

    let fejlec = document.getElementsByClassName("felsofejlec")[0];
    if (x.style.display === "block") {
      x.style.display = "none";
      ikon1.style.display = "block";
      ikon2.style.display = "none";
      fejlec.style.display="block";
    } else {
      x.style.display = "block";
      ikon1.style.display = "none";
      ikon2.style.display = "block";
      fejlec.style.display="none";
    }

  }
  function dropFunction1(){
    let x = document.getElementById("drop3");
    
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  function dropFunction2(){
    let x = document.getElementById("drop4");
    
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
