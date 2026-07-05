/*=====================================
  FITNESS EVER
  main.js
=====================================*/

document.addEventListener("DOMContentLoaded", function () {

    /*==============================
      Sticky Navbar
    ==============================*/

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {
            navbar.style.background = "#000";
            navbar.style.padding = "12px 0";
            navbar.style.boxShadow = "0 8px 20px rgba(0,0,0,.4)";
        } else {
            navbar.style.background = "rgba(0,0,0,.85)";
            navbar.style.padding = "18px 0";
            navbar.style.boxShadow = "none";
        }

    });


    /*==============================
      Smooth Scroll
    ==============================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });


    /*==============================
      Active Navigation
    ==============================*/

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;

            if (pageYOffset >= sectionTop) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });


    /*==============================
      Scroll Reveal Animation
    ==============================*/

    const reveals = document.querySelectorAll(".feature-box");

    function reveal() {

        reveals.forEach(box => {

            const windowHeight = window.innerHeight;

            const revealTop = box.getBoundingClientRect().top;

            const revealPoint = 120;

            if (revealTop < windowHeight - revealPoint) {

                box.style.opacity = "1";
                box.style.transform = "translateY(0px)";

            }

        });

    }

    reveals.forEach(box => {

        box.style.opacity = "0";
        box.style.transform = "translateY(60px)";
        box.style.transition = ".8s ease";

    });

    window.addEventListener("scroll", reveal);

    reveal();


    /*==============================
      Back To Top Button
    ==============================*/

    const topBtn = document.createElement("button");

    topBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';

    topBtn.className = "top-btn";

    document.body.appendChild(topBtn);

    topBtn.style.cssText = `
        position:fixed;
        bottom:30px;
        right:30px;
        width:50px;
        height:50px;
        border:none;
        border-radius:50%;
        background:#E63946;
        color:#fff;
        font-size:20px;
        cursor:pointer;
        display:none;
        z-index:999;
        transition:.3s;
        box-shadow:0 10px 25px rgba(230,57,70,.4);
    `;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {

            topBtn.style.display = "block";

        } else {

            topBtn.style.display = "none";

        }

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });


    /*==============================
      Loading Animation
    ==============================*/

    const loader = document.createElement("div");

    loader.id = "loader";

    loader.innerHTML = `
        <div class="spinner"></div>
    `;

    document.body.appendChild(loader);

    loader.style.cssText = `
        position:fixed;
        top:0;
        left:0;
        width:100%;
        height:100%;
        background:#111;
        display:flex;
        justify-content:center;
        align-items:center;
        z-index:9999;
    `;

    const spinner = loader.querySelector(".spinner");

    spinner.style.cssText = `
        width:70px;
        height:70px;
        border:6px solid #333;
        border-top:6px solid #E63946;
        border-radius:50%;
        animation:spin 1s linear infinite;
    `;

    const style = document.createElement("style");

    style.innerHTML = `
        @keyframes spin{
            0%{transform:rotate(0deg);}
            100%{transform:rotate(360deg);}
        }

        .nav-link.active{
            color:#E63946 !important;
        }

        .top-btn:hover{
            transform:translateY(-5px);
            background:#ff4b5c !important;
        }
    `;

    document.head.appendChild(style);

    window.addEventListener("load", () => {

        setTimeout(() => {

            loader.style.opacity = "0";
            loader.style.transition = ".5s";

            setTimeout(() => {

                loader.remove();

            }, 500);

        }, 600);

    });

});