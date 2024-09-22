document.querySelector('.displayDateTime').addEventListener('click', function(){
    const now = new Date();
    const dateTimeString = now.toLocaleString();
    document.querySelector('.dateTimeDisplay').textContent = dateTimeString;
});