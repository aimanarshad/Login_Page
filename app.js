
document.querySelector('.btn').addEventListener('click', function(event) {
    event.preventDefault(); 

    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    
    emailInput.style.borderColor = '';
    passwordInput.style.borderColor = '';

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    let hasError = false;

    
    if (email === '') {
        emailInput.style.border = '2px solid red';
        hasError = true;
    }

    if (password === '') {
        passwordInput.style.border = ' 2px solid red';
        hasError = true;
    }

    
    if (!hasError) {
        console.log('Email:', email);
        console.log('Password:', password);
    }

    if (email !== '' && password !== '') {
        // Display the success message
        alert('You have successfully logged in!');
        
        
    } else {
        // If email or password is empty, you can optionally show an alert or highlight the fields
        alert('Please enter both email and password.');
    }

    
    
});



