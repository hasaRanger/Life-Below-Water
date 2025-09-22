function scrollUp() {
    document.getElementById("scroller").scrollBy({top : -400,behaviour : "smooth"});
}

function scrollDown() {
    document.getElementById("scroller").scrollBy({top : 400, behaviour : "smooth"});
}


function submit() {
    alert("Your inquiry has been submitted successfully!");
    
}
function reset() {
    document.getElementById("form").reset(); 
    alert("The form has been reset!");
    
}