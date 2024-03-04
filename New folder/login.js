const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

document.getElementById("tombol-signin").addEventListener("click", function(event) {
    event.preventDefault(); // Mencegah aksi default formulir
    window.location.href = "index.html";
  });