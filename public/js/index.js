// function myFunction() {
//     const burgerBtn = document.getElementById("burgerBtn");
//     if (burgerBtn.style.display === "block") {
//       x.style.display = "none";
//     } else {
//       x.style.display = "block";
//     }
//   }

const burgerBtn = document.getElementById("burgerBtn");
const mobileNavbar = document.getElementById("mobileNavbar");

burgerBtn.addEventListener('click', function() {
    if (mobileNavbar.classList.contains("hidden")) {
        mobileNavbar.classList.remove('hidden');
    } else {
        mobileNavbar.classList.add('hidden');
    }
});