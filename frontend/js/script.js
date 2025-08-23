let boody = document.querySelector("body");
let nav = document.querySelector("nav");
let list = document.getElementsByClassName("list-items");
let darkk = document.getElementById("btn1");
let lightt = document.getElementById("btn2");
let home = document.getElementById("home");
let about = document.getElementById("about");
let myPhoto = document.getElementById("my-photo");
let github = document.getElementById("github");
let events = document.getElementById("events");
let certificates = document.getElementById("certificates");
let certImg = document.getElementsByClassName("certificate");
let projetcs = document.getElementById("projects");
let contact = document.getElementById("contact");
let contactForm = document.getElementById("contact-form");
let namee = document.getElementById("name");
let email = document.getElementById("email");
let message = document.getElementById("message");
let main = document.querySelector("main");

function darkMode() {
    setTimeout(() => {
        boody.style.backgroundColor = "#1f2020";
        boody.style.color = "white";
        nav.style.backgroundColor = "#3c3c3c";
        for (let i = 0; i < list.length; i++) {
            list[i].style.color = "white";
        }
        darkk.style.backgroundColor = "#1f2020";
        darkk.style.color = "white";
        darkk.style.boxShadow = "0 4px 6px rgba(255, 255, 255, 0.3)";
        lightt.style.backgroundColor = "#1f2020";
        lightt.style.color = "white";
        lightt.style.boxShadow = "0 4px 6px rgba(255, 255, 255, 0.3)";
        home.style.backgroundColor = "#1f2020";
        github.style.color = "white";
        about.style.backgroundColor = "#3e403f";
        events.style.backgroundColor = "#1f2020";
        certificates.style.backgroundColor = "#3e403f";
        projetcs.style.backgroundColor = "#1f2020";
        contact.style.backgroundColor = "#3e403f";
        namee.style.backgroundColor = "#1f2020";
        namee.style.color = "white";
        email.style.backgroundColor = "#1f2020";
        email.style.color = "white";
        message.style.backgroundColor = "#1f2020";
        message.style.color = "white";
        myPhoto.style.boxShadow = "0 4px 6px rgba(255, 255, 255, 0.3)";
        for (let i = 0; i < certImg.length; i++) {
            certImg[i].style.boxShadow = "0 4px 6px rgba(255, 255, 255, 0.3)";
        }
    }, 200);
}
function lightMode() {
    setTimeout(() => {
        boody.style.backgroundColor = "#edf7f0";
        boody.style.color = "black";
        nav.style.backgroundColor = "seashell";
        for (let i = 0; i < list.length; i++) {
            list[i].style.color = "black";
        }
        darkk.style.backgroundColor = "white";
        darkk.style.color = "black";
        darkk.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
        lightt.style.backgroundColor = "white";
        lightt.style.color = "black";
        lightt.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
        home.style.backgroundColor = "#edf7f0";
        github.style.color = "#1f2020";
        about.style.backgroundColor = "#fff";
        events.style.backgroundColor = "#edf7f0";
        certificates.style.backgroundColor = "#fff";
        projetcs.style.backgroundColor = "#edf7f0";
        contact.style.backgroundColor = "#f9f9f9";
        namee.style.backgroundColor = "#fff";
        namee.style.color = "#000";
        email.style.backgroundColor = "#fff";
        email.style.color = "#000";
        message.style.backgroundColor = "#fff";
        message.style.color = "#000";
        myPhoto.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
        for (let i = 0; i < certImg.length; i++) {
            certImg[i].style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
        }
    }, 200);
}

darkk.addEventListener("click", darkMode);
lightt.addEventListener("click", lightMode);

darkk.addEventListener("click", () => {
    localStorage.setItem("theme", "dark");
});

lightt.addEventListener("click", () => {
    localStorage.setItem("theme", "light");
});


document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        darkk.click(); 
    } else if (savedTheme === "light") {
        lightt.click();
  }
  main.style.opacity = "1";
});

document.addEventListener("DOMContentLoaded", () => {
  events.style.opacity = "1";
});

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href && href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
}

contactForm.addEventListener('submit', async function (e) {
  emailjs.init("clMBAE3KCc6jMQuqW");
  
  e.preventDefault();
  try {
    await emailjs.sendForm('service_p3g30kf', 'template_y0wrg86', this);
    alert('The message has successfully sent!');
    this.reset();
  } catch (error) {
    alert('Something goes wrong: ' + JSON.stringify(error));
  }
});

let currentYear = new Date().getFullYear();
document.getElementById("year").textContent = currentYear;
