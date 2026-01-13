// This function runs when all the HTML on the page is fully loaded.
document.addEventListener('DOMContentLoaded', () => {

    // --- LOGIC FOR THE SEARCH BAR ---
    const searchBar = document.getElementById('search-bar');
    // We check if the search bar exists on the page before trying to use it.
    if (searchBar) {
        const productCards = document.querySelectorAll('.product-card');

        searchBar.addEventListener('keyup', (event) => {
            const searchTerm = event.target.value.toLowerCase();

            productCards.forEach(card => {
                const productName = card.querySelector('h3').textContent.toLowerCase();
                if (productName.includes(searchTerm)) {
                    card.style.display = 'flex'; // Changed to 'flex' to match new CSS
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }


    // --- LOGIC FOR THE "BACK TO TOP" BUTTON ---
    const backToTopButton = document.getElementById('back-to-top-btn');

    // We check if the button exists on the page.
    if (backToTopButton) {
        // Show or hide the button based on scroll position
        window.onscroll = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                backToTopButton.style.display = "block";
            } else {
                backToTopButton.style.display = "none";
            }
        };

        // Scroll to the top when the button is clicked
        backToTopButton.onclick = () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
    }
});
