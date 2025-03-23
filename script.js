// Get the no button
const noBtn = document.querySelector('.no-btn');

// Add mouseover event to the no button
noBtn.addEventListener('mouseover', () => {
    // Generate random position within viewport
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    // Make sure button stays within viewport
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${Math.min(x, window.innerWidth - noBtn.offsetWidth)}px`;
    noBtn.style.top = `${Math.min(y, window.innerHeight - noBtn.offsetHeight)}px`;
});

// Function to show second page
function showSecondPage() {
    document.getElementById('firstPage').style.display = 'none';
    document.getElementById('secondPage').style.display = 'block';
}

// Function to show birthday card
function showCard() {
    document.getElementById('secondPage').style.display = 'none';
    document.getElementById('cardPage').style.display = 'block';
    
    // Add small delay before starting animation
    setTimeout(() => {
        document.querySelector('.card').classList.add('open');
    }, 100);
}

// Function to go back to first page
function goToFirstPage() {
    document.querySelector('.card').classList.remove('open');
    
    // Wait for card close animation to complete
    setTimeout(() => {
        document.getElementById('cardPage').style.display = 'none';
        document.getElementById('secondPage').style.display = 'none';
        document.getElementById('firstPage').style.display = 'block';
    }, 1000);
}

// Function to go back to second page
function goToSecondPage() {
    document.querySelector('.card').classList.remove('open');
    
    // Wait for card close animation to complete
    setTimeout(() => {
        document.getElementById('cardPage').style.display = 'none';
        document.getElementById('secondPage').style.display = 'block';
    }, 1000);
} 