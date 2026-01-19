document.addEventListener('DOMContentLoaded', () => {

    // --- LOGIC FOR THE CONFIRMATION MODAL ---
    const modal = document.getElementById("confirmation-modal");
    const modalText = document.getElementById("modal-jersey-name");
    const proceedBtn = document.getElementById("proceed-to-checkout");
    const cancelBtn = document.getElementById("cancel-checkout");
    const copyIconBtn = document.getElementById("copy-icon-btn"); // Get the new icon button
    const copyFeedback = document.getElementById("copy-feedback-text"); // Get the feedback text element
    const buyButtons = document.querySelectorAll('.buy-button');
    let checkoutUrl = '';

    if (modal) {
        buyButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                event.preventDefault();
                const card = button.closest('.product-card');
                const jerseyName = card.querySelector('h3').textContent;
                checkoutUrl = button.href;

                modalText.textContent = jerseyName;
                modal.style.display = "block";
                copyFeedback.textContent = ""; // Clear feedback text on open
            });
        });

        proceedBtn.onclick = () => {
            window.location.href = checkoutUrl;
        };

        cancelBtn.onclick = () => {
            modal.style.display = "none";
        };

        // === LOGIC FOR THE COPY ICON BUTTON ===
        copyIconBtn.onclick = () => {
            const textToCopy = modalText.textContent;
            navigator.clipboard.writeText(textToCopy).then(() => {
                copyFeedback.textContent = "Copied to clipboard!"; // Show feedback
                // Hide the feedback message after a couple of seconds
                setTimeout(() => {
                    copyFeedback.textContent = "";
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy text: ', err);
                copyFeedback.textContent = "Copy failed";
            });
        };
        // === END OF LOGIC ===
    }

    // --- LOGIC FOR SEARCH BAR AND BACK-TO-TOP  ---
    // ... 
    const searchBar = document.getElementById('search-bar');
    if (searchBar) {
        const productCards = document.querySelectorAll('.product-card');
        searchBar.addEventListener('keyup', (event) => {
            const searchTerm = event.target.value.toLowerCase();
            productCards.forEach(card => {
                const productName = card.querySelector('h3').textContent.toLowerCase();
                if (productName.includes(searchTerm)) { card.style.display = 'flex'; } else { card.style.display = 'none'; }
            });
        });
    }
    const backToTopButton = document.getElementById('back-to-top-btn');
    if (backToTopButton) {
        window.onscroll = () => { if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) { backToTopButton.style.display = "block"; } else { backToTopButton.style.display = "none"; } };
        backToTopButton.onclick = () => { window.scrollTo({ top: 0, behavior: 'smooth' }); };
    }
});
