// create empty object for name spacing
const app = {};

// target the mobile button class
app.button = document.querySelector('.mobileButton');
// target the mobile menu class
app.mobileNav = document.querySelector('.mobileMenu');
// target the navContainer class
app.navContainer = document.querySelector('.navContainer')
// target the closeMenuIcon class
app.close = document.querySelector('.closeMenuIcon');
// target the submit form class
app.submitButton = document.querySelector('.submitButtonForm');
// target the name id in the form for the username
app.name = document.querySelector('#name');
// target the emailAddress id in the form for the emailAddress
app.email = document.querySelector('#emailAddress');


// listen for a click event on the hamburger menu button
// The click on the button will add target certain classes and remove others.
app.button.addEventListener("click", function (){
    // toggle on and off
    // grab the mobile menu and when i click it display the menu
        app.button.classList.toggle('open');
        app.navContainer.classList.remove('hiddenItems')
        app.close.classList.remove('closeMenuIcon');
        app.close.classList.add('closeMenu');
    
})

// listen for a click event on the x button
// The click on the button will add target certain classes and remove others.
app.close.addEventListener("click", function (){
    // toggle on and off
    // grab the mobile menu and when i click it display the menu
        app.button.classList.toggle('open');
        app.navContainer.classList.add('hiddenItems')
        app.close.classList.add('closeMenuIcon');
        app.close.classList.remove('closeMenu');
        
})

// created a function that will check for how many characters the user inputs in the Username box
function validateUserName(e) {
    // prevent default to make sure page doesn't keep reloading
    e.preventDefault();
    // targeted the id's for the message to appear based on the character length
    const username = document.getElementById('name').value;
    const errorMessageOne  = document.getElementById('errorOne');
    // if statement used to check for how many characters user inputs and based off that we will either
    // display username need more than 2 characters or an empty string
    if(username.length < 2) {
        errorMessageOne.textContent = "Username must have minimum of 2 characters";
        return false;
    }else {
        errorMessageOne.textContent = "";
        return false;
    }

}

// created a function that will check for how many characters the user inputs in the EmailAddress box
function validateEmailAddress(e) {
    // prevent default to make sure page doesn't keep reloading
    e.preventDefault();
    // targeted the id's for the message to appear based on the character length
    const emailAddress = document.getElementById(`emailAddress`).value;
    const errerMessageTwo = document.getElementById(`errorTwo`);
    // if statement used to check for how many characters user inputs and based off that we will either
    // display username need more than 2 characters or an empty string
    if(emailAddress.length < 2) {
        errerMessageTwo.textContent = "Email Address must have a of 2 characters";
        return false;
    }else {
        errerMessageTwo.textContent = "";
        return false;
    }
}

// listened for the submitButton to be click and onced click both functions would run to validate user input
app.submitButton.addEventListener("click", function(e) {
    validateUserName(e);
    validateEmailAddress(e);
    
})
