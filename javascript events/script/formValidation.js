document.getElementById('myForm').addEventListener('submit', function(event) {
    const textInput = document.getElementById('textInput').value;
    const errorMessage = document.getElementById('errorMessage');

    // Clear any previous error messages
    errorMessage.textContent = '';

    // Check if the input is empty
    if (textInput.trim() === '') {
        event.preventDefault(); // Prevent form submission
        errorMessage.textContent = 'This field cannot be empty.';
    } else {
        // Optionally, handle successful form submission here
        alert('Form submitted successfully!');
    }
});