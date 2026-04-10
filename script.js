document.getElementById('action-btn').addEventListener('click', function() {
    const message = document.getElementById('message');
    message.textContent = "Hello! Your GitHub Pages site is working perfectly.";
    message.style.color = "#2ea44f";
    message.style.fontWeight = "bold";
});