const scroller = document.querySelector('.scroller');
const container = document.querySelector('.container-scroller');

// Clone konten sampai cukup panjang
function duplicateContent() {

    scroller.innerHTML += scroller.innerHTML;
    scroller.innerHTML += scroller.innerHTML;

    while(scroller.scrollWidth < container.offsetWidth * 2) {
        scroller.innerHTML += scroller.innerHTML;
    }
}

duplicateContent();

// Reset animasi untuk menghindari jeda
scroller.style.animation = 'none';
setTimeout(() => {
    scroller.style.animation = '';
}, 10);

