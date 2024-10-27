document.getElementById("hamburger").addEventListener("click", function() {
    const menu = document.querySelector(".nav-menu");
    menu.classList.toggle("active");
    this.classList.toggle("active"); // Toggle active class on hamburger
});

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';

    // Get the element under the cursor
    const element = document.elementFromPoint(e.clientX, e.clientY);

    if (element) {
        const bgColor = window.getComputedStyle(element).backgroundColor;
        const textColor = window.getComputedStyle(element).color;

        // Parse the background and text colors
        const bgRgba = bgColor.match(/\d+/g);
        const textRgba = textColor.match(/\d+/g);

        let invertedColor = 'rgba(255, 255, 255, 0.8)'; // Default cursor color

        if (bgRgba && textRgba) {
            const [bgR, bgG, bgB] = bgRgba.map(Number);
            const [textR, textG, textB] = textRgba.map(Number);

            // Calculate brightness of text
            const textBrightness = (textR * 299 + textG * 587 + textB * 114) / 1000;

            // If text is darker, use the text color for the cursor
            if (textBrightness < 128) {
                invertedColor = `rgba(${255 - textR}, ${255 - textG}, ${255 - textB}, 0.8)`; // Inverted text color
            } else {
                invertedColor = `rgba(${255 - bgR}, ${255 - bgG}, ${255 - bgB}, 0.8)`; // Inverted background color
            }
        } else if (bgRgba) {
            // Fallback to inverted background if text is not found
            const [bgR, bgG, bgB] = bgRgba.map(Number);
            invertedColor = `rgba(${255 - bgR}, ${255 - bgG}, ${255 - bgB}, 0.8)`;
        }

        cursor.style.backgroundColor = invertedColor;
    }
});