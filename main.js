const scroller = document.querySelector('.scroller');
const container = document.querySelector('.container-scroll');

// Pastikan elemen ada sebelum dijalankan
if (scroller && container) {
    function duplicateContent() {
        let content = scroller.innerHTML;
        while (scroller.scrollWidth < container.offsetWidth * 2) {
            scroller.innerHTML += content;
        }
    }

    duplicateContent();

    // Reset animasi untuk menghindari jeda
    scroller.style.animation = 'none';
    setTimeout(() => {
        scroller.style.animation = '';
    }, 10);
}

// Menambahkan event listener ke tombol burger
const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");

if (burger && menu) {
    burger.addEventListener("click", function () {
        menu.classList.toggle("active");
    });
}
