// Create a modal element
const modal = document.createElement('div');
modal.style.display = 'none'; // Initially hidden
modal.style.position = 'fixed';
modal.style.zIndex = '1000';
modal.style.left = '0';
modal.style.top = '0';
modal.style.width = '100%';
modal.style.height = '100%';
modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
modal.style.justifyContent = 'center';
modal.style.alignItems = 'center';
modal.style.textAlign = 'center';

// Create an image element for the modal
const modalImg = document.createElement('img');
modalImg.style.maxWidth = '90%';
modalImg.style.maxHeight = '90%';
modal.appendChild(modalImg);
document.body.appendChild(modal);

// Add click event to each image
const images = document.querySelectorAll('.imagegallery img');
images.forEach(img => {
    img.addEventListener('click', () => {
        modalImg.src = img.src; // Set the modal image source to the clicked image
        modal.style.display = 'flex'; // Show the modal
    });
});

// Close modal when clicking on it
modal.addEventListener('click', () => {
    modal.style.display = 'none'; // Hide the modal
});