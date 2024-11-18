let activeFaq = null;

function toggleFaq(card) {
    // Get the plus sign inside the clicked card
    const plusSign = card.querySelector('.plus-sign');

    // Check if the clicked card is already active
    const isActive = card.classList.contains('active');

    // Close the currently active FAQ if any
    if (activeFaq && activeFaq !== card) {
        activeFaq.classList.remove('active');
        activeFaq.querySelector('.plus-sign').classList.replace('fa-minus', 'fa-plus'); // Change back to plus icon
    }

    // If the clicked card was not active, make it active
    if (!isActive) {
        card.classList.add('active');
        plusSign.classList.replace('fa-plus', 'fa-minus'); // Change to minus icon
        activeFaq = card;
    } else {
        card.classList.remove('active');
        plusSign.classList.replace('fa-minus', 'fa-plus'); // Change back to plus icon
        activeFaq = null;
    }
}



//gallery-js
document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab-btn");
    const galleryItems = document.querySelectorAll(".gallery-item");
    const lightbox = document.querySelector(".lightbox");
    const lightboxImg = document.querySelector(".lightbox-img");
    const closeBtn = document.querySelector(".lightbox-close");
    const prevBtn = document.querySelector(".lightbox-prev");
    const nextBtn = document.querySelector(".lightbox-next");

    let currentIndex = 0;
    let currentCategory = "all";

    // Tabs filter functionality
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            currentCategory = tab.getAttribute("data-category");
            galleryItems.forEach(item => {
                if (currentCategory === "all" || item.getAttribute("data-category") === currentCategory) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });

    // Open lightbox on gallery item click
    galleryItems.forEach((item, index) => {
        item.addEventListener("click", () => {
            currentIndex = index;
            currentCategory = item.getAttribute("data-category");
            openLightbox(item.querySelector("img").src);
        });
    });

    function openLightbox(src) {
        lightboxImg.src = src;
        lightbox.classList.add("fade-in");
        lightbox.style.display = "flex";
    }

    // Close lightbox
    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    // Navigate to the previous image
    prevBtn.addEventListener("click", () => {
        const items = Array.from(galleryItems).filter(item => 
            currentCategory === "all" || item.getAttribute("data-category") === currentCategory
        );
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        lightboxImg.src = items[currentIndex].querySelector("img").src;
    });

    // Navigate to the next image
    nextBtn.addEventListener("click", () => {
        const items = Array.from(galleryItems).filter(item => 
            currentCategory === "all" || item.getAttribute("data-category") === currentCategory
        );
        currentIndex = (currentIndex + 1) % items.length;
        lightboxImg.src = items[currentIndex].querySelector("img").src;
    });
});
