const images = [
    "https://picsum.photos/id/10/1200/800",
    "https://picsum.photos/id/20/1200/800",
    "https://picsum.photos/id/30/1200/800",
    "https://picsum.photos/id/40/1200/800",
    "https://picsum.photos/id/50/1200/800",
    "https://picsum.photos/id/60/1200/800",
    "https://picsum.photos/id/70/1200/800",
    "https://picsum.photos/id/80/1200/800",
    "https://picsum.photos/id/90/1200/800",
    "https://picsum.photos/id/100/1200/800"
];

const photoTrack = document.getElementById('photo-track');
const bg1 = document.getElementById('bg1');
const bg2 = document.getElementById('bg2');

let currentIndex = 0;
let activeBg = bg1;

// Initialize photos in the track
images.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.className = 'photo-item';
    photoTrack.appendChild(img);
});

function updateGallery() {
    // 1. Calculate scroll position
    // Each photo height is roughly 60vh + 150px gap
    const photoElements = document.querySelectorAll('.photo-item');
    const photoHeight = photoElements[0].offsetHeight;
    const gap = 150;
    
    // Calculate offset to center the current photo
    const offset = currentIndex * (photoHeight + gap);
    photoTrack.style.transform = `translateY(-${offset}px)`;

    // 2. Update Background with Fade
    const nextBg = activeBg === bg1 ? bg2 : bg1;
    nextBg.style.backgroundImage = `url('${images[currentIndex]}')`;
    
    activeBg.classList.remove('active');
    nextBg.classList.add('active');
    activeBg = nextBg;

    // 3. Increment index and loop
    currentIndex = (currentIndex + 1) % images.length;
}

// Initial call
updateGallery();

// Change every 5 seconds
setInterval(updateGallery, 5000);
