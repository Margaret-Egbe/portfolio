import  './modern-normalise.css';
import './style.css';


//Animation
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

let screen, starArr;
const params = { speed: 10, count: 600, life: 5 };

window.addEventListener("resize", () => {
    Setup();
});

function Star() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.z = Math.random() * canvas.width;

    this.move = function () {
        this.z -= params.speed;

        if (this.z <= 0) {
            this.z = canvas.width;
        }
    };

    this.show = function () {
        let x, y, radius, opacity;

        radius = canvas.width / this.z;

        x = (this.x - screen.c[0]) * radius;
        x = x + screen.c[0];
        y = (this.y - screen.c[1]) * radius;
        y = y + screen.c[1];

        opacity = radius > params.life ? (2 - radius / params.life) * 1.5 : 1;

        ctx.beginPath();
        ctx.fillStyle = "rgba(255,255,255, " + opacity + ")";
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
    };
}

function Setup() {
    screen = {
        w: window.innerWidth,
        h: window.innerHeight,
        c: [window.innerWidth * 0.5, window.innerHeight * 0.5],
    };

    canvas.width = screen.w;
    canvas.height = screen.h;

    starArr = [];

    for (let i = 0; i < params.count; i++) {
        starArr[i] = new Star();
    }
}

function update() {
    ctx.fillStyle = "rgba(1, 0, 45, 1)"; // Set the background color
    ctx.fillRect(0, 0, canvas.width, canvas.height); // Fill the entire canvas with the background color

    starArr.forEach(function (s) {
        s.show();
        s.move();
    });

    requestAnimationFrame(update);
}

Setup();
update();

//Nav bar
const menuIcon = document.querySelector('#menu-icon');
const nav = document.querySelector('nav');
const navbg = document.querySelector('.nav-bg');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bi-x-lg');
    nav.classList.toggle('active');
    navbg.classList.toggle('active');
});



 
/**Typed Animation */
var typed = new Typed(".text", {
  strings: ["Frontend Developer", "UI/UX Designer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

  //Nav active
  document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll("header nav ul li");
  
    // Initially set the "active" class on the Home item
    navItems[0].classList.add("active");
  
    navItems.forEach((item, index) => {
      item.addEventListener("click", function () {
        // Remove "active" class from all items
        navItems.forEach((navItem) => navItem.classList.remove("active"));
  
        // Add "active" class to the clicked item
        item.classList.add("active");
      });
    });
  });
  

  //portfolio see more
const btn = document.querySelector('.btn');
let currentItems = 3;

btn.addEventListener('click', (e) => {
    const elementList = [...document.querySelectorAll('.work-list .work')];
  e.target.classList.add('show-loader');

  for (let i = currentItems; i < currentItems + 3; i++) {
    if (elementList[i]) {
      elementList[i].style.display = 'flex';
    }
  }

  e.target.classList.remove('show-loader');
  currentItems += 3;

  if (currentItems >= elementList.length) {
    e.target.classList.add('loaded');
    e.target.style.display = 'none';
  }
})















