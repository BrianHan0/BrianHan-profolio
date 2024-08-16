document.addEventListener('DOMContentLoaded', function() {
    var text = "Hi! I'm Brian Han!";
    var typingTextElement = document.getElementById('typingText');
    
    let index = 0;
    function type() {
        if (index < text.length) {
            typingTextElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 150); // Typing speed
        }
    }

    type();
});
