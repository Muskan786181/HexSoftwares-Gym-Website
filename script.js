function joinNow(){
alert("Welcome to FitZone Gym! Registration coming soon.");
}

document.getElementById("contactForm").addEventListener("submit", function(e){

e.preventDefault();

alert("Message sent successfully!");

this.reset();

});
