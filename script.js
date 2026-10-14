const form = document.getElementById('colorForm');
const input = document.getElementById('colorInput');
const header = document.getElementById('header');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    header.style.color = input.value;
});