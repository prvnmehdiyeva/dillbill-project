// Wait for the DOM to be fully loaded before executing the code
document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll functionality for navigation links
  const links = document.querySelectorAll("nav ul li a");
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetID = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetID);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Toggle and show/hide functionality for card elements
  const cards = document.querySelectorAll(".cards");
  cards.forEach((firstCard) => {
    const card = firstCard.querySelectorAll(".card");
    card.forEach((childCard) => {
      childCard.addEventListener("click", (e) => {
        e.preventDefault();
        childCard.classList.toggle("active");
        const generalText = childCard.querySelector(".general-text");
        if (generalText.style.display === "block") {
          generalText.style.display = "none";
        } else {
          generalText.style.display = "block";
        }
      });
    });
  });

  // Display teacher information using Swiper.js
  async function displayTeachers() {
    const teachers = data.results;
    teachers.forEach((result) => {
      const div = document.createElement("div");
      div.classList.add("swiper-slide");
      div.innerHTML = `
        <img src="${result.image}" alt="" />
        <h3>${result.name}</h3>
      `;
      document.querySelector(".swiper-wrapper").appendChild(div);
      initSwiper();
    });
  }

  // Initialize Swiper.js for the teacher slider
  function initSwiper() {
    const swiper = new Swiper(".swiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      freeMode: true,
      loop: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      breakpoints: {
        500: {
          slidesPerView: 2,
        },
        700: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
      },
    });
  }

  // Display a pop-up when login or sign-up buttons are clicked
  const buttons = document.querySelectorAll(".login, .sign-up");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const popup = document.getElementById("pop-up");
      popup.style.display = "grid";
      popup.style.transition = "all 0.5s";
      document.querySelector(".icons").addEventListener("click", () => {
        popup.style.display = "none";
      });
    });
  });
  displayTeachers();
});
