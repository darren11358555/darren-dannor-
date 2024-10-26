let currentIndex = 0;
const slideDuration = 3000; // Duration for each slide in milliseconds (3000 ms = 3 seconds)
let interval; // Variable to hold the interval

function showSlide(index) {
    let slides = document.getElementsByClassName("carousel-slide");
    if (index >= slides.length) {
        currentIndex = 0; // Loop back to the first slide
    }
    if (index < 0) {
        currentIndex = slides.length - 1; // Loop back to the last slide
    }

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Show the selected slide
    slides[currentIndex].style.display = "block";
}

// Move slide forward or backward
function moveSlide(n) {
    currentIndex += n;
    showSlide(currentIndex);
    resetInterval(); // Reset the interval on manual change
}

// Function to start the automatic sliding
function startSlideShow() {
    interval = setInterval(() => {
        currentIndex++;
        showSlide(currentIndex);
    }, slideDuration);
}

// Function to reset the interval
function resetInterval() {
    clearInterval(interval); // Clear existing interval
    startSlideShow(); // Restart the interval
}

// Initialize the first slide and start the slideshow
showSlide(currentIndex);
startSlideShow();
