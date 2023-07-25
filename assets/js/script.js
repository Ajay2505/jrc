var swiperAnimation = new SwiperAnimation();

var swiper = new Swiper(".swiper-container", {
  direction: "vertical",
  effect: "slide",
  autoplay:false,
  mousewheel: {
    eventsTarged: ".swiper-slide",
    sensitivity: 1,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
    draggable: true
  },
  on: {
    init: function() {
      swiperAnimation.init(this).animate();
      updateCenterTextStyles(this.activeIndex);
    },
    slideChange: function() {

      updateCenterTextStyles(this.activeIndex);
      
      if (swiper.activeIndex == 0) {
        console.log("Slide 1");
      }
      if (swiper.activeIndex == 1) {
        console.log("Slide 2");
      }
      if (swiper.activeIndex == 2) {
        console.log("Slide 3");
      }
      if (swiper.activeIndex == 3) {
        console.log("Slide 4");
      }
      if (swiper.activeIndex == 4) {
        console.log("Slide 5");
      }
      swiperAnimation.init(this).animate();
    }
  }
});


function updateCenterTextStyles(activeIndex) {
  var centerTextElements = document.querySelectorAll(".center_text");

  // Reset the styles for all center_text elements
  centerTextElements.forEach(function (centerText) {
    centerText.style.transform = "";
    centerText.style.opacity = "0";
    centerText.style.transformOrigin = "0% 0%";
    centerText.classList.remove("active");
  });

  // Apply the CSS property to the center_text element corresponding to the active slide
  var activeCenterText = centerTextElements[activeIndex];
  if (activeCenterText) {
    activeCenterText.style.transform = "translateY(calc(-100px * " + activeIndex + "))";
    activeCenterText.style.opacity = "1";
    activeCenterText.style.transformOrigin = "calc(-25% * " + (activeIndex + 1) + ") 0%" ;
    activeCenterText.classList.add("active");

  }
}

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 60,
  draggable: true,
  freeMode:{
    enabled: true,
    sticky: false,
    momentumBounce: false,
  },
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: {
    sensitivity: 1,
    releaseOnEdges: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
    draggable: true
  },
});

// Get references to the button and the project section wrapper
const projectsButton = document.querySelector('.projects_button');
const projectSectionWrapper = document.querySelector('.project_section_wrapper');
const backButton = document.querySelector('.back_button a');

// Add a click event listener to the button
projectsButton.addEventListener('click', function() {
  // Toggle the 'active' class on the project section wrapper
  projectSectionWrapper.classList.toggle('active');
});

backButton.addEventListener('click', function() {
  // Toggle the 'active' class on the project section wrapper
  projectSectionWrapper.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", function () {
  // Get the .loading_screen element
  const loadingScreen = document.querySelector(".loading_screen");

  // Toggle the .away class after a delay (adjust the delay value as needed)
  setTimeout(function () {
    loadingScreen.classList.toggle("away");
  }, 4000); // 1000 milliseconds (1 second) delay, adjust as needed
});