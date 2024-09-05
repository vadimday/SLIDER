const images = ["png/6537937.jpg", "png/9391723.png", "png/bird_2.jpg"];

let currentIndex = 0;
let autoSlideInterval = null;

const sliderImage = document.getElementById("sliderImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const autoBtn = document.getElementById("autoBtn");

function showImage(index) {
  sliderImage.src = images[index];
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});

autoBtn.addEventListener("click", () => {
  if (autoSlideInterval === null) {
    autoSlideInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    }, 3000);
    autoBtn.textContent = "Зупинити ";
  } else {
    clearInterval(autoSlideInterval);
    autoSlideInterval = null;
    autoBtn.textContent = "Автоматичний ";
  }
});

showImage(currentIndex);
