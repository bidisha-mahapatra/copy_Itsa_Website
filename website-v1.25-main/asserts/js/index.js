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
      popup.style.display = "none";
  }, 6000); // Adjust time if needed

  // Redirect when Register Now button is clicked
  registerBtn.addEventListener("click", () => {
      window.location.href = "register.html"; // Change to your registration page
  });
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
 const items = document.querySelectorAll('.gallery-item');
  let currentIndex = 0;
  const totalItems = items.length;

  function setActive(index) {
    items.forEach((item, i) => {
      if(i === index) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
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
  const gallery = document.getElementById('gallery');
  gallery.addEventListener('mouseenter', () => clearInterval(interval));
  gallery.addEventListener('mouseleave', () => interval = setInterval(next, 2000));
  