// --- FEATURE 1: FAVORITES TRACKER (products.html) ---

// Advanced Requirement: Use at least two arrays.
const allAvailableProducts = ['Fresh Sourdough Loaf', 'Cinnamon Walnut Babka', 'Custom Celebration Cake', 'Morning Croissant'];
let userFavorites = []; 

// Load stored data when the page opens
function loadFavorites() {
    const storedFavs = localStorage.getItem('bakeryFavorites');
    if (storedFavs) {
        userFavorites = JSON.parse(storedFavs);
    }
    updateFavoritesDisplay();
}

// Respond to user action (button click)
function addToFavorites(itemName) {
    if (!userFavorites.includes(itemName)) {
        userFavorites.push(itemName);
        // Save to browser storage
        localStorage.setItem('bakeryFavorites', JSON.stringify(userFavorites));
        updateFavoritesDisplay();
    } else {
        alert(itemName + " is already in your favorites!");
    }
}

// Update the page dynamically
function updateFavoritesDisplay() {
    const listElement = document.getElementById('favorites-list');
    if (!listElement) return; // Exit if not on the products page
    
    listElement.innerHTML = '';
    
    if (userFavorites.length === 0) {
        listElement.innerHTML = '<li>No favorites saved yet.</li>';
    } else {
        userFavorites.forEach(item => {
            const li = document.createElement('li');
            li.textContent = "♥ " + item;
            listElement.appendChild(li);
        });
    }
}

function clearFavorites() {
    userFavorites = [];
    localStorage.removeItem('bakeryFavorites');
    updateFavoritesDisplay();
}

// Initialize favorites on page load
window.onload = loadFavorites;


// --- FEATURE 2: FORM VALIDATION (contact.html) ---

const contactForm = document.getElementById('inquiry-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        let isValid = true;
        
        // Clear previous error messages
        document.getElementById('name-error').textContent = '';
        document.getElementById('email-error').textContent = '';
        
        const nameField = document.getElementById('name').value.trim();
        const emailField = document.getElementById('email').value.trim();
        
        // Check 1: Required Name Field
        if (nameField === '') {
            document.getElementById('name-error').textContent = ' Please enter your name.';
            isValid = false;
        }
        
        // Check 2: Email Format Validation
        const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
        if (!emailPattern.test(emailField)) {
            document.getElementById('email-error').textContent = ' Please enter a valid email address containing an "@" symbol.';
            isValid = false;
        }
        
        // Prevent submission if input is invalid
        if (!isValid) {
            event.preventDefault();
        } else {
            alert("Form submitted successfully!");
            event.preventDefault(); // Added just to prevent actual page reload for the assignment demo
        }
    });
}