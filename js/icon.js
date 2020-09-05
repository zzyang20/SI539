function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.classList == "topnav") {
        x.classList.add("responsive");
        console.log("with responsive");
    } else {
        x.classList = "topnav";
        console.log("without responsive");
    }
    }