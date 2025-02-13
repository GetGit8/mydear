const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const container = document.querySelector(".container");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

// Save the original landing page content
const originalContent = container.innerHTML;

// Ensure the pop-up is hidden on page load
popup.style.display = "none";

// Move the "No" button when hovered
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// Show pop-up after clicking "Yes"
yesBtn.addEventListener("click", () => {
    container.innerHTML = `
        <h1>YAY! 🥰 See you on Valentine's! ❤️</h1>
        <button id="goBackBtn">Go Back</button>
    `;

    // Delay pop-up for 1 second after clicking "Yes"
    setTimeout(() => {
        popup.style.display = "flex";
    }, 1000);

    // Add "Go Back" button functionality
    document.getElementById("goBackBtn").addEventListener("click", () => {
        container.innerHTML = originalContent;
        addEventListeners(); // Reattach event listeners
        popup.style.display = "none"; // Hide pop-up when going back
    });
});

// Close pop-up when clicking "Close"
closePopup.addEventListener("click", () => {
    popup.style.display = "none";
});

// Function to reattach event listeners after resetting the page
function addEventListeners() {
    document.getElementById("yesBtn").addEventListener("click", () => {
        container.innerHTML = `
            <h1>YAY! 🥰 See you on Valentine's! ❤️</h1>
            <button id="goBackBtn">Go Back</button>
        `;

        setTimeout(() => {
            popup.style.display = "flex";
        }, 1000);

        document.getElementById("goBackBtn").addEventListener("click", () => {
            container.innerHTML = originalContent;
            addEventListeners();
            popup.style.display = "none"; // Hide pop-up when going back
        });
    });

    // Reattach "No" button movement
    document.getElementById("noBtn").addEventListener("mouseover", () => {
        const x = Math.random() * (window.innerWidth - 100);
        const y = Math.random() * (window.innerHeight - 100);
        document.getElementById("noBtn").style.left = `${x}px`;
        document.getElementById("noBtn").style.top = `${y}px`;
    });
}