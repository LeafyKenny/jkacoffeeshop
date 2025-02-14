// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
    // Select all buttons inside product cards
    const buttons = document.querySelectorAll(".product-card button");

    // Add click event listener to each button
    buttons.forEach((button, index) => {
        button.addEventListener("click", function () {
            alert(`You clicked Learn More for Product ${index + 1}!`);
        });
    });
});
