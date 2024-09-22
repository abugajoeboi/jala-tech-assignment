// Write functions to set a cookie, get a cookie and check a cookie in a single program. 


// Function to set a cookie
function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000)); // Set expiration date
    const expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/"; // Set the cookie
}

// Function to get a cookie
function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';'); // Split cookies into an array
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length); // Trim leading spaces
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length); // Return cookie value
    }
    return null; // Return null if cookie not found
}

// Function to check if a cookie exists
function checkCookie(name) {
    const cookieValue = getCookie(name); // Get the cookie value
    if (cookieValue !== null) {
        return true; // Cookie exists
    }
    return false; // Cookie does not exist
}

// Example usage
setCookie("username", "JohnDoe", 7); // Set a cookie
console.log(getCookie("username")); // Get the cookie
console.log(checkCookie("username")); // Check if the cookie exists
console.log(checkCookie("nonexistent")); // Check a non-existent cookie
