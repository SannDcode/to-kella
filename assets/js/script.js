
// Simpan referensi elemen-elemen HTML yang dibutuhkan dalam variabel
const loadingMessage = document.getElementById('loadingMessage');
const container1 = document.getElementById('container1');
const container2 = document.querySelector('.container2');
const content = document.getElementById('content');
const myAudio = document.getElementById('myAudio');

// Fungsi untuk menampilkan konten kedua
function tampilkanKonten2() {
    container2.style.display = 'none'; // Sembunyikan container kedua
    container2.classList.add('slide-down');
    content.style.display = 'block'; // Tampilkan konten utama
}


// Fungsi untuk menampilkan container2 ketika tombol lovenya di klik
function tampilkanContainer2() {
    container1.classList.add('slide-down');
    container2.classList.add('slide-down');
    container1.style.display = 'none'; // Sembunyikan container pertama
    container2.style.display = 'block'; // Tampilkan container kedua
}


// Tambahkan event listener untuk tombol lovenya di container1
const loveButton = document.querySelector('#container1 button');




// Fungsi untuk menampilkan konten pertama dan menambahkan animasi
function tampilkanKonten() {
    loadingMessage.style.display = 'none'; // Sembunyikan pesan loading
    container1.classList.add('slide-down');
    container1.style.display = 'block'; // Tampilkan container pertama
    myAudio.play(); // Putar lagu

    loveButton.addEventListener('click', function() {
        container1.classList.add('slide-down');
        container2.classList.add('slide-down');
        container1.style.display = 'none'; // Sembunyikan container pertama
        container2.style.display = 'block'; // Tampilkan container kedua

        // Hapus event listener setelah digunakan agar tidak duplikasi
        loveButton.removeEventListener('click', arguments.callee);
    });

}

// Fungsi untuk menampilkan container2 ketika tombol lovenya di klik
function tampilkanContainer2() {
    container1.classList.add('slide-down');
    container2.classList.add('slide-down');
    container1.style.display = 'none'; // Sembunyikan container pertama
    container2.style.display = 'block'; // Tampilkan container kedua
}

// Saat halaman dimuat, tampilkan pesan loading dan tombol pertama
document.addEventListener('DOMContentLoaded', function () {
    container2.style.display = 'none'; // Sembunyikan container kedua pada awalnya
    setTimeout(tampilkanKonten, 1000); // Semb
})

// JavaScript
const heartSpan = document.querySelector('.content span:last-child');

function showSweetAlert(event) {
    if (event.animationName === 'heartAnimation') {
        setTimeout(() => {
            Swal.fire({
                title: 'Notifikasi from Isan :v',
                text: 'maaf iaak cuma sebentar🥴',
                icon: 'info',
                showDenyButton: true,
                confirmButtonText: 'Iyaak aku maapin',
                denyButtonText: 'Gamauu!😠'
            }).then((result) => {
                if (result.isConfirmed) {
                    setTimeout(() => {
                        Swal.fire({
                            title: 'Notifikasi from Isan :v',
                            text: 'Ohiya tunggu dulu...aku punya sesuatu lagi \n\n SPESIAL buat kamu_^',
                            icon: 'success',
                            confirmButtonText: 'Manaaa?!!'
                        }).then((result) => {
                            if (result.isConfirmed) {
                                myAudio.pause(); // Menghentikan lagu sebelum berpindah ke halaman baru
                                window.location.href = 'flower.html'; // Pindah ke halaman flowers.html
                            }
                        });
                    }, 1000); // Jeda waktu 2 detik sebelum muncul SweetAlert kedua
                } else if (result.isDenied) {
                    setTimeout(() => {
                        Swal.fire({
                            title: 'Harus mauu!',
                            text: '',
                            icon: 'warning',
                            confirmButtonText: 'Gamauu!!',
                            showCancelButton: true,
                            cancelButtonText: 'Yawudah dehh'
                        }).then((result) => {
                            if (result.isConfirmed) {
                                showSweetAlert({ animationName: 'heartAnimation' });
                            } else if (result.isDismissed) {
                                setTimeout(() => {
                                    Swal.fire({
                                        title: 'Notifikasi from Isan :v',
                                        text: 'Ohiya tunggu dulu...aku punya sesuatu lagi\nSPESIAL buat kamu_^',
                                        icon: 'success',
                                        confirmButtonText: 'Manaaa?!!'
                                    }).then((result) => {
                                        if (result.isConfirmed) {
                                            myAudio.pause();
                                            window.location.href = 'flower.html';
                                        }
                                    });
                                }, 1000); // Jeda waktu 2 detik sebelum muncul SweetAlert ketiga
                            }
                        });
                    }, 1000); // Jeda waktu 2 detik sebelum muncul SweetAlert kedua
                }
            });
        }, 1000); // Jeda waktu 2 detik sebelum muncul SweetAlert pertama
    }
}

heartSpan.addEventListener('animationend', showSweetAlert);



