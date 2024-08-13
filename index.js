// Toggle Menu Overlay
        function toggleMenu() {
            const menuOverlay = document.getElementById('menuOverlay');
            const isVisible = menuOverlay.style.display === 'flex';
            menuOverlay.style.display = isVisible ? 'none' : 'flex';
        }

        // Dark Mode Toggle for Both Desktop and Mobile
        function toggleDarkMode() {
            document.body.classList.toggle('bg-gray-900');
            document.body.classList.toggle('text-white');

            // Toggle Icons for Desktop
            document.getElementById('darkIcon').classList.toggle('hidden');
            document.getElementById('lightIcon').classList.toggle('hidden');

            // Toggle Icons for Mobile
            document.getElementById('overlayDarkIcon').classList.toggle('hidden');
            document.getElementById('overlayLightIcon').classList.toggle('hidden');
        }

        // Desktop Dark Mode Toggle
        document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);

        // Mobile Dark Mode Toggle
        document.getElementById('overlayDarkModeToggle').addEventListener('click', toggleDarkMode);
        


// Simple automatic slider for testimonials
    const testimonials = document.querySelectorAll('.testimonial-item');
    let currentTestimonial = 0;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.classList.add('hidden');
            if (i === index) {
                testimonial.classList.remove('hidden');
            }
        });
    }

    function rotateTestimonials() {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }

    // Show the first testimonial
    showTestimonial(currentTestimonial);

    // Rotate testimonials every 5 seconds
    setInterval(rotateTestimonials, 5000);    


// FAQ Toggle Script
    document.querySelectorAll('.faq-item').forEach(item => {
        const question = item.querySelector('.flex');
        const answer = item.querySelector('p');
        const toggleIcon = question.querySelector('i');
        
        question.addEventListener('click', () => {
            const isHidden = answer.classList.contains('hidden');
            answer.classList.toggle('hidden', !isHidden);
            toggleIcon.classList.toggle('ri-arrow-down-s-line', isHidden);
            toggleIcon.classList.toggle('ri-arrow-up-s-line', !isHidden);
        });
    });          