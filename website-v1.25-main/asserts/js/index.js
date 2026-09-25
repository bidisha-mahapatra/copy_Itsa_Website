const d = new Date();
let year = d.getFullYear();
$("#year").text(year);

window.addEventListener("load", () => {
  const main = document.getElementById("main");
  const loader = document.getElementById("loading");
  const popup = document.getElementById("popup");
  const registerBtn = document.getElementById("register-btn");

  main.classList.toggle("inactive");
  loader.classList.toggle("inactive");
  loader.remove();

  // Hide the popup after 3 seconds
  setTimeout(() => {
    document.querySelector(".popup-window").classList.remove("popup-hidden");
    document.querySelector(".popup-overlay").classList.remove("popup-hidden");
    document.body.classList.add("no-scroll");
  }, 700); // Adjust time if needed

  // Redirect when Register Now button is clicked
  // registerBtn.addEventListener("click", () => {
  //   window.location.href = "register.html"; // Change to your registration page
  // });
});

particlesJS("particles-js", {
  particles: {
    number: {
      value: 153,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: {
        enable: true,
        mode: "grab",
      },
      onclick: {
        enable: false,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 600,
        line_linked: {
          opacity: 0.4334598272703483,
        },
      },
      bubble: {
        distance: 600,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});
const items = document.querySelectorAll(".gallery-item");
let currentIndex = 0;
const totalItems = items.length;

function setActive(index) {
  items.forEach((item, i) => {
    if (i === index) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

function next() {
  currentIndex = (currentIndex + 1) % totalItems;
  setActive(currentIndex);
}

// Initial activation
setActive(currentIndex);

// Auto slide every 3 seconds
let interval = setInterval(next, 3000);

// Pause auto-slide on hover, resume on leave
const gallery = document.getElementById("gallery");
// gallery.addEventListener("mouseenter", () => clearInterval(interval));
// gallery.addEventListener(
//   "mouseleave",
//   () => (interval = setInterval(next, 2000)),
// );

function closePopup() {
  document.querySelector(".popup-window").classList.add("popup-hidden");
  document.querySelector(".popup-overlay").classList.add("popup-hidden");
  document.body.classList.remove("no-scroll");
}

document
  .querySelector(".close-popup-button")
  .addEventListener("click", closePopup);

//this is the function for the coutdown timer in the popup window
function countDown() {
  setInterval(function () {
    const destDate = new Date("October 15,2026, 10:00:00").getTime(); //to update countdown time, adjust this date and time
    const curDate = new Date().getTime(); //gives current timme in ms
    const difference = destDate - curDate; //both cur and dest dates are in ms, so diff is also in ms, we need to convert it to days,hr,min,sec later

    const day = Math.floor(difference / (1000 * 60 * 60 * 24)); //we divide the difference which is in ms, we divide it with no.of ms in a day, to get the no.of days
    const hour = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    ); // %ing the diff with no.of ms in a day, we get out of the days, and are now in the current day's time.
    //  We divide by no.of ms in an hour to get the exact hr in the day
    const minute = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)); //we % the diff, by no. of ms in a hour, to get into the current hour
    //then we divide by no.of ms in a min, to get the exact min
    const second = Math.floor((difference % (1000 * 60)) / 1000); //again, we % by no. of ms in a min, to get into the current min
    //then we divide by no.of ms in a sec, to get the exact sec.

    //getting the days, hr, min, sec element from the timer
    const daysEl = document.getElementById("countdown-days");
    const hoursEl = document.getElementById("countdown-hours");
    const minutesEl = document.getElementById("countdown-minutes");
    const secondsEl = document.getElementById("countdown-seconds");

    daysEl.textContent = String(day).padStart(2, "0"); // String().padStart(2,'0'), makes sure that the numbers in the timer are two digits with leading 0.
    hoursEl.textContent = String(hour).padStart(2, "0");
    minutesEl.textContent = String(minute).padStart(2, "0");
    secondsEl.textContent = String(second).padStart(2, "0");
  }, 1000);
}
countDown();
