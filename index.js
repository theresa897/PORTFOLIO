
    document.addEventListener('DOMContentLoaded', function () {
        const sections = document.querySelectorAll('div[id]');
        const navItems = document.querySelectorAll('.nav-menu-item');

        window.addEventListener('scroll', () => {
            let current = '';

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;

                if (pageYOffset >= sectionTop - sectionHeight / 3) {
                    current = section.getAttribute('id');
                }
            });

            navItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href') === `#${current}`) {
                    item.classList.add('active');
                }
            });
        });
    });

    let currentIndex = 0;

    const cards = document.querySelectorAll('.card');
    const cardSlider = document.querySelector('.card-slider');
    
    function moveSlider(direction) {
      const totalCards = cards.length;
      currentIndex += direction;
    
      // If we are at the first card, go back to the last one
      if (currentIndex < 0) {
        currentIndex = totalCards - 1;
      }
      // If we are at the last card, go to the first one
      if (currentIndex >= totalCards) {
        currentIndex = 0;
      }
    
      const offset = -(currentIndex * (cards[0].offsetWidth + 20));  // 20px is the margin between cards
      cardSlider.style.transform = `translateX(${offset}px)`;
    }
    
document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll('.services .items');
    
    const observerOptions = {
        root: null, // Use the viewport as the root
        threshold: 0.1 // Trigger when 10% of the item is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Add class to trigger animation
                observer.unobserve(entry.target); // Stop observing after it's visible
            }
        });
    }, observerOptions);

    items.forEach(item => {
        observer.observe(item); // Start observing each item
    });
});

    const modalOverlay = document.getElementById('modalOverlay');
    const closeModal = document.getElementById('closeModal');

    // Function to open the modal
    function openModal() {
        modalOverlay.style.display = 'block';
    }

    // Function to close the modal
    closeModal.onclick = function() {
        modalOverlay.style.display = 'none';
    };
    
    // Example trigger to open the modal
    window.onload = function() {
        openModal(); // Opens the modal when the page loads
    };