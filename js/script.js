document.addEventListener("DOMContentLoaded", () => {
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
});

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".cards");

  cards.forEach((firstCard) => {
    const card = firstCard.querySelectorAll(".card");

    card.forEach((childCard) => {
      childCard.addEventListener("click", (e) => {
        e.preventDefault();

        childCard.classList.toggle("active");

        if (card.classList.contains("active")) {
          childCard.classList.remove("active");
        } else {
          childCard.classList.add("active");
        }
        const generalText = childCard.querySelector(".general-text");
        if (generalText.style.display === "block") {
          generalText.style.display = "none";
        } else {
          generalText.style.display = "block";
        }
      });
    });
  });
});
// swiper

const data = {
  results: [
    {
      image: "images/person1.jpg",
      name: "Jennifer 1",
    },
    {
      image: "images/person2.jpg",
      name: "Jennifer 2",
    },
    {
      image: "images/person3.jpg",
      name: "Jennifer 3",
    },
    {
      image: "images/person4.jpg",
      name: "Jennifer 4",
    },
    {
      image: "images/person3.jpg",
      name: "Jennifer 5",
    },
    {
      image: "images/person2.jpg",
      name: "Jennifer 6",
    },
  ],
};

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
document.addEventListener("DOMContentLoaded", displayTeachers);

// pop-up

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".login , .sign-up");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      document.getElementById("pop-up").style.display = "grid";
      document.getElementById("pop-up").style.transition = "all 0.5s";
      document.querySelector(".icons").addEventListener("click", () => {
        document.getElementById("pop-up").style.display = "none";
      });
    });
  });
});
