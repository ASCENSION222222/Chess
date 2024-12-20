document.addEventListener('DOMContentLoaded', () => {
    const registrationSection = document.querySelector('.registration-section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    observer.observe(registrationSection);
});