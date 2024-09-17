/*const btn = document.querySelector(".btn");
const mai = document.querySelector(".prin");
let isMenuOpen = false

btn.addEventListener("click", () => {
    if (isMenuOpen == false){
         isMenuOpen = true;
    }else{
         isMenuOpen = false;
    }
  mai.classList.toggle("active");
  mai.style.display = 'flex';
  setTimeout(() => {
    if (isMenuOpen == false){
        mai.style.display = 'none'
    };
  }, 2000);
});*/

const btn = document.querySelector(".btn");
const mai = document.querySelector(".prin");

btn.addEventListener("click", () => mai.classList.toggle("active"));