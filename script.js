document.querySelectorAll('.image').forEach(image => {
    image.addEventListener('mouseover', () => {
        // image.style.transform = 'rotateY(0deg) rotateX(0deg) scale(1.1)';
    });

    image.addEventListener('mouseout', () => {
        // image.style.transform = 'rotateY(45deg) rotateX(10deg)';
    });
});
 