// about us btn contents
let storyBtn = document.getElementById("storyBtn");
let missionBtn = document.getElementById("missionBtn");
let vissionBtn = document.getElementById("vissionBtn");
let storyContent = document.getElementById("storyContent");
let missionContent = document.getElementById("missionContent");
let vissionContent = document.getElementById("vissionContent");

// Event listener for the Story button
storyBtn.addEventListener("click", function () {
  storyContent.style.display = "block";
  missionContent.style.display = "none";
  vissionContent.style.display = "none";
  this.classList.add("activeBtn");
  missionBtn.classList.remove("activeBtn");
  vissionBtn.classList.remove("activeBtn");
});

// Event listener for the Mission button
missionBtn.addEventListener("click", function () {
  missionContent.style.display = "block";
  storyContent.style.display = "none";
  vissionContent.style.display = "none";
  this.classList.add("activeBtn");
  storyBtn.classList.remove("activeBtn");
  vissionBtn.classList.remove("activeBtn");
});

// Event listener for the Vision button
vissionBtn.addEventListener("click", function () {
  vissionContent.style.display = "block";
  storyContent.style.display = "none";
  missionContent.style.display = "none";
  this.classList.add("activeBtn");
  storyBtn.classList.remove("activeBtn");
  missionBtn.classList.remove("activeBtn");
});

// phone and subject inputs
let form = document.getElementById("contactForm");
let phoneInput = document.getElementById("phone");
let phoneError = document.getElementById("phoneError");
let phoneError2 = document.getElementById("phoneError2");
let subjectInput = document.getElementById("subject");
let subjectError = document.getElementById("subjectError");
let textarea = document.getElementById("message");

form.addEventListener("submit", function (event) {
  let isWidthGreaterThan768 = window.innerWidth > 768;

  // Subject
  if (subjectInput.value.length < 5) {
    event.preventDefault();
    subjectError.classList.remove("hidden");
    if (!isWidthGreaterThan768) {
      textarea.style.marginTop = "-14px";
    }
  } else {
    subjectError.classList.add("hidden");
  }

  // Phone
  if (phoneInput.value.length != 13) {
    event.preventDefault();
    phoneError.classList.remove("hidden");
    if (!isWidthGreaterThan768) {
      subjectInput.style.marginTop = "-19px";
    }
  } else {
    phoneError.classList.add("hidden");
  }

  if (!phoneInput.value.startsWith("+995")) {
    event.preventDefault();
    phoneError2.classList.remove("hidden");
    if (!isWidthGreaterThan768) {
      subjectInput.style.marginTop = "-19px";
    }
  } else {
    phoneError2.classList.add("hidden");
  }

  // textarea
  if (isWidthGreaterThan768) {
    if (
      subjectInput.value.length < 5 ||
      phoneInput.value.length != 13 ||
      !phoneInput.value.startsWith("+995")
    ) {
      textarea.style.marginTop = "-14px";
    } else {
      textarea.style.marginTop = "";
    }
  }
});

// image slider

// Select all the images
const images = document.querySelectorAll(".imgSlider img");

// Select the previous & next buttons
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");

// Start from the first image
let currentIndex = 0;

// next and previous positions of first image
function initializeImages() {
  images.forEach((img, index) => {
    if (index === 0) {
      // First image
      img.style.transform = "translateX(0)";
      img.style.opacity = "1";
    } else if (index === 1) {
      // Next image
      img.style.transform = "translateX(-300%)";
      img.style.opacity = "0";
    } else if (index === images.length - 1) {
      // Previous image
      img.style.transform = "translateX(300%)";
      img.style.opacity = "0";
    } else {
      // All other
      img.style.transform = "translateX(300%)";
      img.style.opacity = "0";
    }
  });
}

// Call this func
initializeImages();

// update the image display for sliding effect with direction
function updateImageDisplay(direction) {
  const outgoingIndex = currentIndex;

  // Update currentIndex for next or previous image
  if (direction === "next") {
    currentIndex = (currentIndex + 1) % images.length;
  } else if (direction === "prev") {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
  }

  // Transition the outgoing image
  images[outgoingIndex].style.transform =
    direction === "next" ? "translateX(-300%)" : "translateX(300%)";
  images[outgoingIndex].style.opacity = "0";

  // Transition the incoming (current) image
  images[currentIndex].style.transform = "translateX(0)";
  images[currentIndex].style.opacity = "1";

  // Prepare the next and previous images for the subsequent transition
  const nextIndex = (currentIndex + 1) % images.length;
  const prevIndex = (currentIndex - 1 + images.length) % images.length;

  images[nextIndex].style.transform = "translateX(-300%)";
  images[prevIndex].style.transform = "translateX(300%)";

  // Ensure all other images are off-screen and not visible
  images.forEach((img, index) => {
    if (index !== currentIndex && index !== nextIndex && index !== prevIndex) {
      img.style.opacity = "0";
      img.style.transform = "translateX(300%)"; // Off-screen to the right
    }
  });
}

// Event listeners for the prev and next buttons
prevBtn.addEventListener("click", () => {
  updateImageDisplay("prev");
});

nextBtn.addEventListener("click", () => {
  updateImageDisplay("next");
});

// Initially set the first image
updateImageDisplay();

// // Function to start automatic slideshow
// function startSlideshow() {
//   setInterval(() => {
//     updateImageDisplay("next");
//   }, 10000); // 5000 milliseconds = 5 seconds
// }

// // Call startSlideshow to begin the automatic transitions
// startSlideshow();

// mob versiis nav menu
document.addEventListener("DOMContentLoaded", function () {
  const mobUlBtn = document.querySelector(".mobUlBtn");
  const navUl = document.querySelector("nav ul");
  const body = document.body; // Get the body element
  const allA = document.querySelectorAll("nav ul li a"); // Get all anchor elements in the nav menu
  const dropdownMobile = this.querySelector(".pagesDropdownMobile");

  // Toggle nav menu on mobUlBtn click
  mobUlBtn.addEventListener("click", function () {
    this.classList.toggle("active");
    navUl.classList.toggle("active");
    dropdownMobile.style.display = "none";
    // Check if the menu is active and disable scrolling on the body
    if (this.classList.contains("active")) {
      body.style.overflow = "hidden"; // Disable scrolling
    } else {
      body.style.overflow = ""; // Re-enable scrolling
    }
  });

  // Add click event listener to each link in the navigation menu
  allA.forEach(function (link) {
    link.addEventListener("click", function (event) {
      // Use a simple check to see if the click is within the 'Pages' item or its dropdown
      let isPagesLinkOrDropdown = event.target.closest(".pagesLi") != null;

      // If the click is not on the 'Pages' link or within its dropdown, close the nav
      if (!isPagesLinkOrDropdown) {
        mobUlBtn.classList.remove("active");
        navUl.classList.remove("active");
        body.style.overflow = ""; // Re-enable scrolling
      }
      // If the click is on the 'Pages' link or within its dropdown, do nothing
    });
  });

  // Add click event specifically for links inside .pagesDropdownMobile
  document.querySelectorAll(".pagesDropdownMobile a").forEach(function (link) {
    link.addEventListener("click", function () {
      // Close the navigation menu
      mobUlBtn.classList.remove("active");
      navUl.classList.remove("active");
      body.style.overflow = ""; // Re-enable scrolling
    });
  });
});

document.querySelector(".pagesLi").addEventListener("click", function () {
  let dropdownMobile = this.querySelector(".pagesDropdownMobile");

  // Check if the display property is not set or is 'none'
  if (
    (!dropdownMobile.style.display ||
      dropdownMobile.style.display === "none") &&
    window.innerWidth < 768
  ) {
    dropdownMobile.style.display = "flex"; // Show the dropdownMobile
  } else {
    if (window.innerWidth < 768) {
      dropdownMobile.style.display = "none"; // Hide the dropdown
    }
  }
});

// scroll to top button
document.addEventListener("scroll", yScroll);

function yScroll() {
  let yPos = window.pageYOffset;

  if (yPos > 10) {
    document.getElementById("top-btn").style.bottom = "10px";
  } else {
    document.getElementById("top-btn").style.bottom = "-50px";
  }
}

function ScrollTop() {
  window.scrollTo(0, 0);
}
