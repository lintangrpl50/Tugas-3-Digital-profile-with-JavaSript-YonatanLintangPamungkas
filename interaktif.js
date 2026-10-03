const btnTema = document.querySelector('#btnToggleTema');
const bodyHalaman = document.querySelector('body');

btnTema.addEventListener('click', function () {
    bodyHalaman.classList.toggle('light-mode');
    if (bodyHalaman.classList.contains('light-mode')) {
        btnTema.textContent = '🌙 Mode Gelap'
    } else {
        btnTema.textContent = '☀ Mode Terang';
    }
});

const btnBukaModal = document.querySelector('#btnKontak');
const elementmodal = document.querySelector('#modalKontak');
const btnTutupModal = document.querySelector('#btnTutupModal');

btnBukaModal.addEventListener('click', function (event) {
    event.preventDefault();
    elementmodal.classList.add('show');
});

btnTutupModal.addEventListener('click', function () {
    elementmodal.classList.remove('show');
});

//===== TOGGLE BAHASA =====

const btnBahasa = document.querySelector('#btnBahasa');
let bahasaAktif = 'Indonesia'

btnBahasa.addEventListener('click', function () {
    bahasaAktif = bahasaAktif === 'Indonesia' ? 'English' : 'Indonesia'

    document.querySelectorAll('[data-Indonesia]').forEach(function (el) {
        el.textContent = el.getAttribute('data-' + bahasaAktif);
    });

    btnBahasa.textContent = bahasaAktif === 'Indonesia' ? 'English' : 'Indonesia';
});