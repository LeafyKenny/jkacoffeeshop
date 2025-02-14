document.addEventListener('DOMContentLoaded', () => {
    const orderNowButton = document.getElementById('orderNowButton');

    if (orderNowButton) {
        orderNowButton.addEventListener('click', () => {
            window.location.href = 'Products.html'; // Navigate to the Products page
        });
    } else {
        console.error("Button with ID 'orderNowButton' not found.");
    }
});
