// Script File

// Home Section Starts
var menuBtn = document.querySelector('.menu-btn');
var menu = document.querySelector('.nav-links');
var menuLinks = document.querySelectorAll('.nav-links li a');

menuBtn.addEventListener('click', activeClass);

function activeClass(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
}

for(i = 0; i < menuLinks.length; i++){
	menuLinks[i].addEventListener('click', menuItemClicked);
}

function menuItemClicked(){
	menuBtn.classList.remove('active');
	menu.classList.remove('active');
}

var homeSection = document.querySelector('.home');
window.addEventListener('scroll', scrollFunction);
window.addEventListener('load', scrollFunction);

function scrollFunction(){
	if(window.scrollY > 60){
		homeSection.classList.add('active');
	}
	else{
		homeSection.classList.remove('active');
	}
}
// Home Section Ends 

// Portfolio Section Starts
var $galleryContainer = $('.gallery').isotope({
	itemSelector: '.item',
	layoutMode: 'fitRows'
})

$('.button-group .button').on('click', function(){
	$('.button-group .button').removeClass('active');
	$(this).addClass('active');

	var value = $(this).attr('data-filter');
	$galleryContainer.isotope({
		filter: value
	})
})

// magnific popup
$('.gallery').magnificPopup({
	delegate: '.overlay a',
	type: 'image',
	gallery:{
		enabled: true
	}
})
// Portfolio Section Ends

// Testimonials Section Starts
$('.testimonials-container').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTime:6000,
    margin:10,
    nav:true,
    navText:["<i class='fa-solid fa-arrow-left'></i>",
             "<i class='fa-solid fa-arrow-right'></i>"],
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:true
        },
        768:{
            items:2
        }
    }
})

//cv download
const downloadButton = document.querySelector('.download-btn');

downloadButton.addEventListener('click', () => {
  // Create a virtual anchor element (link)
  const downloadLink = document.createElement('a');

  // Set the href attribute to the URL of your CV file (replace with your actual file URL)
  downloadLink.href = 'https://drive.google.com/file/d/1QGkSmgy5cCKv1SFm6GWgNzL_1-hg4NR5/view?usp=drive_link'; // Example: 'yourwebsite.com/cv.pdf'

  // Set the download attribute to specify the downloaded file name
  downloadLink.download = 'my_cv.pdf'; // You can customize the downloaded file name

  // Simulate a click on the link to trigger the download
  downloadLink.click();
});
  

//for carousel
const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const indicators = document.querySelectorAll('.indicator');

let currentSlide = 0;

// Function to show the current slide
const showSlide = () => {
  // Hide all slides
  slides.forEach(slide => slide.style.display = 'none');
  // Show the current slide
  slides[currentSlide].style.display = 'block';
  // Update the indicator
  indicators.forEach(indicator => indicator.classList.remove('active'));
  indicators[currentSlide].classList.add('active');
};

// Function to move to the previous slide
const prevSlide = () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide();
};

// Function to move to the next slide
const nextSlide = () => {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide();
};

// Event listeners for the buttons
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Event listeners for the indicators
indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    currentSlide = index;
    showSlide();
  });
});

// Initialize the carousel
showSlide();