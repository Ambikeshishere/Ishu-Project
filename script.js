// Select carousel images and controls
const schoolImages = [
    'gallery1.jpeg',
    'gallery2.jpg',  // Add more images as needed
    'gallery3.jpg'
];
const culturalImages = [
    'gallery1.jpeg',
    'gallery2.jpg',  // Add more images as needed
    'gallery3.jpg'
];

let schoolIndex = 0;
let culturalIndex = 0;

// Select the image elements in the carousels
const schoolImageElement = document.querySelectorAll('.gallery-card')[0].querySelector('.carousel-image');
const culturalImageElement = document.querySelectorAll('.gallery-card')[1].querySelector('.carousel-image');

// Event listeners for arrows in the School Glimpses carousel
document.querySelectorAll('.gallery-card')[0].querySelector('.arrow-left').addEventListener('click', () => {
    schoolIndex = (schoolIndex - 1 + schoolImages.length) % schoolImages.length;
    schoolImageElement.src = schoolImages[schoolIndex];
});
document.querySelectorAll('.gallery-card')[0].querySelector('.arrow-right').addEventListener('click', () => {
    schoolIndex = (schoolIndex + 1) % schoolImages.length;
    schoolImageElement.src = schoolImages[schoolIndex];
});

// Event listeners for arrows in the Cultural Event Photos carousel
document.querySelectorAll('.gallery-card')[1].querySelector('.arrow-left').addEventListener('click', () => {
    culturalIndex = (culturalIndex - 1 + culturalImages.length) % culturalImages.length;
    culturalImageElement.src = culturalImages[culturalIndex];
});
document.querySelectorAll('.gallery-card')[1].querySelector('.arrow-right').addEventListener('click', () => {
    culturalIndex = (culturalIndex + 1) % culturalImages.length;
    culturalImageElement.src = culturalImages[culturalIndex];
});

// Select the header element
const header = document.querySelector('header');

// Function to toggle the shrink class based on scroll position
let lastScrollTop = 0;

window.addEventListener('scroll', function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scrolling down
        header.classList.add('shrink');
    } else {
        // Scrolling up
        header.classList.remove('shrink');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Ensure scroll position is not negative
});
