document.addEventListener('mousemove', (e) => {
    const h2 = document.querySelector('h2');
    const rect = h2.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    h2.style.transform = `translate(${x * 0.02}px, ${y * 0.02}px)`;

    if (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
    ) {
        h2.classList.add('hover');
    } else {
        h2.classList.remove('hover');
    }
});
