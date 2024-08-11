const slider = document.getElementById('slider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const images = [
    'Vacances sportives(Première édition)Du 22 au 26_04_2024'
  
  // Add all your image paths here
];

let currentIndex = 0;

function showImage(index) {
  slider.src = images[index];
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});

nextBtn.addEventListener('click', () => {
  // Handle potential overflow at the end
  currentIndex = (currentIndex + 1) % images.length;
  if (currentIndex === 0) { // If index reaches 0 (first image) after increment
    currentIndex = images.length - 1; // Set it to the last image
  }
  showImage(currentIndex);
});

// Show first image on load
showImage(currentIndex);


const stageImage = document.querySelector('.stage img');
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");
const span = document.getElementsByClassName("close")[0];

stageImage.addEventListener('click', () => {
  const folderPath = stageImage.dataset.folder;
  // Ici, vous devez implémenter la logique pour récupérer les images du dossier
  // et les afficher dans la modale.
  // Par exemple, vous pouvez utiliser une bibliothèque comme jQuery pour faire une requête AJAX
  // et récupérer la liste des fichiers dans le dossier.

  // Exemple simplifié (à adapter en fonction de votre environnement):
  const images = ['image1.jpg', 'image2.jpg', 'image3.jpg']; // Remplacer par les images réelles
  // ... (code pour afficher les images dans la modale)
  modal.style.display = "block";
});

span.onclick = function() {
  modal.style.display = "none";
}
