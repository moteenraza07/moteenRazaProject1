const app = {};

// when user clicks, show the mobile menu

app.button = document.querySelector('.mobileButton');
// app.closeButton = document.querySelector('.closeMenu');


app.mobileNav = document.querySelector('.mobileMenu');
app.navContainer = document.querySelector('.navContainer')

app.close = document.querySelector('.closeMenuIcon');

app.submitButton = document.querySelector('.submitButtonForm');
console.log(app.submitButton);

app.name = document.querySelector('#name');
console.log(app.name);

app.email = document.querySelector('#emailAddress');
console.log(app.email);




app.button.addEventListener("click", function (){
    // toggle on and off
    // grab the mobile menu and when i click it display the menu
   
        app.button.classList.toggle('open');
        // app.mobileNav.classList.toggle('show');
        app.navContainer.classList.remove('hiddenItems')
        app.close.classList.remove('closeMenuIcon');
        app.close.classList.add('closeMenu');
        // app.close.classList.add('closeMenuIcon');
})

app.close.addEventListener("click", function (){
    // toggle on and off
    // grab the mobile menu and when i click it display the menu
   
        
        app.button.classList.toggle('open');
        // app.mobileNav.classList.toggle('show');
        app.navContainer.classList.add('hiddenItems')
        app.close.classList.add('closeMenuIcon');
        app.close.classList.remove('closeMenu');
        
})

function validate(e) {
    e.preventDefault();
    const username = document.getElementById('name').value;
    const errorMessage  = document.getElementById('errorOne');
    if(username.length < 2) {
        errorMessage.textContent = "username must have minimum of 2 characters";
        return false;
    }else {
        errorMessage.textContent = "";
        return false;
    }
}

app.submitButton.addEventListener("click", function(e) {
    // const errorMessage = document.createElement('p');
    // console.log(errorMessage);
    // app.submitButton.appendChild(errorMessage);
    validate(e);
    
})
