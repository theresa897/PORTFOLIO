
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
    