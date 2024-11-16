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
