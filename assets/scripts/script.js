let firstDocBtn = document.getElementById('firstDocBtn');
let secondDocBtn = document.getElementById('secondDocBtn');
let firstDocBtnImg = document.getElementById('firstDocBtnImg');
let secondDocBtnImg = document.getElementById('secondDocBtnImg');

firstDocBtn.addEventListener('click', function () {
    firstDocBtnImg.src = "assets/images/load-first-done.png";
});

secondDocBtn.addEventListener('click', function () {
    secondDocBtnImg.src = "assets/images/load-second-done.png";
});